import mongoose from "mongoose";

const DBConnect = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URI || "mongodb://localhost:27017/asm1"
    );

    console.log(`Kết nối thành công database`);
  } catch (error) {
    console.log(`Không thể kết nối tới ${process.env.DB_URI}`);
  }
};

export default DBConnect;
