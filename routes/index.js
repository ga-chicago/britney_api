var express = require('express');
var router = express.Router();
var model = require('../models/Song');

/* GET all Songs */
router.get('/', function(req, res, next) {
  model.find(function(err, songs) {
    if (err) console.log(err);
    res.json(songs);
  });
});

/* GET song by id */
router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, songs) {
    if (err) console.log(err);
    res.json(songs);
  });
});

/* CREATE song */
router.post('/', function(req, res) {
  console.log(req.body);
  model.create(req.body, function(err, song) {
    if (err) console.log(err);
    res.json(song);
  });
});

/* UPDATE song by id */
router.put('/:id', function(req, res) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, song) {
    if (err) console.log(err);
    res.json({"Message": "Your item was updated."});
  });
});
router.patch('/:id', function(req, res) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, song) {
    if (err) console.log(err);
    res.json({"Message": "Your item was updated."});
  });
});

/* DESTROY song by id */
router.delete('/:id', function(req, res) {
  model.findByIdAndRemove(req.params.id, req.body, function(err, song) {
    if (err) console.log(err);
    res.json({"Message": "Your item was deleted."});
  });
});

module.exports = router;
