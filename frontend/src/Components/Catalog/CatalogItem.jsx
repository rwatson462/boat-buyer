import useBasket from "../../Basket/Hooks/useBasket";
import formatCurrency from "../../Functions/formatCurrency";

export default function CatalogItem({ item }) {
  const { addToBasket } = useBasket()

  return (
    <li className='catalog-item'>
      <span>{item.name}</span>
      <code>{formatCurrency(item.price)}</code>
      <button onClick={() => addToBasket({item, qty: 1})}>Add to basket</button>
    </li>
  )
}