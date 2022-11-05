const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  const sqlText = `
  SELECT json_agg("genres") AS genres FROM "movies"
  LEFT JOIN "movies_genres" ON "movies_genres".movie_id = "movies".id
  LEFT JOIN "genres" ON "genres".id = "movies_genres".genre_id
  WHERE "movies".id = $1
  GROUP BY "movies".id;
  
  `;
  pool.query(sqlText, [req.params.id])
    .then(dbRes => {
      // Send back the first item in the array
      res.send(dbRes.rows[0]);
    })
});

module.exports = router;