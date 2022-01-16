import express from 'express'
import path from 'path'
const PORT = process.env.PORT || 5000
const app = express()

const __dirname = path.resolve()
express()
  .use(express.json())
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
