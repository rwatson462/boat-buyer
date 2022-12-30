import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import PageTitle from "../Components/PageTitle";
import ProductDetailContainer from "../Components/Product/ProductDetailContainer";
import ProductImage from "../Components/Product/ProductImage";
import ProductInformation from "../Components/Product/ProductInformation";
import useRepository from '../Hooks/useRepository'
import ProductRepository from "../Product/Repository/ProductRepository";

export default function ProductPage() {
  // get product id from params
  const { productId } = useParams()
  const productRepository = useRepository(ProductRepository)

  // fetch product data
  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => productRepository.get(productId)
  })

  if (error) {
    throw new Error(error)
  }

  // display page
  return (
    <>
      <PageTitle title='Boat-buyer' />
      { isLoading
        ? <p>Loading...</p>
        : <ProductDetailContainer>
          <ProductImage productName={product.name} imageUrl={product.image_url} />
          <ProductInformation product={product} />
        </ProductDetailContainer>
      }
    </>
  )
}
