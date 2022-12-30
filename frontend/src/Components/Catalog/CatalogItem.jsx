import { Link } from "react-router-dom";
import formatCurrency from "../../Functions/formatCurrency";
import AddToBasketButton from "./AddToBasketButton";
import CatalogImage from "./CatalogImage";

export default function CatalogItem({ item }) {
  return (
    <li className='catalog-item'>
      <Link to={`/product/${item.id}`}>
        <CatalogImage imageUrl={item.image_url} itemName={item.name} itemId={item.id} />
        <span>{item.name}</span>
        <code>{formatCurrency(item.price)}</code>
      </Link>
      <AddToBasketButton item={item} text='Add to basket' />
    </li>
  )
}
