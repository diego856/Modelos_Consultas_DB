module.exports = (sequelize, dataTypes) => {
    let alias =  "Generos"
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        active:{
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        ranking:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        name:{
            type: dataTypes.STRING(100),
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
        tableName: "genres",
        timestamps: false
    }
    
     const Genero = sequelize.define(alias, cols, config);
    
    return Genero;
}