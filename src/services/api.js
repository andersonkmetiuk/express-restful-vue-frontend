// import axios from 'axios'

// // Define the base URL for the API
// const api = axios.create({
//   baseURL: 'http://localhost:4000/api', //database API endpoint
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })

// export default api
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000/api', // Verifique se isso está correto
})

export default api
