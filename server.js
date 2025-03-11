import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { dbConn } from './config/dbConnect.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB

dbConn();

// Initialize the express server

const app = express();

// Middleware setup

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('dev'));

// Start the express server

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})