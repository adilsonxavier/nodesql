const sequelize = require("sequelize");

const database = new sequelize("VitrineProdutos", "sa", "sqlserver",
    {
        dialect: "mssql",
        host: "localhost\\SQLEXPRESS",
        //port:xxxx
    }
);

database.sync(); // caso a tabela não exista ela será criada

module.exports = database;