npm install
cd client/
npm install
cd ..
npm run build_client
npm run build_server
mv client/build/ dist/code/
node ./dist/code/App.js
