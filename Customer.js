import React, { useReducer } from 'react'


const Customer = () => {
    const initialState = {
        count: 0
    }
    const reducer = (state,action) => {
        switch(action){
            case 'increment':
                return { count : state.count + 1}
            default:
                return { count : state.count} 
            }
    }
    const [state , dispatch] = useReducer(reducer,initialState)
    return (
        <div>Customer : {state.count}
        <button onClick={()=>dispatch('increment')} >Add</button>
        </div>
    )
}

export default Customer
