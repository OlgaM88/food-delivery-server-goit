const dbUser = "Olga";
const dbPassword = "pswDB19mongo20%40";
console.log(dbPassword)

const config = {
    port: 3001,
    secret: 'secret-key',
    dbUser,
    dbPassword,
    databaseUrl:/* `mongodb+srv://${ dbUser }: ${ dbPassword }@cluster0-x8mmv.mongodb.net/test?retryWrites=true`*/
    `mongodb://Olga:${ dbPassword }@cluster0-shard-00-00-x8mmv.mongodb.net:27017,cluster0-shard-00-01-x8mmv.mongodb.net:27017,cluster0-shard-00-02-x8mmv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`
  };

  module.exports = config;