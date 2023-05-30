require("dotenv").config();

const app = require("./app");
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, process.env.DEV ? { dbName: 'test' } : {dbName: 'cramodoro'})
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`API connected to MongoDB & listening on port ${process.env.PORT}...`);
    })
  })
  .catch((error) => {
    console.log(error.message)
  })



