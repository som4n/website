import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
}

export const userService = {
  createStaff: (userData) => api.post('/users/staff', userData),
  getAllStaff: () => api.get('/users/staff'),
  updateStaff: (id, userData) => api.put(`/users/staff/${id}`, userData),
  deleteStaff: (id) => api.delete(`/users/staff/${id}`),
}

export default api import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const userService = {
  createStaff: (userData) => api.post('/users/staff', userData),
  getAllStaff: () => api.get('/users/staff'),
  deleteStaff: (id) => api.delete(`/users/staff/${id}`),
}

export default api