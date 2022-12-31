
export default function CheckoutRepository(client) {
  const transferToCheckout = (basket) => (
    client.post('api/checkout/transfer', { basket })
  )

  return {
    transferToCheckout
  }
}
