// import { useNavigate } from "react-router"
import useBasket from "../../Basket/Hooks/useBasket"
import CheckoutRepository from "../../Checkout/Repository/CheckoutRepository"
import useRepository from '../../Hooks/useRepository'

export default function TransferBasketToCheckoutButton() {
  const { basket } = useBasket()
  const checkoutRepository = useRepository(CheckoutRepository)
  // const navigateTo = useNavigate()

  const transferToCheckout = () => {
    // todo
    console.log(basket)
    checkoutRepository
      .transferToCheckout(basket)
      // .then(navigateTo('/checkout'))
  }

  return (
    <button onClick={() => transferToCheckout()} className='transfer-to-checkout-button'>Checkout</button>
  )
}
