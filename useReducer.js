import { useReducer } from "react"

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const reducer = (state, action) => {
    
    switch(action.type){
        case INCREMENT :
            return{count: state.count+1}
            case DECREMENT :
                return{count: state.count-1}
                case RESET :
                    return{count:0}
                    default:
                        return state;
    }
};

const UseReducer = () => {
    const[state,disPatcher] = useReducer(reducer,{count:0})
    const handlerfuncInc = ()=>{
            disPatcher({type:INCREMENT})
    }
    const handlerfuncDec = ()=>{
        disPatcher({type:DECREMENT})
}
const handlerfuncRes = ()=>{
    disPatcher({type:RESET})
}

    
    return(
        <>
        <h1>COUNT : {state.count} </h1>
        <button onClick={handlerfuncInc}>INCREASE</button>
        <button onClick={handlerfuncDec}>DECREASE</button>
        <button onClick={handlerfuncRes}>RESET</button>
        </>
    )
}


export default UseReducer;