export interface Product {
    success: boolean
    data: ProductData[]
  }
  
  export interface ProductData {
    _id: string
    product_id: string
    name: string
    price: number
    amount: number
    description: string
    image: string
  }