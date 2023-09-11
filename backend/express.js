import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

// Modules for server-side rendering
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import StaticRouter from 'react-router-dom/StaticRouter'
import MainRouter from '../frontend/MainRouter'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import theme from '../frontend/theme'

import Template from './../template'
import userRoutes from './routes/user.routes'
import questionRoutes from './routes/question.routes'
import prospectiveRoutes from './routes/prospective.routes'
// import predictionRoutes from './routes/predictions'
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
// app.use('/', prospectiveRoutes);
app.use('/api/prospectives', prospectiveRoutes);
// app.use('/api/predictions', predictionRoutes);

app.get('*', (req, res) => {
  // 1. Generate CSS styles using Material-UI's ServerStyleSheets
  // 2. Use renderToString to generate markup which renders components specific to the route requested
  // 3. Return template with markup and CSS styles in the response
  const sheets = new ServerStyleSheets();
  const context = {};
  const markup = ReactDOMServer.renderToString(
    sheets.collect(
      <StaticRouter location={req.url} context={context}>
        <ThemeProvider theme={theme}>
          <MainRouter />
        </ThemeProvider>
      </StaticRouter>
    )
  );

  if (context.url) {
    return res.redirect(303, context.url);
  }

  const css = sheets.toString();
  res.status(200).send(Template({
    markup: markup,
    css: css
  }))
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