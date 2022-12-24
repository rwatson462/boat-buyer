import useBasket from "../../Basket/Hooks/useBasket"
import formatCurrency from '../../Functions/formatCurrency'

export default function BasketItem({ item }) {
  const { removeFromBasket } = useBasket()

  return (
    <li className='basket-item'>
      <span>
        <span>{item.name} x{item.qty}</span>
        <code>{formatCurrency(item.price * item.qty)}</code>
      </span>
      <button onClick={() => removeFromBasket({item, qty: 1})}>Remove</button>
    </li>
  )
}
