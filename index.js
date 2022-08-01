const http = require('http');
const fs = require('fs');
const path = require('path');



const hostname = 'localhost';
const port = 80;



const Recipes = fs.readFileSync('index.html'); 
const Enchantments = fs.readFileSync('./Enchantments.html');
const Builts = fs.readFileSync('./Builts.html');
const Farms = fs.readFileSync('./Farms.html');
const potions = fs.readFileSync('./Potion.html');
const Taming = fs.readFileSync('./Taminganimals.html');
const Mobs = fs.readFileSync('./Mob.html')
const contactus = fs.readFileSync('./contactus.html')

const server = http.createServer((req, res) => {
console.log(req.url)
url = req.url;


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
 


if (url== '/')
  {
    res.end(Recipes);
  }

else if (url == '/Enchantments')
{
  res.end(Enchantments);
}

else if (url == '/Builts')
{
  res.end(Builts);
}

else if (url == '/Farms')
{
  res.end(Farms);
}
else if (url == '/Potion')
{
  res.end(potions);
}

else if (url == '/Taminganimals')
{
  res.end(Taming);
}
else if (url == '/Mob')
{
  res.end(Mobs);
}

else if (url == '/contactus')
{
  res.end(contactus);
}

else if(req.url.match("\.css$")){
  const cssPath = path.join(__dirname, req.url);
  const filestream = fs.createReadStream(csspath, "utf-8");
  res.writeHead(200, {"content-type" : "text/css"});
  filestream.pipe(res);
}

else if(req.url.match("\.png$")){
  const imggpath = path.join(__dirname, req.url);
  const filestream = fs.createReadStream(imggpath);
  res.writeHead(200, {"content-type" : "imgg/png"});
  filestream.pipe(res);
}

else if(req.url.match("\.gif$")){
  const imggpath = path.join(__dirname, req.url);
  const filestream = fs.createReadStream(imggpath);
  res.writeHead(200, {"content-type" : "imgg/gif"});
  filestream.pipe(res);
}

else if(req.url.match("\.jpg$")){
  const imggpath = path.join(__dirname, req.url);
  const filestream = fs.createReadStream(imggpath);
  res.writeHead(200, {"content-type" : "imgg/jpg"});
  filestream.pipe(res);
}

else{
  res.statusCode = 404;
  res.end("<h1>404 not found</h1>")
}

})



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})

