import formatCurrency from "../../Functions/formatCurrency";
import AddToBasketButton from "./AddToBasketButton";

export default function CatalogItem({ item }) {
  return (
    <li className='catalog-item'>
      <span>{item.name}</span>
      <code>{formatCurrency(item.price)}</code>
      <AddToBasketButton item={item} text='Add to basket' />
    </li>
  )
}