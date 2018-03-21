import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import methodOverride from 'method-override'
import compress from 'compression'
import helmet from 'helmet'
import { EventEmitter } from 'events'
import multiCores from './multi-cores'
import init from './init'

const mediator = new EventEmitter()
const app = express()

// 3rd party middleware
app.use(morgan('dev'))
app.use(cors())
app.use(compress())
app.use(methodOverride())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())

// set multi cores
multiCores(app, mediator)

mediator.once('boot.ready', () => {
  console.log('SERVER BOOT READY')
  init()
})

// catch 404 and forward to error handler
app.use((req, res) => {
  console.log('404', req.url)
  return res.status(404).send('404')
})

// error handler
app.use((error, req, res) => {
  console.log('500', error)
  return res.status(500).send('500')
})

const { PORT = 5020 } = process.env
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

export default app
