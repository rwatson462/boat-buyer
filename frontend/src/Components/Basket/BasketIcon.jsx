import useBasket from "../../Basket/Hooks/useBasket";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

export default function BasketIcon() {
  const { basket } = useBasket()

  return (
    <div className='basket-icon-container'>
      <ShoppingBagIcon className='basket-icon' />
      <span className='basket-icon-count'>{basket.length}</span>
    </div>
  )
}
