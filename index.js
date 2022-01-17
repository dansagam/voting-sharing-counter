import express from 'express'
import path from 'path'
import userRoutes from './routes/usersRoutes.js'
const PORT = process.env.PORT || 5000
const app = express()

const __dirname = path.resolve()
app.use(express.json())
app.use('/api/v2/users', userRoutes)
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.listen(PORT, () => console.log(`Listening on ${PORT}`))

// express()
//   .use(express.json())
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`))
