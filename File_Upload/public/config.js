
requirejs.config({

    paths: {
        'dust': '/static/vendor/dust-full-1.1.1',
        'rdust': '/static/vendor/require-dust',
        'jquery': '/static/vendor/jquery',
        'hammer': '/static/vendor/hammer2',
        'underscore': '/static/vendor/lodash.min',
        'backbone': '/static/vendor/backbone',
        'marionette': '/static/vendor/backbone.marionette.2.4.1',
        'q': '/static/vendor/q'
    },
    shim: {
        'dust': {
            'exports': 'dust'
        },
        'hammer': ['jquery'],
        'backbone': {
            'deps': ['underscore', 'jquery'],
            'exports': 'Backbone'
        },
        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        }
    },
    deps: ['app']
});