module.exports = (sequelize, DataTypes) => {
    const Trades = sequelize.define("Trades", {
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        paragraph_one:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        paragraph_two:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        paragraph_three:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        paragraph_four:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        paragraph_five:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        paragraph_six:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        paragraph_seven:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },{
    timestamps: false, // disables createdAt and updatedAt columns
  });
    return Trades;
}