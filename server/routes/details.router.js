const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    console.log(req.user.id);
    
    let queryText = `UPDATE "fishing_spots" SET "spot_name" = $1, "fish_caught" = $2, "images" = $3, "time_of_year" = $4, "lure_used" = $5, "type_of_fishing" = $6, "water_depth" = $7, "weather" = $8 WHERE ("id" = $9 AND "user_id" = $10);`
    pool.query(queryText, [req.body.spot_name, req.body.fish_caught, req.body.images, req.body.time_of_year, req.body.lure_used, req.body.type_of_fishing, req.body.water_depth, req.body.weather, req.params.id, req.user.id])
        .then(results => res.sendStatus(201))
        .catch(error => {
            console.log('error in server side PUT', error);
        })
})

module.exports = router;