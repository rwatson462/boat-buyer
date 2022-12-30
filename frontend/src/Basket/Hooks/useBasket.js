import { useContext, useSyncExternalStore } from "react"
import BasketContext from "../Context/BasketContext"

export default function useBasket() {
  const store = useContext(BasketContext)

  const { basket } = useSyncExternalStore(
    store.subscribe,
    store.get
  )

  const persistBasket = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }

  const isInBasket = (item) => (
    basket.find(basketItem => basketItem.name === item.name)
  )

  const addToBasket = ({ item, qty }) => {
    const newBasket = isInBasket(item)
      ? basket.map(basketItem => (
          basketItem.name === item.name ? {
            name: basketItem.name,
            qty: qty + basketItem.qty,
            price: basketItem.price
          } : basketItem
        ))
      : [...basket, {name: item.name, price: item.price, qty}]

    store.set({ basket: newBasket })
    persistBasket(newBasket)
  }

  const removeFromBasket = ({ item, qty }) => {
    const newBasket = basket.reduce((newBasket, basketItem) => {
      if (basketItem.name === item.name) {
        const newQty = Math.min(basketItem.qty - qty)
        if (newQty <= 0) {
          return newBasket
        } else {
          return [
            ...newBasket,
            {...basketItem, qty: basketItem.qty - qty}
          ]
        }
      }
      return [
        ...newBasket,
        basketItem
      ]
    }, [])

    store.set({ basket: newBasket })
    persistBasket(newBasket)
  }

  const clearBasket = () => {
    store.set({ basket: [] })
    persistBasket([])
  }

  return {
    basket,
    addToBasket,
    removeFromBasket,
    clearBasket,
  }
}
