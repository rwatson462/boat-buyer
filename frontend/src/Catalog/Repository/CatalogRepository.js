
export default function CatalogRepository(client) {
  
  const search = (params) => {
    const queryString = new URLSearchParams(params)
    return client.get(`catalog?${queryString}`)
      .then(response => response.data)
  }

  return {
    search
  }

}
