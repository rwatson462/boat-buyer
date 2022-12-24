import formatCurrency from "../../Functions/formatCurrency"

export default function BasketTotal({ items }) {
  const total = items.reduce((sum, item) => (
    sum + item.qty * item.price
  ), 0)

  return (
    <div className='basket-total'>
      <code>{formatCurrency(total)}</code>
    </div>
  )
}
