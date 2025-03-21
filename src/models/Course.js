const mongoose = require('mongoose');

const courseSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    courseType: { type: String, enum: ["two-wheeler", "four-wheeler"] },
    duration: { type: Number, required: true }, // In days or hours
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);
