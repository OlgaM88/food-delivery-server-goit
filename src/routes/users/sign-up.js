const path = require("path");
const fs = require("fs");



const signUpRoute = (request, response) => {
 if (request.method === "POST") {
let body = [];
request.on('error', (err) => {
  console.error(err);
}).on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
    let userData = JSON.parse(body);

    const {
      username
    } = userData;
    
  
  
  response.on('error', (err) => {
    console.error(err);
  });
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  fs.writeFile(
    path.join(__dirname, "../../db/users/", `${username}.json`),
    body,
  );
  let newUser = ({
    user : userData,
    status: "success"
  });
  response.end(JSON.stringify(newUser));

});
  
};
};
module.exports = signUpRoute;