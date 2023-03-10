module.exports = (sequelize, DataTypes) => {
    const Citizens = sequelize.define("Citizens", {
        first_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_of_birth:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        gender: {
            type: DataTypes.ENUM('Male','Female'),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
    timestamps: false, // disables createdAt and updatedAt columns
  });
    return Citizens;
}