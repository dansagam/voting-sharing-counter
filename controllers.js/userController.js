import users from "../db/db.js";
import { data } from '../db/db.js'
import uuid from 'uuid'

let newdata = data

export const getSignUp = async (req, res, next) => {
   res.render('pages/signup')
}
export const signUp = async (req, res, next) => {
   try {
      const { firstName, lastName, email, mobileNumber } = req.body
      newdata._id = uuid()
      newdata.count = 0
      newdata.email = email
      newdata.firstName = firstName
      newdata.lastName = lastName
      console.log(newdata)
   } catch (err) {
      res.render()
   }
}