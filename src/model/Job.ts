import mongoose, { Schema, models } from "mongoose";

const JobSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },

  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Job = models.Job || mongoose.model("Job", JobSchema);
export default Job;
