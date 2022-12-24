import BasketItem from "./BasketItem";

export default function BasketItemsList({ items }) {
  return (
    <ul className='basket-items-list'>
      {items.map((item,key) => (
        <BasketItem item={item} key={key} />
      ))}
    </ul>
  )
}
