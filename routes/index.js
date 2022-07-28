var express = require('express');
var router = express.Router();

const categoriesRouter = require('./categories');
const organizationsRouter = require('./organizations');
const authRouter = require('./auth');
const usersRouter = require('./users');
const newsRouter = require('./news');
const activitiesRouter = require('./activities');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//Auth
router.use('/auth', authRouter);

//Categories
router.get('/login', function (req, res) {
  res.render('login');
});

router.use('/categories', categoriesRouter);

//Organizations
router.use('/organizations', organizationsRouter);

//Users
router.use('/users', usersRouter);

//Activities
router.use('/activities', activitiesRouter);

//News
router.use('/news', newsRouter);

module.exports = router;
