import joyasModel from "../models/joyas.js";


class joyasController {
    constructor() {
    }

   async create (req, res) {
      try {
        const data = await joyasModel.create(req.body);
        res.status(201).json(data);
      } catch (e) {
        res.status(500).send(e);
      } 
    }


   async update (req, res) {
       try {
        const { id } = req.params;
        const data = await joyasModel.update(id, req.body);
        res.status(200).json(data);
      } catch (e) {
        console.log(e);
        res.status(500).send(e);
      } 
    }

   async delete (req, res) {
      try {
        const { id } = req.params;
        const data = await joyasModel.deletete(id, req.body);
        res.status(206).json(data);
      } catch (e) {
        res.status(500).send(e);
      } 
    }

    async getAll (req, res) {
      try {
         const data = await joyasModel.getAll();
        res.status(201).json(data);
      } catch (e) {
        res.status(500).send(e);
      } 
    }


    async getOne (req, res) {
     try {
        const { id } = req.params;
        const data = await joyasModel.getOne(id);
        res.status(201).json(data);
      } catch (e) {
        res.status(500).send(e);
      } 
    }





}

export default new joyasController();