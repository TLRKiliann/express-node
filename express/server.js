/*
To undestand how a server work with express 
and router Look at Kyle video

npm init -y
npm install express
npm install --save-dev nodemon
npm install ejs (it's for html)
*/

//console.log("ok")
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log("Text (appears in console)")
	//res.download("server.js")
	//res.json({message: "Code: 200 OK"})
	res.status(500).json({message: "Error 500"})
	//res.status(500).send("Hi")
	//res.sendStatus(200)
	//res.send("Hi display on page")
})

app.get('/users', (req, res) => {
	res.send("Page of Users")
})

app.get('/root', (req, res) => {
	res.send("Root Page")
})

app.listen(3000)

