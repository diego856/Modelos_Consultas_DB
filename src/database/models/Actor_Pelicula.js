module.exports = (sequelize, dataTypes) => {
    let alias =  "Actor_Peliculas"
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        actor_id:{
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        movie_id:{
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        created_at:{
            type: dataTypes.DATE,
            allowNull: true
        },
        updated_at:{
            type: dataTypes.DATE,
            allowNull: true
        }
    };
    let config = {
        tableName: "actor_movie",
        timestamps: false
    }
    
     const Actor_Peliculas = sequelize.define(alias, cols, config);
    
    return Actor_Peliculas;
}