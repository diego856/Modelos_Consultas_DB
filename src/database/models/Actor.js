module.exports = (sequelize, dataTypes) => {
    let alias =  "Actores"
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        favorite_movie_id:{
            type: dataTypes.INTEGER,
            foreignKey: true,
            allowNull: true
        },
        first_name:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        rating:{
            type: dataTypes.DECIMAL(3,1),
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
        tableName: "actors",
        timestamps: false
    }
    
     const Actores = sequelize.define(alias, cols, config);
    
    return Actores;
}