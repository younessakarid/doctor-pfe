import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("database connected"))
    await mongoose.connect(`${process.env.MONGODB_URL}/dental7paris`)
}

export default connectDB



// import mongoose from "mongoose";

// const connectDB = async () => {
//   mongoose.connection.on('connected', () => console.log("database connected"));
//   // Now concatenates without double slash:
//   await mongoose.connect(`${process.env.MONGODB_URL}/dental7paris`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

// export default connectDB;
