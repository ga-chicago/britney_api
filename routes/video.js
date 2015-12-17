var express = require('express');
var router = express.Router();
var model = require('../models/Video');

/* GET all Songs */
router.get('/', function(req, res, next) {
  model.find(function(err, videos) {
    if (err) console.log(err);
    res.json(videos);
  });
});

/* GET video by id */
router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, video) {
    if (err) console.log(err);
    res.json(video);
  });
});

/* CREATE video */
router.post('/', function(req, res) {
  console.log(req.body);
  model.create(req.body, function(err, video) {
    if (err) console.log(err);
    res.json(video);
  });
});

/* UPDATE video by id */
router.put('/:id', function(req, res) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, video) {
    if (err) console.log(err);
    res.json({"Message": "Your item was updated."});
  });
});
router.patch('/:id', function(req, res) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, video) {
    if (err) console.log(err);
    res.json({"Message": "Your item was updated."});
  });
});

/* DESTROY video by id */
router.delete('/:id', function(req, res) {
  model.findByIdAndRemove(req.params.id, req.body, function(err, video) {
    if (err) console.log(err);
    res.json({"Message": "Your item was deleted."});
  });
});

module.exports = router;
