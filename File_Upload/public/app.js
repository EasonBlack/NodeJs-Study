define(function(require){
    var $ = require('jquery')
        ,_ = require('underscore')
        ,self = this;
    $('#fileinput').on('change', function(){
        self.file = this.files[0];
        console.log("name : " + file.name);
        console.log("size : " + file.size);
        console.log("type : " + file.type);
        console.log("date : " + file.lastModified);
    });

    $('#btnUpload').on('click',function(){
        var fd = new FormData();
        fd.append('uploadingFile',  $('#fileinput')[0].files[0]);
        fd.append('comment', 'This is a test.');
        console.log(fd);
        $.ajax({
            type: "POST",
            url: "/fileUpload",
            processData: false,
            contentType: false,
            data:fd,
            success: function(data){
                console.log(data);
                $('#txtResult').html(data);
            }
        });
    });

});