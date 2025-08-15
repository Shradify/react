import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // simple: just check authstatus
        // true && (false !== true) => true && true
        //let authValue = authStatus === true ? true : false (now if ke andr not check krna pdega)
        if(authentication && (authStatus !== authentication)){
            navigate("/login")
        }
        // false && (true !== true) => false && false
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false) //hr bar false hoga hi
    }, [authStatus, navigate, authentication])

    return loader ? <h1>loading...mon</h1> : <>{children}</>
}

