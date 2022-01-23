module.exports = (sequelize, dataTypes) => {
    let alias =  "Actor_Episodios"
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
        episode_id:{
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
        tableName: "actor_episode",
        timestamps: false
    }
    
     const Actor_Episodios = sequelize.define(alias, cols, config);
    
    return Actor_Episodios;
}