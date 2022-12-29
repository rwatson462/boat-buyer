import axios from "axios"

export default function useRepository(repository) {
  const client = axios.create({
    baseURL: 'http://localhost:3001/api'
  })

  return repository(client)
}
