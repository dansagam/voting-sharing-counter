import express from 'express'
import path from 'path'
import flash from 'connect-flash'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js'
import userRoutes from './routes/usersRoutes.js'
errorHandler
const PORT = process.env.PORT || 5000
const app = express()

app.use(flash());// flash package
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const __dirname = path.resolve()

const logger = function (req, res, next) {
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
};

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// app.use(logger);
app.get('/', (req, res) => res.render('pages/index'))
app.use('/api/v2/users', userRoutes)



app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => console.log(`Listening on ${PORT}`))

// express()
//   .use(express.json())
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`))
