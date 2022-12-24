
export default function MultiColumnLayout({ columns }) {
  return (
    <div className='multi-column'>
      {columns.map((col, key) => (
        <div key={key}>{col}</div>
      ))}
    </div>
  )
}
