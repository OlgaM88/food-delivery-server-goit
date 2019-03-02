const dbUser = "Olga";
const dbPassword = "pswDB19%mongo";

const config = {
    port: 3001,
    dbUser,
    dbPassword,
    databaseUrl: `mongodb+srv://${ dbUser }:${ dbPassword }@cluster0-x8mmv.mongodb.net/test?retryWrites=true`
  };

  module.exports = config;