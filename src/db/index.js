let { Sequelize, Op } = require("sequelize");
let modelBreed = require("./models/Breed.js")
let modelTemper = require("./models/Temper.js")
require("dotenv").config()



const db = new Sequelize(`postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`);



modelBreed(db);
modelTemper(db);

let { Breed, Temper } = db.models;

Breed.belongsToMany(Temper, { as: "temperament", through: "BreedTemp" });
Temper.belongsToMany(Breed, { through: "BreedTemp" });


module.exports = {
    ...db.models,
    db,
    Op
}