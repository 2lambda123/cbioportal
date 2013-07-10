<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
</head>
<body>
<form name="echofile" action="echofile" enctype="multipart/form-data" method="POST">
    <input name="cna" type="file" size="40">
    <input name="mutation" type="file" size="40">
    <input type="button" value="Go!">
</form>
<progress></progress>
</body>

<script type="text/javascript">
    var data;
    $(':button').click(function(){
        var formData = new FormData($('form')[0]);
        $.ajax({
            url: 'echofile',
            type: 'POST',
            xhr: function() {  // custom xhr
                var myXhr = $.ajaxSettings.xhr();
                if(myXhr.upload){ // check if upload property exists
                    myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // for handling the progress of the upload
                }
                return myXhr;
            },
            //Ajax events
//                beforeSend: beforeSendHandler,
                success: function(res) { data = res; console.log(res); },
//                error: errorHandler,
            // Form data
            data: formData,
            //Options to tell JQuery not to process data or worry about content-type
            cache: false,
            contentType: false,
            processData: false
        });
    });

    function progressHandlingFunction(e){
        if(e.lengthComputable){
            $('progress').attr({value:e.loaded,max:e.total});
        }
    }
</script>
</html>