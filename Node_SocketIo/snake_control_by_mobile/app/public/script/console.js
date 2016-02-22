(function () {
    var socket = io();

    $('.console').on('click',function(e) {
         var type = $(e.target).data('type');
        socket.emit('action', type);
    })

})()