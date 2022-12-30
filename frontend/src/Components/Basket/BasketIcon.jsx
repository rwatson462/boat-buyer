import useBasket from "../../Basket/Hooks/useBasket";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

export default function BasketIcon() {
  const { basket } = useBasket()

  const basketCount = basket.reduce((sum, item) => sum + item.qty, 0)

  return (
    <Link to='/basket' className='basket-icon-container'>
      <ShoppingBagIcon className='basket-icon' />
      <span className='basket-icon-count'>{basketCount}</span>
    </Link>
  )
}
