const fs = require('fs');
const path = require('path');
const util = require('util');

const usersFolder = path.resolve(__dirname, '../../../', 'db/users');
console.log(usersFolder);


const writeFile = util.promisify(fs.writeFile);

const saveNewUser = (fileName, data) => {
  const src = path.resolve(usersFolder, fileName + '.json');
  const dataStr = JSON.stringify(data);

  return writeFile(src, dataStr);
};

const createUser = (request, response) => {
  const user = request.body;
  console.log(user);
  const userData =  { ...user, id: Math.random().toString(36).slice(-5)};
  console.log(userData);
  fileName =  path.join(__dirname, "../../db/users/all-users.json");
  
  fs.readFile(
    fileName,
     function (err, data) {
    var json = JSON.parse(data)
    json.push(userData);

  fs.writeFile(fileName,
     JSON.stringify(json))
})
 
let newUser = ({
    status: "success",
    user : userData,
    
  });
  response.end(JSON.stringify(newUser));

};

module.exports = createUser;