import { CustomerData } from "@/models/customer.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Customers = {
    customers: CustomerData[]
}

const initialState: Customers = {
    customers: []
}


const customerSlice = createSlice({
    name: 'fetchCustomer',
    initialState,
    reducers: {
        setCustomers: (state, action: PayloadAction<CustomerData[]>) => {
            state.customers = action.payload
        }
    }
})

export const { setCustomers } = customerSlice.actions

export const customerSelector = (state: RootState) => state.customer.customers
export default customerSlice.reducer