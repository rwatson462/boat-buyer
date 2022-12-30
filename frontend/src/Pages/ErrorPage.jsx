import { useRouteError } from "react-router"

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  
  return (
    <div className='error-boundary-message'>
      <p>{error.statusText}</p>
      <p>{error.message}</p>
    </div>
  )
}
