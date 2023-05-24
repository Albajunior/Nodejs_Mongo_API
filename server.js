// require("dotenv").config();
// const app = require("./app.js");
// const port = process.env.PORT;
// var cors = require("cors");

// app.get("/", (req, res) => {
//   res.send("Hello Worldrrr!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

//Import du module http de Node.js qui permet de créer des serveurs web HTTP 
const http = require('node:http'); 
 
//On définit l'adresse ip sur laquelle le serveur va s'éxécuter 
const hostname = '127.0.0.1' 
//On définit le port sur lequel le serveur va écouter. 
const port = 3000; 
 
//On crée un serveur HTTP avec la méthode createServer() du module http. 
const server = http.createServer((req, res) => { 
  //On définit la réponse à renvoyer au client. 
  res.statusCode = 200; //Choix du code HTTP 
  res.setHeader('Content-Type', 'text/plain'); //Choix du type de contenu 
  res.end('Hello, World!\n'); //Envoi du contenu de la réponse au client 
}); 
 
//On demande au serveur d'écouter les connexions entrantes sur le port et l'adresse ip spécifiée.  
server.listen(port, hostname, () => { 
  //On affiche un message en console avec le lien d'accès au serveur 
  console.log(`Server running at http://${hostname}:${port}/`); 
}); 