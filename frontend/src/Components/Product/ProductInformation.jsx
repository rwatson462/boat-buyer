import formatCurrency from "../../Functions/formatCurrency";
import AddToBasketButton from "../Catalog/AddToBasketButton";
import SectionTitle from "../SectionTitle";

export default function ProductInformation({ product }) {
  return (
    <div className='product-information'>
      <div>
        <SectionTitle title={product.name} />
        <code>{formatCurrency(product.price)}</code>
      </div>
      <AddToBasketButton item={product} text='Buy now!' />
    </div>
  )
}
