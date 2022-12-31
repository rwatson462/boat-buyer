import useBasket from "../../Basket/Hooks/useBasket"

export default function ClearBasketButton() {
  const { clearBasket } = useBasket()
  return (
    <button onClick={() => clearBasket()} className='clear-basket-button'>
      Empty Basket
    </button>
  )
}
