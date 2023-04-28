import useAuth from "@/hooks"
import { restoreState } from "@/store/slices/authSlice"
import { useAppDispatch } from "@/store/store"
import { constant } from "@/utils/constant"
import { getLocalObject } from "@/utils/localHandler"
import { useEffect, useMemo } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"

type Props = {}

const RequireAuth = ({}: Props) => {
    const location = useLocation()
    const { auth } = useAuth()
    const dispatch = useAppDispatch()

    useEffect(() =>{
        if(auth){
            const restore = getLocalObject(constant.STORAGE_TOKEN)
            dispatch(restoreState(restore))
        }
    }),[]
    const reqireAuth = useMemo(() => {
        return auth ? (<Outlet />) : (<Navigate to ='/signin' state={{from: location}} replace/>) 
    },[])

    return reqireAuth
}

export default RequireAuth