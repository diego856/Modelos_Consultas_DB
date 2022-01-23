module.exports = (sequelize, dataTypes) => {
    let alias =  "Peliculas"
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        awards:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        genre_id:{
            type: dataTypes.INTEGER,
            allowNull: true
        },
        length:{
            type: dataTypes.INTEGER,
            allowNull: true
        },
        rating:{
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        release_date:{
            type: dataTypes.DATE,
            allowNull: false
        },
        title:{
            type: dataTypes.STRING(500),
            allowNull: false
        },
        created_at:{
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at:{
            type: dataTypes.DATE,
            allowNull: true,
        }

    };
    let config = {
        tableName: "movies",
        timestamps: false
    }
    
     const Pelicula = sequelize.define(alias, cols, config);
    
    return Pelicula;
}