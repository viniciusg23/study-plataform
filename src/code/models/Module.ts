import {model, Schema} from "mongoose";

const moduleSchema = new Schema(
  {
    title: {type: String, required: true},
    subtitle: {type: String},
    lessons: {type: Array},
    description: {type: String},
    subject: {type: Array},
    logo: {type: String}
  },
  {
    timestamps: true
  }
)

export const ModuleModel = model("Module", moduleSchema);