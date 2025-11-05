import Joyas from '../schemas/Product.js';

const joyasModel = {
  async create(joya) {
    return await Joyas.create(joya);
  },

  async update(id, joya) {
    return await Joyas.findOneAndUpdate(id, joya, { new: true });
  },

  async getAll() {
   return await Joyas.find();
  },

  async delete(id) {
    return await Joyas.findOneAndDelete(id);
  },

  async getOne(id) {
    return await Joyas.findById(id);
  },
};

export default joyasModel;
