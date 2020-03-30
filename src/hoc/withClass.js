import React from 'react'

const withClass=(WrappedComponent)=>{
    return props=>(
        <div>
            <WrappedComponent {...props}/>
        </div>
    )

};

export default withClass