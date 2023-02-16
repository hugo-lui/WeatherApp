const POOL = require("pg").Pool;

const pool = new POOL({
    user: "postgres",
    password: "",
    host: "localhost",
    port: 5432,
    database: "colours"
})

modules.exports = pool;