import axios from 'axios'
import { API_URL } from './config/index'

export default axios.create({
  baseURL: API_URL,
  headers: {
    "content-type" : "application/json",
    "Access-Control-Allow-origin": "true",
    "origin": "http://localhost:3000",
    "crossorigin": "true"
  }
})