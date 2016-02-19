var binarysearch = require('./binarysearch.js');

function ifndef(x, val) {
    return (typeof x === "undefined" ? val : x);
}

var setUnion = function(list_of_sets) {
    var union = {};
    for (var i=0; i<list_of_sets.length; i++) {
	var set = list_of_sets[i];
	for (var k in set) {
	    if (set.hasOwnProperty(k)) {
		union[k] = true;
	    }
	}
    }
    return union;
};

var objectValues = function(obj) {
    return Object.keys(obj).map(function(key) {
	return obj[key];
    });
};

var OncoprintModel = (function () {
    var MIN_ZOOM = 0.00001;
    function OncoprintModel(init_cell_padding, init_cell_padding_on,
	    init_horz_zoom, init_vert_zoom, 
	    init_cell_width, init_track_group_padding) {
	
	this.present_ids = {}; // track_id -> set
	this.id_order = [];
	this.visible_id_order = [];
	
	
	this.id_to_index = {};
	
	this.hidden_ids = {};
	this.track_groups = [];
	this.track_group_sort_priority = [];
	
	this.horz_zoom = ifndef(init_horz_zoom, 1);
	this.vert_zoom = ifndef(init_vert_zoom, 1);

	this.cell_padding = ifndef(init_cell_padding, 3);
	this.cell_padding_on = ifndef(init_cell_padding_on, true);
	this.cell_width = ifndef(init_cell_width, 6);
	this.track_group_padding = ifndef(init_track_group_padding, 10);
	this.bottom_padding = 20;

	this.track_data = {};
	this.track_id_to_datum = {};
	
	this.rule_sets = {}; // map from rule set id to rule set
	this.active_rules = {}; // from track id to active rule map (map with rule ids as keys)
	this.track_rule_set = {}; // track id -> rule set id
	
	this.track_label = {};
	this.track_height = {};
	this.track_padding = {};
	this.track_data_id_key = {};
	this.track_tooltip_fn = {};
	this.track_removable = {};
	this.track_sort_cmp_fn = {};
	this.track_sort_direction_changeable = {};
	
	this.track_sort_direction = {}; // 1: ascending, -1: descending, 0: not
	
	this.cached_track_tops = {};
	this.cached_column_left = {};//id -> left coord
	
	this.precomputed_comparator = {};// track_id -> PrecomputedComparator
    }

    OncoprintModel.prototype.toggleCellPadding = function () {
	this.cell_padding_on = !this.cell_padding_on;
	computeColumnLeft(this);
	return this.cell_padding_on;
    }

    OncoprintModel.prototype.getCellPadding = function (base) {
	return (this.cell_padding * (base ? 1 : this.horz_zoom)) * (+this.cell_padding_on);
    }

    OncoprintModel.prototype.getHorzZoom = function () {
	return this.horz_zoom;
    }

    OncoprintModel.prototype.getMinZoom = function() {
	return MIN_ZOOM;
    }
    
    OncoprintModel.prototype.setHorzZoom = function (z) {
	var min_zoom = this.getMinZoom();
	if (z <= 1 && z >= min_zoom) {
	    this.horz_zoom = z;
	} else if (z > 1) {
	    this.horz_zoom = 1;
	} else if (z < min_zoom) {
	    this.horz_zoom = min_zoom;
	}
	computeColumnLeft(this);
	return this.horz_zoom;
    }
    
    OncoprintModel.prototype.getVertZoom = function() {
	return this.vert_zoom;
    }
    
    OncoprintModel.prototype.setVertZoom = function (z) {
	if (z <= 1 && z >= 0) {
	    this.vert_zoom = z;
	} else if (z > 1) {
	    this.vert_zoom = 1;
	} else if (z < 0) {
	    this.vert_zoom = 0;
	}
	computeTrackTops(this);
	return this.vert_zoom;
    }


    OncoprintModel.prototype.getIdentifiedShapeListList = function(track_id) {
	var active_rules = {};
	var data = this.getTrackData(track_id);
	var id_key = this.getTrackDataIdKey(track_id);
	var shapes = this.getRuleSet(track_id).apply(data, this.getCellWidth(), this.getTrackHeight(track_id), active_rules);
	this.active_rules[track_id] = active_rules;
	return shapes.map(function(shape_list, index) {
	    return {
		id: data[index][id_key],
		shape_list: shape_list
	    };
	});
    }
    
    OncoprintModel.prototype.getActiveRules = function(rule_set_id) {
	var active_rules = {};
	for (var track_id in this.track_rule_set) {
	    if (this.track_rule_set.hasOwnProperty(track_id)) {
		
		if (this.track_rule_set[track_id] === rule_set_id) {
		    var track_active_rules = this.active_rules[track_id];
		    
		    for (var rule in track_active_rules) {
			if (track_active_rules.hasOwnProperty(rule)) {
			    
			    active_rules[rule] = true;
			    
			}
		    }
		}
		
	    }
	}
	return this.rule_sets[rule_set_id].getRulesWithId().filter(function(rule_with_id) {
	    return !!active_rules[rule_with_id.id];
	});
    }
    
    OncoprintModel.prototype.getRuleSets = function() {
	var self = this;
	return Object.keys(this.rule_sets).map(function(rule_set_id) {
	    return self.rule_sets[rule_set_id];
	});
    }

    OncoprintModel.prototype.getCellWidth = function (base) {
	return this.cell_width * (base ? 1 : this.horz_zoom);
    }

    OncoprintModel.prototype.getTrackHeight = function (track_id) {
	return this.track_height[track_id] * this.vert_zoom;
    }

    OncoprintModel.prototype.getTrackPadding = function (track_id) {
	return this.track_padding[track_id] * this.vert_zoom;
    }
    OncoprintModel.prototype.getBottomPadding = function() {
	return this.bottom_padding;
    }
    OncoprintModel.prototype.getTrackSortDirection = function(track_id) {
	return this.track_sort_direction[track_id];
    }
    OncoprintModel.prototype.setTrackSortDirection = function(track_id, dir) {
	// see above for dir options
	this.track_sort_direction[track_id] = dir;
	updatePrecomputedComparator(this, track_id);
    }

    var computeIdToIndex = function(model) {
	model.id_to_index = {};
	var id_order = model.getIdOrder(true);
	for (var i=0; i<id_order.length; i++) {
	    model.id_to_index[id_order[i]] = i;
	}
    }
    var computeVisibleIdOrder = function(model) {
	var hidden_ids = model.hidden_ids;
	model.visible_id_order = model.id_order.filter(function (id) {
	    return !hidden_ids[id];
	});
    }
    
    OncoprintModel.prototype.setCellPaddingOn = function(cell_padding_on) {
	this.cell_padding_on = cell_padding_on;
	computeColumnLeft(this);
    }
    OncoprintModel.prototype.getIdOrder = function (all) {
	if (all) {
	    return this.id_order; // TODO: should be read-only
	} else {
	    return this.visible_id_order;
	}
    }
    OncoprintModel.prototype.getIdToIndexMap = function() {
	return this.id_to_index;
    }

    OncoprintModel.prototype.getHiddenIds = function () {
	var hidden_ids = this.hidden_ids;
	return this.id_order.filter(function (id) {
	    return !!hidden_ids[id];
	});
    }

    OncoprintModel.prototype.setIdOrder = function (ids) {
	this.id_order = ids.slice();
	computeIdToIndex(this);
	computeVisibleIdOrder(this);
	computeColumnLeft(this);
    }

    OncoprintModel.prototype.hideIds = function (to_hide, show_others) {
	if (show_others) {
	    this.hidden_ids = {};
	}
	for (var j = 0, len = to_hide.length; j < len; j++) {
	    this.hidden_ids[to_hide[j]] = true;
	}
	computeVisibleIdOrder(this);
	computeColumnLeft(this);
    }

    OncoprintModel.prototype.moveTrackGroup = function (from_index, to_index) {
	var new_groups = [];
	var group_to_move = this.track_groups[from_index];
	for (var i = 0; i < this.track_groups.length; i++) {
	    if (i !== from_index && i !== to_index) {
		new_groups.push(this.track_groups[i]);
	    }
	    if (i === to_index) {
		new_groups.push(group_to_move);
	    }
	}
	this.track_groups = new_groups;
	computeTrackTops(this);
	return this.track_groups;
    }

    OncoprintModel.prototype.addTracks = function (params_list) {
	for (var i = 0; i < params_list.length; i++) {
	    var params = params_list[i];
	    addTrack(this, params.track_id, params.target_group,
		    params.track_height, params.track_padding,
		    params.data_id_key, params.tooltipFn,
		    params.removable, params.label,
		    params.sortCmpFn, params.sort_direction_changeable, params.init_sort_direction,
		    params.data, params.rule_set);
	}
	computeTrackTops(this);
    }
  
    var addTrack = function (model, track_id, target_group,
	    track_height, track_padding,
	    data_id_key, tooltipFn,
	    removable, label,
	    sortCmpFn, sort_direction_changeable, init_sort_direction,
	    data, rule_set) {
	model.track_label[track_id] = ifndef(label, "Label");
	model.track_height[track_id] = ifndef(track_height, 23);
	model.track_padding[track_id] = ifndef(track_padding, 5);

	model.track_tooltip_fn[track_id] = ifndef(tooltipFn, function (d) {
	    return d + '';
	});
	model.track_removable[track_id] = ifndef(removable, false);
	
	model.track_sort_cmp_fn[track_id] = ifndef(sortCmpFn, function (a, b) {
	    return 0;
	});
	
	model.track_sort_direction_changeable[track_id] = ifndef(sort_direction_changeable, false);
	model.track_data[track_id] = ifndef(data, []);
	model.track_data_id_key[track_id] = ifndef(data_id_key, 'id');
	
	if (typeof rule_set !== 'undefined') {
	    model.rule_sets[rule_set.rule_set_id] = rule_set;
	    model.track_rule_set[track_id] = rule_set.rule_set_id;
	}

	model.track_sort_direction[track_id] = ifndef(init_sort_direction, 1);
	
	target_group = ifndef(target_group, 0);
	while (target_group >= model.track_groups.length) {
	    model.track_groups.push([]);
	}
	model.track_groups[target_group].push(track_id);
	
	
	
	model.computeTrackIdToDatum(track_id);
	updatePresentIds(model, track_id);
	updatePrecomputedComparator(model, track_id);
    }

    var _getContainingTrackGroup = function (oncoprint_model, track_id, return_reference) {
	var group;
	for (var i = 0; i < oncoprint_model.track_groups.length; i++) {
	    if (oncoprint_model.track_groups[i].indexOf(track_id) > -1) {
		group = oncoprint_model.track_groups[i];
		break;
	    }
	}
	if (group) {
	    return (return_reference ? group : group.slice());
	} else {
	    return undefined;
	}
    }

    OncoprintModel.prototype.removeTrack = function (track_id) {
	delete this.track_data[track_id];
	delete this.track_rule_set[track_id];
	delete this.track_label[track_id];
	delete this.track_height[track_id];
	delete this.track_padding[track_id];
	delete this.track_data_id_key[track_id];
	delete this.track_tooltip_fn[track_id];
	delete this.track_removable[track_id];
	delete this.track_sort_cmp_fn[track_id];
	delete this.track_sort_direction_changeable[track_id];
	delete this.track_sort_direction[track_id];

	var containing_track_group = _getContainingTrackGroup(this, track_id, true);
	if (containing_track_group) {
	    containing_track_group.splice(
		    containing_track_group.indexOf(track_id), 1);
	}
	
	computeTrackTops(this);
    }
    
    var computeColumnLeft = function(model) {
	var cell_width = model.getCellWidth();
	var cell_padding = model.getCellPadding();
	var left = {};
	var ids = model.getIdOrder();
	for (var i=0; i<ids.length; i++) {
	    left[ids[i]] = i*(cell_width + cell_padding);
	}
	model.cached_column_left = left;
    };
    
    var computeTrackTops = function(model) {
	var tops = {};
	var groups = model.getTrackGroups();
	var y = 0;
	for (var i = 0; i < groups.length; i++) {
	    var group = groups[i];
	    for (var j = 0; j < group.length; j++) {
		var track_id = group[j];
		tops[track_id] = y;
		y += 2 * model.getTrackPadding(track_id);
		y += model.getTrackHeight(track_id);
	    }
	    if (group.length > 0) {
		y += model.getTrackGroupPadding();
	    }
	}
	model.cached_track_tops = tops;
    };
    
    OncoprintModel.prototype.getOverlappingCell = function(x,y) {
	// First, see if it's in a column
	var id_order = this.getIdOrder();
	var column_left = this.getColumnLeft();
	var nearest_id_index = binarysearch(id_order, x, function(id) { return column_left[id];}, true);
	if (x < column_left[id_order[nearest_id_index]] + this.getCellWidth()) {
	    var id = id_order[nearest_id_index];
	    var tracks = this.getTracks();
	    var track_tops = this.getTrackTops();
	    var nearest_track_index = binarysearch(tracks, y, function(track) { return track_tops[track];}, true);
	    var nearest_track = tracks[nearest_track_index];
	    if (y < track_tops[nearest_track] + this.getTrackHeight(nearest_track)) {
		return {'id':id, 'track':nearest_track, 'top':track_tops[nearest_track], 'left':column_left[id]};
	    }
	}
	return null;
    };
    
    OncoprintModel.prototype.getTrackDatum = function(track_id, id) {
	var data = this.getTrackData(track_id);
	var datum_id_key = this.getTrackDataIdKey(track_id);
	var datum = null;
	for (var i=0; i<data.length; i++) {
	    if (data[i][datum_id_key] === id) {
		datum = data[i];
		break;
	    }
	}
	return datum;
    }
    
    OncoprintModel.prototype.getTrackTops = function (desired_track_id) {
	if (typeof desired_track_id === 'undefined') {
	    return this.cached_track_tops;
	} else {
	    return this.cached_track_tops[desired_track_id];
	}
    }
    OncoprintModel.prototype.getContainingTrackGroup = function (track_id) {
	return _getContainingTrackGroup(this, track_id, false);
    }

    OncoprintModel.prototype.getTrackGroups = function () {
	// TODO: make read-only
	return this.track_groups;
    }

    OncoprintModel.prototype.getTracks = function () {
	var ret = [];
	for (var i = 0; i < this.track_groups.length; i++) {
	    for (var j = 0; j < this.track_groups[i].length; j++) {
		ret.push(this.track_groups[i][j]);
	    }
	}
	return ret;
    }

    OncoprintModel.prototype.getColumnLeft = function(id) {
	if (typeof id === 'undefined') {
	    return this.cached_column_left;
	} else {
	    return this.cached_column_left[id];
	}
    }
    
    OncoprintModel.prototype.getViewHeight = function() {
	var tracks = this.getTracks();
	var last_track = tracks[tracks.length-1];
	return this.getTrackTops(last_track)+this.getTrackHeight(last_track)+2*this.getTrackPadding(last_track)
		    + this.getBottomPadding();
    }
    OncoprintModel.prototype.moveTrack = function (track_id, new_previous_track) {
	var track_group = _getContainingTrackGroup(this, track_id, true);
	if (track_group) {
	    track_group.splice(track_group.indexOf(track_id), 1);
	    var new_position = (new_previous_track === null ? 0 : track_group.indexOf(new_previous_track)+1);
	    track_group.splice(new_position, 0, track_id);
	}
	
	computeTrackTops(this);
    }

    OncoprintModel.prototype.getTrackLabel = function (track_id) {
	return this.track_label[track_id];
    }

    OncoprintModel.prototype.getTrackTooltipFn = function (track_id) {
	return this.track_tooltip_fn[track_id];
    }

    OncoprintModel.prototype.getTrackDataIdKey = function (track_id) {
	return this.track_data_id_key[track_id];
    }

    OncoprintModel.prototype.getTrackGroupPadding = function () {
	return this.track_group_padding;
    }
    
    OncoprintModel.prototype.isTrackRemovable = function (track_id) {
	return this.track_removable[track_id];
    }
    
    OncoprintModel.prototype.isTrackSortDirectionChangeable = function (track_id) {
	return this.track_sort_direction_changeable[track_id];
    }

    OncoprintModel.prototype.getRuleSet = function (track_id) {
	return this.rule_sets[this.track_rule_set[track_id]];
    }

    OncoprintModel.prototype.shareRuleSet = function(source_track_id, target_track_id) {
	var curr_rule_set_id = this.track_rule_set[target_track_id];
	delete this.rule_sets[curr_rule_set_id];
	delete this.active_rules[target_track_id];
	this.track_rule_set[target_track_id] = this.track_rule_set[source_track_id];
    }

    OncoprintModel.prototype.getTrackSortComparator = function(track_id) {
	return this.track_sort_cmp_fn[track_id];
    }
    
    OncoprintModel.prototype.getTrackData = function (track_id) {
	return this.track_data[track_id];
    }

    var updatePresentIds = function(model, track_id) {
	var ids = {};
	var data = model.getTrackData(track_id);
	var data_id_key = model.getTrackDataIdKey(track_id);
	for (var i=0; i<data.length; i++) {
	    ids[data[i][data_id_key]] = true;
	}
	model.present_ids[track_id] = ids;
	
	var all_present_ids = setUnion(objectValues(model.present_ids));
	model.setIdOrder(Object.keys(all_present_ids));
    };
    
    OncoprintModel.prototype.setTrackData = function (track_id, data, data_id_key) {
	this.track_data[track_id] = data;
	this.track_data_id_key[track_id] = data_id_key;
	this.computeTrackIdToDatum(track_id);
	updatePresentIds(this, track_id);
	updatePrecomputedComparator(this, track_id);
    }
    
    OncoprintModel.prototype.computeTrackIdToDatum = function(track_id) {
	this.track_id_to_datum[track_id] = {};
	
	var track_data = this.track_data[track_id] || [];
	var track_id_key = this.track_data_id_key[track_id];
	for (var i=0; i<track_data.length; i++) {
	    this.track_id_to_datum[track_id][track_data[i][track_id_key]] = track_data[i];
	}
    }
    
    OncoprintModel.prototype.setTrackGroupSortPriority = function(priority) {
	this.track_group_sort_priority = priority;
	this.sort();
    }
    
    var updatePrecomputedComparator = function(model, track_id) {
	model.precomputed_comparator[track_id] = new PrecomputedComparator(model.getTrackData(track_id),
									    model.getTrackSortComparator(track_id),
									    model.getTrackSortDirection(track_id),
									    model.getTrackDataIdKey(track_id));
    };
    
    OncoprintModel.prototype.sort = function() {
	var track_group_sort_priority = this.track_group_sort_priority;
	var track_groups = this.getTrackGroups();
	var track_groups_in_sort_order;
	
	if (track_group_sort_priority.length < track_groups.length) {
	    track_groups_in_sort_order = track_groups;
	} else {
	    track_groups_in_sort_order = track_group_sort_priority.map(function(x) {
		return track_groups[x];
	    });
	}
	
	var track_sort_priority = track_groups_in_sort_order.reduce(function(acc, next) {
	    return acc.concat(next);
	}, []);
	
	var precomputed_comparator = this.precomputed_comparator;
	var curr_id_to_index = this.getIdToIndexMap();
	var combinedComparator = function(idA, idB) {
	    var res = 0;
	    for (var i=0; i<track_sort_priority.length; i++) {
		res = precomputed_comparator[track_sort_priority[i]].compare(idA, idB);
		if (res !== 0) {
		    break;
		}
	    }
	    if (res === 0) {
		// stable sort
		res = ( curr_id_to_index[idA] < curr_id_to_index[idB] ? -1 : 1); // will never be the same, no need to check for 0
	    }
	    return res;
	}
	var id_order = this.getIdOrder(true);
	id_order.sort(combinedComparator);
	this.setIdOrder(id_order);
    }
    
    OncoprintModel.prototype.setSortConfig = function(params) {
	// TODO
    }

    return OncoprintModel;
})();

