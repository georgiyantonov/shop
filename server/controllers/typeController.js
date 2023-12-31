import {Type} from "../models/models.js"

export default class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll({ order: [['name', 'ASC']]})
        return res.json(types)
    }

}