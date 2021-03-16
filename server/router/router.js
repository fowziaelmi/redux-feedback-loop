
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    pool
      .query('SELECT * FROM "feedback" ORDER BY "date" DESC;')
      .then((dbRes) => {
        res.send(dbRes.rows);
      })
      .catch((err) => {
        console.log('Error in DB get', err);
        res.sendStatus(500);
      });
  });

  // POST route 
  router.post('/', (req, res) => {
    console.log('req;', req.body);
    const review = req.body;
    console.log('feedback:', review)
  
    const sqlScript = `INSERT INTO "feedback"
    ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
  
    pool
      .query(sqlScript, [
        review.feeling,
        review.understanding,
        review.supported,
        review.comments,
      ])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Error in POST server', err);
        res.sendStatus(500);
      });
  });
  
  module.exports = router;