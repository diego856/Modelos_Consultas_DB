let db = require("../database/models");

const genresController = {
    list: async function(req,res){
        try {
            const genres = await db.Generos.findAll()
            res.render("genresList", {genres : genres})
        } catch (error) {
            console.log(error);
        }
    },

    detail: async function(req,res){
        try {
            const genre = await db.Generos.findByPk(req.params.id)
            res.render("genresDetail", {genre : genre})
        } catch (error) {
            console.log(error);
        }
    },
}

module.exports= genresController