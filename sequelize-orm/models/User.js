var sequelize = require("../config/connection");
var { DataTypes } = require('sequelize');
var User = sequelize.define('user',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: 'This is the id of the column which is autoincremented and primarykey'
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: 'FIRST NAME'
        },
        lastname: {
            type: DataTypes.STRING,
            comment: 'LAST NAME'
        },
        age: {
            type: DataTypes.INTEGER,
            comment: 'AGE'

        },
        gender: {
            type: DataTypes.STRING,
            comment: 'GENDER'

        }


    },
    {
        timestamps: false
    });



module.exports = User;