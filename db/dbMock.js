const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

const connectDB = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  try{
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Conectado");
  } catch (error) {
    console.log('Conexion Fallida', error.message)
  }

}

async function disconnectDB() {
  await mongoose.disconnect();
  await mongoServer.stop();
}

module.exports = { connectDB, disconnectDB };