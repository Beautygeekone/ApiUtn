import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({});
const Category = mongoose.model('Category', categorySchema);

export default Category;
