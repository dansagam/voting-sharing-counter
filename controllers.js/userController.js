import funcOps from "../db/db.js";
import { data } from '../db/db.js'
import { v4 as uuid } from 'uuid'

let newdata = data

export const getSignUp = async (req, res, next) => {
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
      // newdata._id = uuid()
      // newdata.count = 0
      // newdata.email = email
      // newdata.firstName = firstName
      // newdata.lastName = lastName
      // newdata.mobileNumber = mobileNumber
      // console.log(newdata)
      const response = await funcOps.pushData(newdata)
      if (response) {
         res.status(201).json({
            success: true,
            data: response
         })
      } else {
         res.status(404)
         throw new Error('user not added')
      }
   } catch (err) {
      // res.render()
      console.log(err.message)
      res.send(err.message)
   }
}

export const getUsers = async (req, res, next) => {
   try {
      const response = await funcOps.getData()
      if (response) {
         console.log('dsjduu')
         res.render('pages/signup', { users: response })
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
      res.send(err.message)
   }
}

export const getSharedLink = async (req, res, next) => {
   try {
      console.log(req.params.id)
      const response = await funcOps.getDataById(req.params.id)
      if (response) {
         res.status(201).json({
            success: true,
            count: response.length,
            data: response
         })
      } else {
         res.status(401)
         throw new Error('No shared link found')
      }
   } catch (err) {
      // res.render()
      console.log(err.message)
      res.send(err.message)
   }
}

export const calcSharedCount = async (req, res, next) => {
   try {
      if (req.params.id) {
         const found = await funcOps.getDataById(req.params.id)
         if (found) {
            const response = await funcOps.getSharedData(found)
            if (response) {
               res.status(201).json({
                  success: true,
                  data: response
               })
            } else {
               res.status(401)
               throw new Error('Not count addee')
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
      res.send(err.message)
   }
}