
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
  module.exports = router;