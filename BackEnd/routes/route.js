var express = require('express');
var router = express.Router();
var _ = require('lodash');

var Recipe = require('../models/recipe');


router.get('/',(req,res)=>{
  Recipe.find().then((data)=>{
     res.status(200).json(data);
  },(e)=>{
    res.status(400).send(e);
  })
});

router.get('/:id', (req, res) => {
  Recipe.findOne({ _id: req.params.id }).then((data) => {
      res.status(200).json(data);
    }
  ).catch((error) => {
      res.status(404).json({
        error: error
      });
    }
  );
});

router.post('/',(req,res)=>{
    var body = _.pick(req.body,['title','ingredients','instructions','difficulty','time']);
    var recipe = new Recipe(body);

    recipe.save().then(()=>{
       res.status(200).json({message: 'Recipe posted successfully!'});
    }).catch((e)=> {
       res.status(400).send(e);
    })
});

router.put('/:id', (req, res) => {
  var body = _.pick(req.body,['title','ingredients','instructions','difficulty','time']);
  Recipe.updateOne({_id: req.params.id}, body).then((data) => {
    res.status(200).json({message: 'Recipe updated successfully!'});
    }
  ).catch((error) => {
      res.status(404).json({
        error: error
      });
    }
  );
});

router.delete('/:id', (req, res) => {
  Recipe.deleteOne({_id: req.params.id}).then((data) => {
    res.status(200).json({message: 'Recipe Deleted!'});
    }
  ).catch((error) => {
      res.status(404).json({
        error: error
      });
    }
  );
});

module.exports = router;
