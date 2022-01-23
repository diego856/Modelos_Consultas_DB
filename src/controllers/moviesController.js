let db = require("../database/models");
const { validationResult } = require("express-validator")

const moviesController = {
    list: async function(req,res){
        try {
            const movies = await db.Peliculas.findAll()
            res.render("moviesList", {movies : movies})
        } catch (error) {
            console.log(error);
        }
    },

    detail: async function(req,res){
        try {
            const movie = await db.Peliculas.findByPk(req.params.id)
            res.render("moviesDetail", {movie : movie})
        } catch (error) {
            console.log(error);
        }
    },

    new: async function(req,res){
        try {
            const movies = await db.Peliculas.findAll({
                order: [['title', 'ASC']]
            })
            res.render("moviesList", {movies : movies})
        } catch (error) {
            console.log(error);
        }
    },

    recomended: async function(req,res){
        try {
            const movies = await db.Peliculas.findAll({
                order: [['release_date', 'DESC']],
                limit: 5
            })
            res.render("recommendedMovies", {movies : movies})
        } catch (error) {
            console.log(error);
        }
    },
    add: function (req, res) {
        res.render('moviesAdd')   
    },
    create: function (req, res) {
        try {
            const resultvalidations = validationResult(req);

            if(!resultvalidations.isEmpty())
            {
                return res.render('moviesAdd',{
                errors: resultvalidations.mapped(),
                oldData: req.body,
            })}

            db.Peliculas.create({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length
            })
            res.redirect('/movies')
        } catch (error) {
            console.log(error);
        }
    },
    edit: async function(req, res) {
        try {
            const Movie = await db.Peliculas.findByPk(req.params.id)
            res.render("moviesEdit", {Movie : Movie})
        } catch (error) {
            console.log(error);
        }
    },
    update: async function (req,res) {
        try {
            const resultvalidations = validationResult(req);
            const Movie = await db.Peliculas.findByPk(req.params.id)

            if(!resultvalidations.isEmpty())
            {
                return res.render('moviesEdit',{
                errors: resultvalidations.mapped(),
                oldData: req.body,
                Movie : Movie,
            })}

            db.Peliculas.update({
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length
            },{
                where: {id: req.params.id}
            })
            res.redirect('/movies/')
        } catch (error) {
            console.log(error);
        }
    },
    delete: function (req, res) {
        try {
            db.Peliculas.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.redirect('/movies')
        } catch (error) {
            console.log(error);
        }
    },
    // destroy: function (req, res) {
    //     // TODO
    // }


}

module.exports= moviesController