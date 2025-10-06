import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    targetUrl: {
      type: String,
      required: true,
    },
    shortCode: {
      type: String,
      // required: true,
      unique: true,
      index: true,
    },
    avatar:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);

const Url = mongoose.model("Url", urlSchema);
export default Url;
