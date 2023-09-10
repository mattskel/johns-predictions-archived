import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

import Template from './../template'
import userRoutes from './routes/user.routes'
import questionRoutes from './routes/questions'
import prospectiveRoutes from './routes/prospectives'
import predictionRoutes from './routes/predictions'
import authRoutes from './routes/auth.routes'

// import userRoutes from './routes/user.routes'
// import authRoutes from './routes/auth.routes'

// comment out before building for production
import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

// comment out before building for production
devBundle.compile(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
// app.use(cors())
app.use(cors());
// app.use(express.json());
// app.use(express.static('static'));

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// routes
app.use('/', authRoutes)
app.use('/api/users', userRoutes);
app.use('/api/user', userRoutes)
app.use('/api/questions', questionRoutes);
app.use('/api/prospectives', prospectiveRoutes);
app.use('/api/predictions', predictionRoutes);

app.get('*', (req, res) => {
  res.status(200).send(Template())
})

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  } else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
  }
})

export default app