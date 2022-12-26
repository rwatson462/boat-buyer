import useBasket from "../../Basket/Hooks/useBasket"

export default function AddToBasketButton({ item, text }) {
  const { addToBasket } = useBasket()
  
  return (
    <button onClick={() => addToBasket({item, qty: 1})}>{text}</button>
  )
}
