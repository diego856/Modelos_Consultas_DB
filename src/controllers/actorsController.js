let db = require("../database/models");

const actorsController = {
    list: async function(req,res){
        try {
            const actors = await db.Actores.findAll()
            res.render("actorsList", {actors : actors})
        } catch (error) {
            console.log(error);
        }
    },

    detail: async function(req,res){
        try {
            const actor = await db.Actores.findByPk(req.params.id)
            res.render("actorsDetail", {actor : actor})
        } catch (error) {
            console.log(error);
        }
    },
}

module.exports= actorsController