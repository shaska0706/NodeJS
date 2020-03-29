const express = require('express');
const pokemon = express.Router();
const db = require('../config/database')

pokemon.post("/", (req, res, next)=>{
    return res.status(200).send(req.body);
})

pokemon.get('/', async (req, res, next)=>{
    const pkmn = await db.query('SELECT * FROM pokemon');
    return res.status(200).json(pkmn);
});  

pokemon.get('/:id([0-9]{1,3})', async (req, res, next)=>{
    const id = req.params.id;
    const pok_id = await db.query('SELECT * FROM pokemon WHERE pok_id = ?', id);
    (id >= 1 && id <= 722) ?
        res.status(200).json(pok_id):
        res.status(404).send('Pokemon no encontrado');
});

pokemon.get('/:name([A-Za-z]+)', async (req,res,next)=>{
    const name=req.params.name;
    const pok_name = await db.query('SELECT * FROM pokemon WHERE pok_name =?', name);
    (name.length > 0) ?
        res.status(200).json(pok_name) : 
        res.status(404).send("Pokemon no encontrado");
});

pokemon.get('/:id([0-9]{1,9})', async (req, res, next)=>{
    const id = req.params.id;
    if(id >722){
        res.status(404).send('Pokemon no encontrado');
    }
});

module.exports = pokemon;