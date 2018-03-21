export default {
  // Db
  db: 'mongodb://localhost/zodyapp-dev',
  dbOptions: {
    useMongoClient: true,
    native_parser: true,
    autoReconnect: true,
    keepAlive: 1,
    connectTimeoutMS: 300000,
    socketTimeoutMS: 300000
  },

  // Secret for token
  secret: 'TM7?K^P!AJmod&4C.qx@gE',

  // Mailer
  mailer: {
    from: 'Zody Dev <dev@zody.vn>',
    report: 'Zody Dev',
    transportMethod: 'SMTP',
    service: 'Gmail',
    auth: {
      user: '',
      pass: ''
    }
  }
}
