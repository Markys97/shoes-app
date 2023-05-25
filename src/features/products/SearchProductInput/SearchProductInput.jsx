import SearchProductInput_tpl from "../../../entities/products/components/SearchProductInpuct_tpl/SearchProductInput_tpl"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setSearchProductTextValue } from "../../../shared/models/slices/productSlice"
function SearchProductInput() {
    const dispatch = useDispatch()
    const [searchInputValue, setSearchInputValue] = useState('')
    const setfilter= ()=> {
        dispatch(setSearchProductTextValue(searchInputValue))
    }

  
  return (
    <SearchProductInput_tpl state={[setSearchInputValue,searchInputValue]} onfilter={setfilter}/> 
  )
}

export default SearchProductInput