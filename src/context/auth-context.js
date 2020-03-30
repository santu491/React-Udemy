import React from 'react'

const authContext=React.createContext({
    loginauthenticated:()=>{},
    isAuthenticated:false
})

export default authContext