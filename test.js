if (!global.myApp) {
        global.myApp = {};
}

var Hapi = require('hapi');

myApp.server = new Hapi.Server('localhost', 3001, { cors: true });
myApp.server.start();
var user_obj = {
        id: 123,
            age: 20,
                name: 'test',
                    email: 'adsf@asdf.com'
};

myApp.server.route([
            {
                        method: 'GET',
            path: '/',
            handler: function(req, rep) {
                            return rep({data: 'hiiii'}).code(200);
                                    }
    },{
                method: 'GET',
            path: '/api/users/{user_id}/info',
            handler: function(req, rep) {
                            return rep({data: JSON.stringify(user_obj) });
                                    }
    }
    ]);
myApp.server.start(function () {
        console.log('Server started at: ' + myApp.server.info.uri);
});
