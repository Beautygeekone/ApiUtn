import Product from '../models/Product.js'; 

const joyasModel = {
    async create(joya) {
        return await Product.create(joya);
    },

    async update(id, joya) {
        return await Product.findOneAndUpdate({ _id: id }, joya, { new: true });
    },

    async getAll() {
        return await Product.find({});
    },

    async delete(id) {
        return await Product.findOneAndDelete({ _id: id });
    },

    async getOne(id) {
        return await Product.findById(id);
    },
};

export default joyasModel;