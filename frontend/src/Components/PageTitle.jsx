import BasketIcon from "./Basket/BasketIcon";

export default function PageTitle({ title }) {
  return (
    <div className='page-header'>
      <h1 className='page-title'>{title}</h1>
      <BasketIcon />
    </div>
  )
}
