import { useReducer } from "react"

const App = () => {

  const reducer = (state, action) => {
    console.log('action ============>',action)
    console.log('state ============>',state)
    switch(action.type){
      case 'AMMAR':
        return {...state, name:'Ammar', dept: action.dept}
      case 'UMAIR':
        return {...state, name:'Umair', dept: action.dept}
        default:
           return state
    }

  }
  const [state, dispatch] = useReducer(reducer, {name:'',dept:''})
  return(
    <div>
      <h1>Name: {state.name}</h1>
      <h1>Department: {state.dept}</h1>
      <button onClick={()=>dispatch( {type:'UMAIR',dept: 'Finance'})} >Change name</button>
    </div>
  )
}

export default App
