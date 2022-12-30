import { Link } from "react-router-dom";
import BasketIcon from "./Basket/BasketIcon";

export default function PageTitle({ title }) {
  return (
    <div className='page-header'>
      <h1 className='page-title'><Link to='/'>{title}</Link></h1>
      <BasketIcon />
    </div>
  )
}
