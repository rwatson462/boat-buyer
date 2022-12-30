import { XCircleIcon } from "@heroicons/react/24/solid"
import useBasket from "../../Basket/Hooks/useBasket"

export default function RemoveFromBasketButton({ item }) {
  const { removeFromBasket } = useBasket()

  return (
    <button
      onClick={() => removeFromBasket({item, qty: 1})}
      className='remove-from-basket-button'
      title='Remove from basket'
    >
      <XCircleIcon className='icon' />
    </button>
  )
}
