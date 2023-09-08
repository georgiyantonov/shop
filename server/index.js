import  express  from 'express'
import {sequelize} from './db.js'
import {models} from './models/models.js'
import cors from 'cors'
import {serverRouter} from './routes/index.js'
import middleware from './middleware/ErrorHandlingMiddleware.js'
import fileUpload from 'express-fileupload'
import path from 'path'
import { fileURLToPath } from 'url'

const PORT = process.env.PORT || 5000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', serverRouter)

app.use(middleware)

app.get('/', (req, res) => {
    res.status(200).json({message: 'working!!'})
})

const start = async() => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start()