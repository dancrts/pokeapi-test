import { InferSchemaType, Schema, model } from "mongoose";

const TrainerSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    medals: { type: [String], required: true }
}, { timestamps: true })

type Trainer = InferSchemaType<typeof TrainerSchema>

export default model<Trainer>("Trainer", TrainerSchema)