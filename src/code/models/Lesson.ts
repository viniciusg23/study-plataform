import { model, Schema } from "mongoose";

const lessonSchema = new Schema(
  {
    title: { type: String , required: true},
    url: { type: String, required: true},
    description: { type: String },
    comments: { type: Array },
  },
  {
    timestamps: true
  }
)

export const LessonModel = model("Lesson", lessonSchema);