var express = require('express');
var router = express.Router();
var db = require('mysql');
var dbconn = require('./db.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'System Quiz' });
});

/* quiz page. */
router.get('/quiz', function(req, res) {
  var name = req.query.name.trim().slice(0,8);
  if (name.length===0) {res.redirect('/');}
  res.render('quiz', { title: 'System Quiz', name: name});
});

router.get('/saveScore', function(req, res) {
  var name = req.query.name.trim().slice(0,8);
  var score = Number(req.query.score);
  var countdown = Number(req.query.countdown);
  console.log(name, score, countdown);
  if (name.length===0 && score===NaN && score > 30 && score < 0 && countdown===NaN && countdown > 360 && countdown < 0) {
    res.redirect('/');
  } else {
    dbconn.query(`SELECT * FROM leaderboard WHERE username='${name}' AND score < ${score} OR (score=${score} AND countdown < ${countdown})`, (error, rows) => {
      if (error) throw error;
      if (rows.length > 0) {
        dbconn.query(`UPDATE leaderboard SET score=${score}, countdown=${countdown}, endedtime=CURRENT_TIMESTAMP() WHERE username='${name}'`, (upd_error, upd_rows) => {
          if (upd_error) throw upd_error;
          console.log("Success");
        });
      } else {
        dbconn.query(`INSERT INTO leaderboard(username,score,countdown) VALUES ('${name}', ${score}, ${countdown});`, (insert_error, insert_rows) => {
          if (insert_error) throw insert_error;
          console.log("Success");
        });
      }
    });
    res.redirect('/leaderboard');
  }
})

router.get('/leaderboard', function(req, res) {
  dbconn.query('SELECT RANK() OVER (ORDER BY score DESC, endedtime, countdown DESC, username) as no,username,score,endedtime FROM leaderboard', (error, rows) => {
    if (error) throw error;
    res.render('leaderboard', { title: 'System Quiz', rankList: rows });
  });
})

module.exports = router;