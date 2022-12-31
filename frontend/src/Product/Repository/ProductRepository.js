
export default function ProductRepository(client) {
  
  const get = (productId) => (
    client.get(`api/product/${productId}`)
      .then(response => response.data)
  )

  return {
    get
  }

}
