const express = require('express');
const router = express.Router();

const GithubController = require('./controllers/github.controller');
const WallStreetJournalController = require('./controllers/wall.street.journal.controller');
const BBCController = require('./controllers/bbc.controller');
const TechCrunchController = require('./controllers/tech-crunch.controller');
const HackerNewsController = require('./controllers/hacker.news.controller');


router.get('/github', GithubController.listAll);
router.get('/wall-street-journal', WallStreetJournalController.listAll);
router.get('/bbc', BBCController.listAll);
router.get('/tech-crunch', TechCrunchController.listAll);
router.get('/hacker-news', HackerNewsController.listAll);

module.exports = router;