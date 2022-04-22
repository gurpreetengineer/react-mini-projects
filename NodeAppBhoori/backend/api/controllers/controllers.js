'use strict';

var mongoose = require('mongoose');
var Users = mongoose.model('Users');

exports.create_a_Users = function(req, res) {
    var new_Users = new Users(req.body);
    console.log('Users:::', new_Users);
    new_Users.save(function(err, user) {
        if(err) {
            console.log('error:::', err);
            res.send(err);
        }
        console.log('Users:::', user)
        res.json(user);
    });  
};

exports.list_all_Users = function(req, res) {
    Users.find({}, function(err, Users) {
        if(err) res.send(err);
        console.log('Users:::', Users);
        res.json(Users);
    })
}

exports.login = async function(req, res) {
    const user = await Users.findOne({
        email: {
            $eq: req.body.email
        },
    });

    console.log('user:::', user)
    console.log('verfication body:::', req.body);

    if(user) {
        if(user.password == req.body.password) {
            res.json(user)
        } else {
            res.json('password not matched');
        }
    } else {
        res.json('user not found')
    }
}