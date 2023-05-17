import {model, Schema} from "mongoose";

const moduleSchema = new Schema(
  {
    title: {type: String, required: true},
    subtitle: {type: String},
    classes: {type: Array},
    description: {type: Text},
    subject: {type: Array},
    logo: {type: String}
  },
  {
    timestamps: true
  }
)

export const ModuleModel = model("Module", moduleSchema);