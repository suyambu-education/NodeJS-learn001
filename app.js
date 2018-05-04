try {
    var express = require('express');
    var http = require('http');
    var path = require('path');
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
    var passport = require('passport');
    var connect = require('express-myconnection');
    var mysql=require('mysql');
    var connection=mysql.createConnection({
        host: 'localhost',
        user:'root',
        password:'14uit007',
        database:'SchoolDB'
    });
    global.db=connection;
    var port = process.env.port || 2200;
    var app = express();
    app.set('views', path.resolve(__dirname + '/public/views/'));

    app.set('view engine', 'ejs');  

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());     
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    app.use(methodOverride());
    app.use(express.static(path.resolve(__dirname + '/public')));
    var login=require('./controller/loginController');
    var atted=require('./controller/attandenceController');
    var addstud=require('./controller/addmissionController');


    app.get('/',login.AppLogin);
    app.post('/admin',login.CheckLogin);
    app.post('/atted',atted.attendSave);
    app.get('/attend',atted.attendData);
    app.get('/addmission',addstud.addStudent);


    
    app.listen(port);
    console.log("App Listening on port  http://localhost:"+port);

    
} catch (error) {
    console.log(error);
}
