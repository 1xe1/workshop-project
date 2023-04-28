import { Customer } from "@/models/customer.model"
import { Product} from "@/models/product.model"
import { Signin } from "@/models/signin.model"
import  httpClient from "@/utils/httpClient"



type SignInProps = {
    username : string
    password : string
}

//Authentication


export const singIn = async (credential : SignInProps):Promise<Signin> => {
    const {data:response} = await httpClient.post<Signin>('/auth',credential)
    return response
}

export const singOut = async ():Promise<void> =>{
    await httpClient.post('auth/logout',null)
}
//Product
export const fecthProducts = async ():Promise<Product> =>{
    const {data:response} = await httpClient.get<Product>('/products')
    return response
}
//Customer
export const fetchCustomer = async ():Promise<Customer> =>{
    const {data:response} = await httpClient.get<Customer>('/customers')
    return response
}