export const setLocal = (key: string, value: any) => {
    const stringValue = JSON.stringify(value)
    localStorage.setItem(key, stringValue)
  }
  
  export const getLocal = (key: string) => {
    return localStorage.getItem(key)
  }
  
  export const getLocalObject = (key: string): any => {
    const valueString = localStorage.getItem(key)
    if (!valueString) return valueString
    return JSON.parse(valueString)
  }
  
  export const getLocalBool = (key: string): boolean => {
    const bool = localStorage.getItem(key)
    return bool === 'true'
  }
  
  export const removeLocal = (key: string) => {
    localStorage.removeItem(key)
  }
  
  export const setWithExpiry = (key: string, value: any) => {
    const now = new Date()
    const expireDate = 1000 * 60 * 60 * 24 // 1 day
    //const expireDate = 5000
  
    const item = {
      ...value,
      expiry: now.getTime() + expireDate,
    }
    const stringValue = JSON.stringify(item)
    localStorage.setItem(key, stringValue)
  }
  
  export const getCheckTokenExpiry = (key: string): boolean => {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) return true
    const itemObj = JSON.parse(itemStr)
    const now = new Date()
  
    if (now.getTime() > itemObj.expiry) {
      localStorage.removeItem(key)
    }
  
    return now.getTime() > itemObj.expiry
  }