import mongoose from "mongoose";

export default mongoose
  .connect("mongodb://localhost/Copic", {
    
  })
  .then(() => console.log(`Connected to Copic DB Successfully`))
  .catch((err) => console.log("Can't connect to mongodb", err));
