import { Schema } from "mongoose";



export const HouseSchema = new Schema({
  bedrooms: { type: Number, min: 0, max: 50, required: true, default: 1 },
  bathrooms: { type: Number, min: 0, max: 50, required: true, default: 1.5 },
  levels: { type: Number, min: 1, max: 50, required: true, default: 1 },
  imgUrl: { type: String, minlength: 3, maxlength: 1000, required: true },
  year: { type: Number, min: 1500, max: 2025, required: true, default: 2000 },
  price: { type: Number, min: 1, max: 1000000000, required: true, default: 100000 },
  description: { type: String, minlength: 3, maxlength: 1000, required: true, default: 'This is a house fo sho' },
  CreatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
},
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);