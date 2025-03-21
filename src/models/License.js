const mongoose = require('mongoose');

const licenseSchema = mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    licenseType: { type: String, enum: ["two-wheeler", "four-wheeler"] },
    status: { type: String, enum: ["pending", "approved", "rejected"] },
    issuedDate: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model('License', licenseSchema);
