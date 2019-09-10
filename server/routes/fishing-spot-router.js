const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
console.log(req.body);
    let queryText = `INSERT INTO "fishing_spots" ("latitude", "longitude") VALUES ($1, $2);`;
    pool.query(queryText, [req.body.lat, req.body.lng])
        .then(results => res.sendStatus(201))
        .catch(error => {
            console.log('error in server side POST', error);
        })
});

module.exports = router;