
export default function CatalogSearchOptions({ value, onChange }) {
  return (
    <div className='catalog-search'>
      Search:
      <input type='text' value={value} onChange={e => onChange(e.currentTarget.value)} />
    </div>
  )
}
