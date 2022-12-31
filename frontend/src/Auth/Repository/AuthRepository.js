
export default function AuthRepository(client) {
  const getToken = () => (
    client.get('sanctum/csrf-cookie')
  )

  return {
    getToken
  }
}
