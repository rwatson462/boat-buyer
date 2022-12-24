
export default function CatalogSearchOptions({ value, onChange }) {
  return (
    <div className='catalog-search'>
      <input type='text' value={value} onKeyUp={e => onChange(e.currentTarget.value)} />
    </div>
  )
}