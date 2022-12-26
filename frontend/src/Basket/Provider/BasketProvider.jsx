import usePubSubData from "../../PubSub/Hooks/usePubSubData"
import BasketContext from "../Context/BasketContext"

export default function BasketProvider({ children }) {
  const store = usePubSubData({
    basket: []
  })

  return (
    <BasketContext.Provider value={store}>
      {children}
    </BasketContext.Provider>
  )
}
