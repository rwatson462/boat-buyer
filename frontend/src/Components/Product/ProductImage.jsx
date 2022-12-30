
export default function ProductImage({ productName, imageUrl }) {
  return (
    <img src={imageUrl} alt={productName} className='product-image-full' />
  )
}