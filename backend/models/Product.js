const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
  
    title: {
      type: String,
      required: true,
      default: '',
    },
    content: {
      type: String,
      required: true,
      default: '',
    },
    cost: {
      type: Number,
      required: true,
      default: 0,
    },
    size: {
      type: Number,
      required: true,
      default: 0,
    },
    color: {
      type: String,
      required: true,
      default: 'Đen',
    },
    description: {
      type: String,
      required: true,
      default: '',
    },
    type: {
      type: String,
      required: true,
      default: '',
    },
    attachment: String,
    review: {
      type: Number,
      default: 0,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
