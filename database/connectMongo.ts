import mongoose from "mongoose";
const connectMongo = async () =>
  mongoose.connect(process.env.DB || "mongodb://localhost:27017/my-portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
export default connectMongo;
