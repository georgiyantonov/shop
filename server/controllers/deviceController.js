import * as uuid from 'uuid'
import { fileURLToPath } from 'url'
import path from 'path'
import {Device, DeviceInfo} from '../models/models.js'
import ApiError from "../error/apiError.js"

export default class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info, rating} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            const __filename = fileURLToPath(import.meta.url)
            const __dirname = path.dirname(__filename)
            await img.mv(path.resolve(__dirname, "..", 'static', fileName))

            const device = await Device.create({name, price, brandId, typeId, img: fileName, rating})
            if(info) {
                const inf = JSON.parse(info)
                inf.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }

            return res.json(device)
        } catch(e) {
            next(ApiError.internal(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page, sort} = req.query
        page = page || 1
        limit = limit || 12
        let offset = page * limit - limit
        let devices
        let sortOrder
        let sortType
        switch (sort){
            case 'name':
                sortOrder = 'name'
                sortType = 'ASC'
                break
            case 'priceasc':
                sortOrder = 'price'
                sortType = 'ASC'
                break
            case 'pricedesc':
                sortOrder = 'price'
                sortType = 'DESC'
                break
            case 'ratingasc':
                sortOrder = 'rating'
                sortType = 'ASC'
                break
            case 'ratingdesc' :
                sortOrder = 'rating'
                sortType = 'DESC'
                break
            default:
                sortOrder = 'rating'
                sortType = 'DESC'
                break
        }
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset, order: [[sortOrder, sortType]]})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset, order: [[sortOrder, sortType]]})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset, order: [[sortOrder, sortType]]})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{brandId, typeId}, limit, offset, order: [[sortOrder, sortType]]})
        }
        return res.json(devices)
    }

    async getDevice(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            }
        )
        if(device === null) {
            res.statusCode = 404
        }
        return res.json(device)
    }
}