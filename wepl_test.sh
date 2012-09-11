#!/bin/sh
set -x

export METHOD_BODY="app.get('%2Ffoo'%2C%20function(req1%2Cres1)%20%7Bvar%20val%20%3D%20req1.query.i%20*%202%3B%20console.log('console%20says%3A%20'%20%2B%20val)%3B%20res1.send('response%20says%20'%20%2B%20val%20)%7D)%3B"
export PORT="5000"

kill `pgrep node`
node wepl.js &
sleep .3
curl "http://0.0.0.0:$PORT/?methodBody=$METHOD_BODY"
sleep .3
curl 'http://0.0.0.0:$PORT/foo?i=2'
kill `pgrep node`
