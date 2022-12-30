import usePubSubData from "../../PubSub/Hooks/usePubSubData"
import BasketContext from "../Context/BasketContext"

export default function BasketProvider({ children }) {
  const storedBasket = JSON.parse(localStorage.getItem('basket')) ?? []
  const store = usePubSubData({
    basket: storedBasket
  })

  return (
    <BasketContext.Provider value={store}>
      {children}
    </BasketContext.Provider>
  )
}
