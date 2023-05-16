var sequelize = require("../config/connection");
var { DataTypes } = require('sequelize');
var employee = sequelize.define('employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    emailId: { type: DataTypes.STRING, allowNull: true },
    age: { type: DataTypes.INTEGER },
    hireDate: { type: DataTypes.DATE },
    salary: { type: DataTypes.DECIMAL },
    createdAt: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
    },
    updatedAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("0 ON UPDATE CURRENT_TIMESTAMP"),
        allowNull: false,
        //  onUpdate: sequelize.literal("CURRENT_TIMESTAMP")

    }
}, { timestamps: false })

employee.sync().then(() => {
    console.log("Sync is done");
}).catch((err) => {
    console.log(err);
    console.log("error in synching try again....");
})
module.exports = employee;