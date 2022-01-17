let users = []
export const data = {
   _id: '',
   firstName: '',
   lastName: '',
   email: '',
   mobileNumber: '',
   count: 0
}

const pushData = (propData) => {
   // console.log(propData, 'dsjsdjdh')
   return new Promise((resolve, reject) => {
      users.push(propData)
      let found = users.find(el => el === propData)
      resolve(found)
   })
}
const getData = () => {
   // console.log(users)
   return new Promise((resolve, reject) => {
      if (users && users.length > 0) {
         resolve(users)
      } else {
         reject(new Error('No user registered yet'))
      }
   })
}
const getWinner = () => {
   return new Promise((resolve, reject) => {
      let countArray = users.reduce((prev, curr) => (prev.count > curr.count) ? prev : curr, 0)
      // let countArray = users[0]
      console.log('john', countArray)
      if (countArray) {
         resolve(countArray)
      } else reject(new Error('No winner yet'))
   })
}

const getDataById = (id) => {
   return new Promise((resolve, reject) => {
      const foundData = users.find((el) => el._id === id)
      // console.log(foundData)
      if (foundData) {
         resolve(foundData)
      } else {
         reject(new Error('No user with the id'))
      }
   })
}

const getSharedData = (found) => {
   return new Promise((resolve, reject) => {
      const userIndex = users.indexOf(found)
      console.log(userIndex)
      if (userIndex !== -1) {
         users[userIndex].count += 1
         resolve(users[userIndex])
      } else {
         reject(new Error('User Id not found'))
      }
   })
}

export { users }

const funcOps = {
   pushData,
   getDataById,
   getSharedData,
   getData,
   getWinner
}

export default funcOps