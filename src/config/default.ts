const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD
const jwtSecret = process.env.JWT_SECRET

export default {
    port: 5000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@maincluster.hqzp4yx.mongodb.net/craftingCodeDb?retryWrites=true&w=majority`,
    jwtSecret: jwtSecret,
    env: "development"
};