const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["UPI", "Card", "Net Banking"] },
    status: { type: String, enum: ["pending", "success", "failed"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Payment', paymentSchema);
