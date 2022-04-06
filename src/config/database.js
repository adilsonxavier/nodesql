module.exports = {
    dialect: 'mssql',
    host: 'localhost',
    username: 'sa',
    password: 'sqlserver',
    database: 'sqlnode',
    define: {
        timestamps: true,  // Cria autom campos created_at e updated_at
      //  underscored: true,
    },
};

