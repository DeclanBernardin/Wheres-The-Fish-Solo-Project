const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    let queryText = `UPDATE "fishing_spots" SET "spot_name" = $1, "fish_caught" = $2, "images" = $3, "time_of_year" = $4, "lure_used" = $5, "type_of_fishing" = $6, "water_depth" = $7 WHERE "id" = $8;`
    pool.query(queryText, [req.body.lat, req.body.lng, req.params.id])
        .then(results => res.sendStatus(201))
        .catch(error => {
            console.log('error in server side PUT', error);
        })
})

module.exports = router;