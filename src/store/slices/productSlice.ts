import { ProductData } from "@/models/product.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Products = {
    products: ProductData[]
}

const initialState: Products = {
    products: []
}


const productSlice = createSlice({
    name: 'fetchProduct',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductData[]>) => {
            state.products = action.payload
        }
    }
})

export const { setProducts } = productSlice.actions

export const productSelector = (state: RootState) => state.products.products
export default productSlice.reducer