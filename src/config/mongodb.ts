// MongoDB connection options
export const mongo = {
  options: {
    dbName:'server',
    autoIndex:true,
    autoCreate:true
    // useMongoClient: true
    // useNewUrlParser:true,
    // useUnifiedTopology: true
  },
  uri: 'mongodb://127.0.0.1:27017'
}