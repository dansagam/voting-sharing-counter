const users = []
export const data = {
   _id: '',
   firstName: '',
   lastName: '',
   email: '',
   mobileNumber: '',
   count: 0
}

const pushData = (propData) => {
   return new Promise((resolve, reject) => {
      resolve(users.push(propData))
   })
}

const getDataById = (id) => {
   return new Promise((resolve, reject) => {
      const foundData = users.map((el) => el._id === id)
      if (foundData && foundData.length > 0) {
         resolve(foundData[0])
      } else {
         reject(new Error('No user with the id'))
      }
   })
}

const getSharedData = (id) => {
   return new Promise((resolve, reject) => {
      const userIndex = users.indexOf(getDataById(id))
      if (userIndex !== -1) {
         users[userIndex].count += 1
         resolve(users)
      } else {
         reject(new Error('User Id not found'))
      }
   })
}

export { users }

const funcOps = {
   pushData: pushData,
   getDataById: getDataById,
   getSharedData: getSharedData
}

export default funcOps