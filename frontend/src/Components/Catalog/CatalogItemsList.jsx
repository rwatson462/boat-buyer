import CatalogItem from "./CatalogItem";

export default function CatalogItemsList({ items }) {
  return (
    <ul className='catalog-items-list'>
      {items.map((item, key) => (
        <CatalogItem item={item} key={key} />
      ))}
    </ul>
  )
}
