
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    medidas: { type: String, required: true },
    precio: { type: Number },
    stock: { type: Number },
    categoria: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category', 
        required: true 
    }
}, { timestamps: true });

export default productSchema;