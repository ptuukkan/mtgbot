#!/bin/sh
SRC="mtgbot/"
DST="heroku/tuke-mtgbot/"

cd ~/projects
cp ${SRC}index.js ${DST}
cp ${SRC}app.js ${DST}
cp ${SRC}mtg.js ${DST}
cp -R ${SRC}controllers ${DST}
cp -R ${SRC}helper ${DST}
cp ${SRC}package.json ${DST}
cp ${SRC}package-lock.json ${DST}

cd $DST
git add .
git commit -m "heroku deploy"
git push heroku master

