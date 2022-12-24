import BasketSubscriber from "../Subscriber/BasketSubscriber"

export default function useBasket() {
  const [ basket, setBasket ] = BasketSubscriber()

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
      : [...basket, {...item, qty}]

    setBasket(newBasket)
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

    setBasket(newBasket)
  }

  return {
    basket,
    addToBasket,
    removeFromBasket,
  }
}
