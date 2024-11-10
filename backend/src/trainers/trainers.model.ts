import { InferSchemaType, Schema, model } from "mongoose";
import { TrainerDTO } from "./dtos/trainer.dto";

const TrainerSchema = new Schema<TrainerDTO>({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: Number, required: true },
    medals: { type: [String], required: true }
}, { timestamps: true })

type Trainer = InferSchemaType<typeof TrainerSchema>

export default model<Trainer>("Trainer", TrainerSchema)