var PrecomputedComparator = (function() {
    function PrecomputedComparator(list, comparator, sort_direction, element_identifier_key) {
	var sorted_list = list.sort(function(d1, d2) {
	    if (sort_direction === 0) {
		return 0;
	    }
	    var res = comparator(d1, d2);
	    if (res === 2) {
		return 1;
	    } else if (res === -2) {
		return -1;
	    } else {
		return res*sort_direction;
	    }
	});
	this.change_points = []; // i is a change point iff comp(elt[i], elt[i+1]) !== 0
	for (var i=0; i<sorted_list.length; i++) {
	    if (i === sorted_list.length - 1) {
		break;
	    }
	    if (comparator(sorted_list[i], sorted_list[i+1]) !== 0) {
		this.change_points.push(i);
	    }
	}
	// Note that by this process change_points is sorted
	this.id_to_index = {};
	for (var i=0; i<sorted_list.length; i++) {
	    this.id_to_index[sorted_list[i][element_identifier_key]] = i;
	}
    }
    PrecomputedComparator.prototype.compare = function(idA, idB) {
	var indA = this.id_to_index[idA];
	var indB = this.id_to_index[idB];
	if (typeof indA === 'undefined' && typeof indB === 'undefined') {
	    return 0;
	} else if (typeof indA === 'undefined') {
	    return 1;
	} else if (typeof indB === 'undefined') {
	    return -1;
	}
	
	var should_negate_result = false;
	if (indA === indB) {
	    return 0;
	} else if (indA > indB) {
	    // switch if necessary to make process WLOG
	    var tmp = indA;
	    indA = indB;
	    indB = tmp;
	    should_negate_result = true;
	}
	// See if any changepoints in [indA, indB)
	var upper_bd_excl = this.change_points.length;
	var lower_bd_incl = 0;
	var middle;
	var res = 0;
	while (true) {
	    middle = Math.floor((lower_bd_incl + upper_bd_excl) / 2);
	    if (lower_bd_incl === upper_bd_excl) {
		break;
	    } else if (this.change_points[middle] >= indB) {
		upper_bd_excl = middle;
	    } else if (this.change_points[middle] < indA) {
		lower_bd_incl = middle+1;
	    } else {
		res = -1;
		break;
	    }
	}
	if (should_negate_result) {
	    res = res * -1;
	}
	return res;
    }
    return PrecomputedComparator;
})();
module.exports = OncoprintModel;