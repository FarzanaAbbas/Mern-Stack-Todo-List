1.SERVER[backe-end]
 . open terminal
 . cd server
 . npm init -y
 . npm install express mongoose -D nodemon
 . remove test from scripts(package.json) and type "dev:nodemon index.js"
 . create new file index.js //Entry point for express.
 . create folder database->Connection.js //Connecting mongoose nd express.
 . create folder models->user.js //To Create table.
 . create folder Controllers->userCtrl.js //Controlling the data's
 . create folder routes->userRoute //Routing
 . To run: npm run dev

 2. Client [Front-end]
  . open terminal
  . cd client
  . npm i create vite@latest
  . dot,select react and javascript.
  . npm install
  . npm run dev
  . npm i react-router-dom
  . Inside src folder->Components folder //to reuse the code
