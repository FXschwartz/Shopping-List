'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json({limit:'4MB'}));
app.use('/', express.static(__dirname + '/'));

app.listen('3000', function() {
    console.log('Server running at http://localhost:3000');
});

var items = [
	{text:'Frozen Pizza',	price:7.98,	quantity:1},
	{text:'Ice Cream',		price:5.63,	quantity:4},
	{text:'Bread',			price:0.99, quantity:2, dateAdded:new Date()}
];

app.get('/api/items', function(req,res) {
	items.forEach(function(item,index) {
		item.id = index+1;
	});
	res.json(items);
});

app.post('/api/new', function(req,res) {
	var item = req.body;
	if(!item.text) return res.status(400).json({error:'Name cannot be blank'});
	console.log('/api/new\t item=%j', item);
	items.push(item);
	res.json(items);
});
