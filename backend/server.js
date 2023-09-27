import config from './../config/config'
import mongoose from 'mongoose';
import app from './express'

const port = config.port || 3000;

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
