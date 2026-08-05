// Petit serveur local pour prévisualiser le site correctement.
// Nécessaire car les photos (<image-slot>) sont chargées via une requête
// réseau que les navigateurs bloquent quand on ouvre index.html directement
// (double-clic, adresse en file://) — voir README.md, section "Aperçu en
// local". Ce script sert simplement les fichiers du dossier sur le réseau
// local, ce qui suffit à débloquer le chargement des photos.
//
// Usage : double-cliquer sur "Lancer l'aperçu.bat" (qui appelle ce script
// et ouvre le navigateur automatiquement), ou lancer `node preview-server.js`
// puis ouvrir http://localhost:8080/index.html à la main.

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const root = __dirname;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.heic': 'image/heic',
};

http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(root, reqPath);

  // Ne jamais servir en dehors du dossier du site.
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end('Interdit');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Fichier introuvable : ' + reqPath);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log('Aperçu du site disponible sur : http://localhost:' + PORT + '/index.html');
  console.log('Laissez cette fenêtre ouverte pendant la prévisualisation. Fermez-la (ou Ctrl+C) pour arrêter.');
});
