var KeyHandle = function (target) {
    var socket = io();
    socket.on('action', function (data) {
        console.log(data);
        var _direction = '';
        var current = target.getStart();
        var _cloneCurrent = $.extend({},current);
        _direction  = data;
        if(target.direction != _direction) {
            target.direction = _direction;
            _cloneCurrent.d = _direction;
            target.stopBoxes.push(_cloneCurrent);
        } else {
            return ;
        }
    });

}
