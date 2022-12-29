import CatalogItem from "./CatalogItem";

export default function CatalogItemsList({ loading, items }) {
  return (
    loading
    ? <div className='catalog-loading-message'>
        <p>Loading catalog...</p>
      </div>
    : <ul className='catalog-items-list'>
        {items.map((item, key) => (
          <CatalogItem item={item} key={key} />
        ))}
      </ul>
  )
}
