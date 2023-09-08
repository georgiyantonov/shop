import {Brand} from "../models/models.js"

export default class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async getBrand(req, res) {
        const {name} = req.body
        const brand = await Brand.find({name})
        return res.json(brand)
    }
}