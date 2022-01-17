import funcOps from "../db/db.js";
import { data } from '../db/db.js'
import { v4 as uuid } from 'uuid'

// let newdata = data

export const getSignUp = async (req, res, next) => {
   console.log(res.locals.error)
   res.render('pages/signup')
}
export const signUp = async (req, res, next) => {
   try {
      const { firstName, lastName, email, mobileNumber } = req.body
      // let newdata = data
      let newdata = {
         _id: uuid(),
         count: 0,
         email: email,
         firstName: firstName,
         lastName: lastName,
         mobileNumber: mobileNumber,

      }
      const response = await funcOps.pushData(newdata)
      if (response) {
         // res.status(201).json({
         //    success: true,
         //    data: response
         // })
         res.render('pages/shareIndex', { user: response, _id: response._id })
      } else {
         res.status(404)
         throw new Error('user not added')
      }
   } catch (err) {
      // res.render()
      console.log(err.message)
      res.render('pages/index', { error: err.message })
   }
}

export const getUsers = async (req, res, next) => {
   try {
      const response = await funcOps.getData()
      if (response) {
         res.render('pages/winner', { users: response })
         // res.status(201).json({
         //    success: true,
         //    count: response.length,
         //    data: response
         // })
      } else {
         res.status(401)
         throw new Error('No11 user registered yet')
      }
   } catch (err) {
      // res.render()
      console.log(err.message)
      res.render('pages/index', { error: err.message })
   }
}

export const getSharedLink = async (req, res, next) => {
   try {
      // console.log(req.params.id)
      const response = await funcOps.getDataById(req.params.id)
      if (response) {
         res.render('pages/sharedSignUp', { user: response, _id: response._id })
      } else {
         res.status(401)
         throw new Error('No shared link found')
      }
   } catch (err) {
      // res.render()
      console.log(err.message)
      res.render('pages/index', { error: err.message })
   }
}
export const registerShared = async (req, res, next) => {
   try {
      const { firstName, lastName, email, mobileNumber } = req.body
      // let newdata = data
      let newdata = {
         _id: uuid(),
         count: 0,
         email: email,
         firstName: firstName,
         lastName: lastName,
         mobileNumber: mobileNumber,

      }
      if (req.params.id) {
         const found = await funcOps.getDataById(req.params.id)
         console.log('found data', found)
         if (found) {
            const newUser = await funcOps.pushData(newdata)
            console.log('new data', newUser)
            if (newUser) {
               const response = await funcOps.getSharedData(found)
               console.log('response', response)
               if (response) {
                  // res.status(201).json({
                  //    success: true,
                  //    data: response
                  // })
                  res.redirect('/')
               } else {
                  res.status(401)
                  throw new Error('Not count added')
               }
            }
         } else {
            res.status(401)
            throw new Error('no user id found not true')
         }
      } else {
         res.status(401)
         throw new Error('param not true')
      }
      res.render('pages/shareIndex', { user: response, _id: response._id })

   } catch (err) {
      // res.render()
      console.log(err.message)
      res.render('pages/index', { error: err.message })

   }
}

export const getWinner = async (req, res, next) => {
   try {
      const response = await funcOps.getWinner()
      if (response) {
         res.render('pages/winner', { winner: response })
      } else {
         res.status(404)
         res.redirect('/')
         return
      }
   } catch (err) {
      // res.render()
      console.log(err.message)
      res.render('pages/index', { error: err.message })
   }
}
export const calcSharedCount = async (req, res, next) => {
   try {
      if (req.params.id) {
         const found = await funcOps.getDataById(req.params.id)
         if (found) {
            const response = await funcOps.getSharedData(found)
            if (response) {
               // res.status(201).json({
               //    success: true,
               //    data: response
               // })
               res.render('pages/index', { userShared: response })
            } else {
               res.status(401)
               throw new Error('Not count added')
            }
         } else {
            res.status(401)
            throw new Error('no user id found not true')
         }
      } else {
         res.status(401)
         throw new Error('param not true')
      }
   } catch (err) {
      // res.render()
      // console.log(err.message)
      res.render('pages/index', { error: err.message })
   }
}