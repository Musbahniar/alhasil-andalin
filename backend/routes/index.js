var express = require('express');
var App = express.Router();
var bodyParser = require('body-parser');
var Session = require('express-session');
var Session= Session({
	secret:'younevertryyouneverknow', 
	saveUninitialized: true,
	resave: true
});
var sessionInfo;

//create
App.post('/api', function(req, res) {
 	 
    var insert_data = req.body;   
	req.getConnection(function(err,connection){
		connection.query('INSERT INTO tbl_mahasiswa SET ?',[insert_data],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
});

// read
App.get('/api', function(req, res) {
  var Qquery = "SELECT " +
			  "tbl_mahasiswa.*," +
			  "tbl_prodi.cNamaProdi," +
			  "tbl_prodi.cInisialProdi " +
			  "FROM tbl_mahasiswa " +
			  "INNER JOIN tbl_prodi " +
			   "ON tbl_mahasiswa.cIdProdi = tbl_prodi.cIdProdi";
	req.getConnection(function(err,connection){
		connection.query(Qquery,[],function(err,result){
			if(err) return res.status(400).json();

			return res.status(200).json(result);
		});
	});
});

// read prodi
App.get('/api/prodi', function(req, res) {
  var Qquery = "SELECT * FROM tbl_prodi";
	req.getConnection(function(err,connection){
		connection.query(Qquery,[],function(err,result){
			if(err) return res.status(400).json();

			return res.status(200).json(result);
		});
	});
});

// read by id
App.get('/api/:id',  function(req, res) {
 	var id = req.params.id;
 	  var Qquery = "SELECT " +
			  "tbl_mahasiswa.*," +
			  "tbl_prodi.cNamaProdi " +
			  "FROM tbl_mahasiswa " +
			  "INNER JOIN tbl_prodi " +
			   "ON tbl_mahasiswa.cIdProdi = tbl_prodi.cIdProdi WHERE tbl_mahasiswa.cId = ?";
	req.getConnection(function(err,connection){
		connection.query(Qquery,[id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result[0]);
		});
	});
});

// read by nama
App.get('/api/find/:nama', function(req, res) {
  var nama = req.params.nama;
  var Qquery = "SELECT " +
			  "tbl_mahasiswa.*," +
			  "tbl_prodi.cNamaProdi," +
			  "tbl_prodi.cInisialProdi " +
			  "FROM tbl_mahasiswa " +
			  "INNER JOIN tbl_prodi " +
			   "ON tbl_mahasiswa.cIdProdi = tbl_prodi.cIdProdi WHERE tbl_mahasiswa.cNamaMahasiswa LIKE ?";
	req.getConnection(function(err,connection){
		connection.query(Qquery,nama + '%',function(err,result){
			if(err) return res.status(400).json();

			return res.status(200).json(result);
		});
	});
});

//update
App.put('/api/:id', function(req, res) {
 	var	id 	 = req.params.id;

	req.getConnection(function(err,connection){
		connection.query('UPDATE tbl_mahasiswa SET ? WHERE cId = ? ',[req.body, id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
});

//delete
App.delete('/api/:id', function(req, res) {
 	var id = req.params.id;

	req.getConnection(function(err,connection){
		connection.query('DELETE FROM tbl_mahasiswa WHERE cId = ? ',[id],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
		});
	});
});

module.exports = App;
