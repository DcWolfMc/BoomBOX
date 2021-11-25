const users = require('./usuarios'); 
const playlists = require('./playlists');
const musicas = require('./musicas');
const express = require('express');

const app = express();

app.use(express.json());


/*
app.get('/', (req,res) => {
    return res.send('Hello World!')
});
*/

app.get('/playlists', (req,res) => {
    return res.json(playlists);
});

app.get('/playlists/:id', (req,res) => {
    const playlistId = req.params.id
    const playlist = playlists.find((p)=> p.id ==parseInt(playlistId) )
    return res.json(playlist);
});

app.get('/user', (req,res) => {
    return res.json(users);
});
// atualizando o usuario por perfil, playlists e musicas
app.put('/user/:id', (req,res) => {
    const userId = req.params.id
    const user = users.find((u)=> u.id ==parseInt(userId) )
    let usuario = req.body;
    
    user.nome = usuario.nome
    user.password = usuario.password
    user.email = usuario.email 
    user.sex = usuario.sex 
    user.id = usuario.id 
    user.playlists = usuario.playlists
    return res.json(user);
});

app.get('/user/', (req,res) => {
    const userEmail = req.query.email
    const user = users.filter((u)=> u.email == userEmail);
    return res.json(user[0]);
});

app.get('/user/:id', (req,res) => {
    const userId = req.params.id
    const user = users.find((u)=> u.id ==parseInt(userId) )
    return res.json(user);
});

app.get('/musicas', (req,res) => {
    return res.json(musicas);
});
// busca de musicas
app.get('/musicas', (req,res) => {
    const musicasNome = req.query.nome
    const musicas = musicas.filter((m)=> m.nome.includes(musicasNome))
    return res.json(musicas);
});

// cadastro

app.post('/signup',(req,res) =>{
    const newUser = {
        nome: req.body.nome,
        password : req.body.password,
        email: req.body.email,
        sex: req.body.sex,
        id: req.body.id,
        playlists: []
    };
    users.push(newUser)
    return res.json(newUser);
})

app.listen(3001);