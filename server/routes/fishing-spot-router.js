const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// gets the fishing spots and there details
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "fishing_spots";`;
    pool.query(queryText)
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error in GET route server side', error);
            res.sendStatus(418)
        })
});

// adds the spot locations to the database 
router.post('/', (req, res) => {
console.log(req.body);
console.log(req.user.id);
    if (req.isAuthenticated()) {
    let queryText = `INSERT INTO "fishing_spots" ("user_id", "latitude", "longitude") VALUES ($1, $2, $3);`;
    pool.query(queryText, [req.user.id, req.body.lat, req.body.lng])
        .then(results => res.sendStatus(201))
        .catch(error => {
            console.log('error in server side POST', error);
        })
    }
});

// updates the new location the spot is dragged to
router.put('/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    console.log(req.user.id);
    if (req.isAuthenticated()) {
        if(req.user.id === req.body.userid){
    let queryText = `UPDATE "fishing_spots" SET "latitude" = $1, "longitude" = $2 WHERE "id" = $3;`
    pool.query(queryText, [req.body.lat, req.body.lng, req.params.id])
        .then(results => res.sendStatus(201))
        .catch(error => {
            console.log('error in server side PUT', error);
        })
    }
    }
})

// deletes the fishing spot based on the spots id and the id of the user
router.delete('/:id', (req, res) => {
    console.log('this is', req.params.id);
    console.log('user id should be this', req.user.id);
    if (req.isAuthenticated()) {
    let queryText = `DELETE  FROM "fishing_spots" WHERE ("id" = $1 AND "user_id" = $2);`
    pool.query(queryText, [req.params.id, req.user.id])
        .then(results => res.sendStatus(201))
        .catch(error => {
            console.log('error in server side DELETE', error);
        })
    }
})

module.exports = router;