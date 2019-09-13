const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "fishing_spots";`;
    pool.query(queryText)
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error in GET route server side', error);
            res.sendStatus(418)
        })
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

router.put('/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    let queryText = `UPDATE "fishing_spots" SET "latitude" = $1, "longitude" = $2 WHERE "id" = $3;`
    pool.query(queryText, [req.body.lat, req.body.lng, req.params.id])
        .then(results => res.sendStatus(201))
        .catch(error => {
            console.log('error in server side PUT', error);
        })
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    let queryText = `DELETE  FROM "fishing_spots" WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
        .then(results => res.sendStatus(201))
        .catch(error => {
            console.log('error in server side DELETE', error);
        })
})

module.exports = router;