const express = require('express');
const { getData, insertData, insertLike, deletePost} = require('./query');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors())
app.listen(3001, function () {
    console.log('CORS-enabled web server listening on port 3001')
  });

// consulta para ver los posts 
app.get('/posts', async (req, res) => {
    try {
        const posts = await getData();
        res.json(posts);
    } catch (error) {
        console.error("Error al obtener los posts:", error);
        res.status(500).send("Error al obtener los posts");
    }
});
// agregar nuevos posts
app.post('/posts', (req, res) => {
    try {
        console.log(req.body)
        const { titulo, url, descripcion } = req.body;
        if (titulo !== '' && url !== '' && descripcion !== ''){
            insertData(titulo, url, descripcion);
            res.send("producto agregado con éxito");
        }else{
            console.log("faltan datos");
            alert("faltan datos");
        }
        
    } catch (error) {
        console.error("Error al agregar el producto:", error);
        res.status(500).send("Error al agregar el producto");
    }
});
// agregar likes
app.put('/posts/like/:id', (req, res) => {
    const {id} = req.params;
    insertLike(id)
    res.send("like agregado")
})

// eliminar un post
app.delete('/posts/:id', (req, res) => {
    const {id} = req.params;
    deletePost(id)
    res.send("post eliminado")
})
