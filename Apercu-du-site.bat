@echo off
cd /d "%~dp0"
echo Demarrage de l'apercu local...
start "Apercu Le Meandre - laisser cette fenetre ouverte" cmd /k node "preview-server.js"
timeout /t 2 /nobreak >nul
start "" "http://localhost:8080/index.html"
