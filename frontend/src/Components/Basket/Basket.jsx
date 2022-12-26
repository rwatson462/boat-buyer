import useBasket from "../../Basket/Hooks/useBasket";
import SectionTitle from "../SectionTitle";
import BasketEmptyMessage from "./BasketEmptyMessage";
import BasketItemsList from "./BasketItemsList";
import BasketTotal from "./BasketTotal";
import ClearBasketButton from "./ClearBasketButton";

export default function Basket() {
  const { basket } = useBasket('basket')

  return (
    <>
      <SectionTitle title='Basket' />
      { basket.length === 0
        ? <BasketEmptyMessage />
        : <>
          <BasketItemsList items={basket} />
          <BasketTotal items={basket} />
        </>
      }
      <ClearBasketButton />
    </>
  )
}
