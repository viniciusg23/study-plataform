import { model, Schema } from "mongoose";

const classSchema = new Schema(
  {
    title: { type: String , required: true},
    url: { type: String, required: true},
    description: { type: Text },
    comments: { type: Array },
  },
  {
    timestamps: true
  }
)

export const ClassModel = model("Class", classSchema);