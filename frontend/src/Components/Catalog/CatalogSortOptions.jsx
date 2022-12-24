
export default function CatalogSortOptions({ onChange = () => {} }) {
  return (
    <div className='catalog-sort-options'>
      <span>Sort by:</span>
      <button onClick={() => onChange('name-asc')}>Name</button>
      <button onClick={() => onChange('name-desc')}>Name (desc)</button>
      <button onClick={() => onChange('price-asc')}>Price</button>
      <button onClick={() => onChange('price-desc')}>Price (desc)</button>
    </div>
  )
}