var express = require('express');
var router = express.Router();

// TechLevel infos

var techs = [
  {
    name: 'Graham',
    firstname: 'Leanne',
    sex: 'female',
    skills: ['HTML', 'CSS'],
    progress: 75
  }, {
    name: 'Howel',
    firstname: 'Erwin',
    sex: 'man',
    skills: ['HTML', 'NodeJS', 'Express'],
    progress: 30
  }, {
    name: 'Bauch',
    firstname: 'Clementine',
    sex: 'female',
    skills: ['HTML', 'CSS'],
    progress: 49
  }, {
    name: 'Weissnat',
    firstname: 'Kurtis',
    sex: 'male',
    skills: ['JavaScript', 'JQuery', 'nodeJS', 'Express'],
    progress: 67
  }, {
    name: 'Dietrich',
    firstname: 'Chelsey',
    sex: 'female',
    skills: ['HTML', 'CSS', 'Javascript', 'NodeJS', 'Express'],
    progress: 49
  }, {
    name: 'Schulist',
    firstname: 'Dennis',
    sex: 'male',
    skills: ['HTML', 'CSS', 'JavaScript'],
    progress: 54
  }, {
    name: 'Lebsack',
    firstname: 'Patricia',
    sex: 'female',
    skills: ['HTML', 'CSS', 'Javascript', 'JQuery', 'NodeJS', 'Express'],
    progress: 97
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { techs:techs });
});

module.exports = router;
