/*const express = require("express");
const { homedir } = require("os");
const { resolve } = require("path");
const path = require("path");
const app = express();
const PORT = 3000; // variable de entorno 

app.use(express.static("public"))

app.get("/",(req,res)=>{
   return res.sendFile(path.join(__dirname,"/views/home.html"));// en path utilizamos ek metodo nativo path. No hace falta poner el return 
 
})

app.listen(PORT, () => console.log(`Server listen in port ${PORT} http://localhost:${PORT}`))// esto me abre directament en el navegador sin poner en la url el puerto 3000

*/

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
   return res.sendFile(path.join(__dirname, "/views/home.html"));
})

app.listen(PORT, () => console.log(`
Server listen in port ${PORT}
http://localhost:${PORT}
`))