import axios from "axios"

export default function useRepository(repository) {
  const client = axios.create({
    baseURL: 'http://localhost:3001/',
    withCredentials: true,
  })

  client.interceptors.request.use(
    (request) => {
      console.log(request.url)
      if (request.url === 'sanctum/csrf-cookie') {
        return request
      }

      // make request to fetch csrf token first
      return request
    },
    request => request
  )

  return repository(client)
}
