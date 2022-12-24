import axios from "axios";

export default function CatalogRepository() {
  const client = axios.create({
    baseURL: 'http://localhost:3001/api'
  })

  const search = (params) => {
    const queryString = new URLSearchParams(params)
    return client.get(`catalog?${queryString}`)
      .then(response => response.data)
  }

  return {
    search
  }

}
