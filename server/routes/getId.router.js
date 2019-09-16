const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
   console.log(req.params.id)
    let queryText = `SELECT * FROM "fishing_spots" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
        .then(results => res.send(results.rows[0]))
        .catch(error => {
            console.log('Error in GET route server side', error);
            res.sendStatus(418)
        })
});


module.exports = router;