import * as uuid from 'uuid'
import { fileURLToPath } from 'url'
import path from 'path'
import {Device, DeviceInfo} from '../models/models.js'
import ApiError from "../error/apiError.js"

export default class DeviceController {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            const __filename = fileURLToPath(import.meta.url)
            const __dirname = path.dirname(__filename)
            img.mv(path.resolve(__dirname, "..", 'static', fileName))

            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            if(info) {
                info = JSON.parse(info)
                DeviceInfo.forEach(i => 
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
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let devices
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{brandId, typeId}, limit, offset})
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
        return res.json(device)
    }
}