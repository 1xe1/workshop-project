
export interface Customer {
    success: boolean
    data: CustomerData[]
  }
  
  export interface CustomerData {
    _id: string
    customer_id: string
    name: string
    phone: string
    gender: Gender
    address: string
  }
  
  export enum Gender {
    Famale = 'famale',
    Male = 'male',
  }