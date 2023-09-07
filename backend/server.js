// require('dotenv').config();
import 'dotenv/config'

/**
 * Try using import instead
const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const questionRoutes = require('./routes/questions');
const prospectiveRoutes = require('./routes/prospectives');
const predictionRoutes = require('./routes/predictions')
 */
import path from 'path';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes';
import questionRoutes from './routes/questions';
import prospectiveRoutes from './routes/prospectives';
import predictionRoutes from './routes/predictions'

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.static('static'));

// routes
app.use('/api/users', userRoutes);
app.use('/api/user', userRoutes)
app.use('/api/questions', questionRoutes);
app.use('/api/prospectives', prospectiveRoutes);
app.use('/api/predictions', predictionRoutes);

// connect to the db
const url = process.env.MONGO_URL;
mongoose.connect(url);
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

app.get('*', (req, res) => {
	if (process.env.MODE === 'develop') return;

	res.sendFile(path.join(__dirname, 'static/index.html'));
})

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
