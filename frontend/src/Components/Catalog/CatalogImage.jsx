
export default function CatalogImage({ imageUrl, itemName, itemId }) {
  return (
    <img
      src={imageUrl}
      width='1280'
      height='720'
      alt={itemName}
    />
  )
}
