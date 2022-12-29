import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import CatalogRepository from "../../Catalog/Repository/CatalogRepository"
import useRepository from "../../Hooks/useRepository"
import SectionTitle from "../SectionTitle"
import CatalogItemsList from "./CatalogItemsList"
import CatalogSearchOptions from "./CatalogSearchOptions"
import CatalogSortOptions from "./CatalogSortOptions"

export default function Catalog() {
  const [sortBy, setSortBy] = useState('name')
  const catalogRepository = useRepository(CatalogRepository)
  const [searchText, setSearchText] = useState('')
  const queryClient = useQueryClient()

  const { data: catalogItems, isLoading, isError } = useQuery({
    queryKey: ['catalog', searchText],
    queryFn: () => catalogRepository.search({
      name: searchText
    })
  })

  const updateSearchText = (text) => {
    setSearchText(text)
    queryClient.invalidateQueries('catalog')
  }

  if (isError) {
    throw new Error('An error occured loading the Product Catalog')
  }

  catalogItems?.sort((a,b) => {
    if (sortBy === 'name-asc') {
      return a.name.localeCompare(b.name)
    }
    if (sortBy === 'name-desc') {
      return b.name.localeCompare(a.name)
    }
    if (sortBy === 'price-asc') {
      return a.price - b.price
    }
    if (sortBy === 'price-desc') {
      return b.price - a.price
    }
    
    return 0
  })

  return (
    <>
      <SectionTitle title='Catalogue' />
      <CatalogSortOptions onChange={setSortBy} />
      <CatalogSearchOptions value={searchText} onChange={updateSearchText} />
      <CatalogItemsList loading={isLoading} items={catalogItems} />
    </>
  )
}
