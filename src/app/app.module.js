(function() {
    'use strict';
    
    angular
        .module ('app', [
        //angular modules
        'ngRoute',

        //third party modules
        'firebase',
        
        //Custom modules
        'app.landing',
        'app.waitList'
    ]);
    
}) ();
