import connectDb from './db'

export default async () => {
  require('./path-alias')
  require('./misc')
  await connectDb()
  require('./route')
  require('./model')
}
