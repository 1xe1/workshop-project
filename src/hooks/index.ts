import { constant } from "@/utils/constant"
import { getLocalObject } from "@/utils/localHandler"

const useAuth = () => {
    const tokenStoreage = getLocalObject(constant.STORAGE_TOKEN)
    if(!tokenStoreage) return { auth: false }
    const { accessToken, isAuthenticated } = tokenStoreage
    return { auth: !!accessToken && isAuthenticated }
}

export default useAuth