const { json } = require('express');
const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: '',
    password: '',
    database: 'likeme',
    allowExitOnIdle: true
});

const getData = async () => {
    const result = await pool.query("Select * from posts");
    console.log("Query realizada");    
    return (result.rows);
}

const insertData = async (titulo, url, descripcion) => {
    const insert = "INSERT INTO posts values (DEFAULT, $1, $2, $3, 0)";
    const values = [titulo, url, descripcion];
    const result = await pool.query(insert, values);
    console.log("post agregado");
}

const insertLike = async (id) => {
    const update = "UPDATE posts SET likes = (likes + 1) where id = $1";
    const values = [id];
    const result = await pool.query(update, values);
    console.log("like agregado");
}

const deletePost = async (id) => {
    const update = "DELETE FROM posts where id = $1";
    const values = [id];
    const result = await pool.query(update, values);
    console.log("post eliminado");
}

module.exports = { insertData, getData, insertLike, deletePost };
