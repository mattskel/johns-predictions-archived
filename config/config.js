require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  // mongoUri: process.env.MONGODB_URI ||
  //   process.env.MONGO_HOST ||
  //   'mongodb://' + (process.env.IP || '127.0.0.1') + ':' +
  //   (process.env.MONGO_PORT || '27017') +
  //   '/johns-predictions-develop'
  mongoUri: 'mongodb+srv://matt:u96DZKVZbsQFvxDK@wineone.6sajobm.mongodb.net/test?retryWrites=true&w=majority'
}

export default config