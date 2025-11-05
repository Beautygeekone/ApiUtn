import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: true, 
        unique: true 
    }
});


const Category = mongoose.model('Category', categorySchema, 'categorias'); 

export default Category;