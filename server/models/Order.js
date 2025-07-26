import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    userId: { type: String, required: true, ref: "user" },
    items: [
      {
        product: { type: String, required: true, ref: "product" },
        quantity: { type: Number, required: true },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: String, required: true, ref: "address" },
    status: { type: String, default: "Order Placed" },
    paymentType: { type: String, required: true },
    isPaid: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model.order || mongoose.model("orders", orderSchema);

export default Order;
