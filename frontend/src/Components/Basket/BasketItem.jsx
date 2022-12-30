import formatCurrency from '../../Functions/formatCurrency'
import RemoveFromBasketButton from "./RemoveFromBasketButton"

export default function BasketItem({ item }) {
  return (
    <li className='basket-item'>
      <span>
        <span>{item.name} x{item.qty}</span>
        <code>{formatCurrency(item.price * item.qty)}</code>
      </span>
      <RemoveFromBasketButton item={item} />
    </li>
  )
}
