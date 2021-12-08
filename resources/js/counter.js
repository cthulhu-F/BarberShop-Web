import 'bootstrap/dist/css/bootstrap.min.css';


import { useReducer, useState } from "react"; 


    const initialState = {contador:1};

    const TYPES = {
        INCREMENT:"INCREMENT",
        DECREMENT:"DECREMENT",
    }

    function reducer (state, action){
        switch(action.type){
            case TYPES.INCREMENT:
                if (state.contador <0) return {contador: 1};
                return {contador: state.contador +1}

            case TYPES.DECREMENT:
                if (state.contador <=1) return {contador: 1};
                return {contador: state.contador -1}
        }
    }

    const Counter= ()=>{
        const[state, dispatch] = useReducer(reducer, initialState);

        const sumar = () => dispatch({type:TYPES.INCREMENT});

        const restar = () => dispatch({type:TYPES.DECREMENT});

    return (
        <div className="list-group-item border-0 p-0 pe-1 w-50 d-flex">
            <button onClick={restar} className="btn btn-white border rounded-0 rounded-start fs-3 px-1 px-xl-3 fw-bold " style={{ zIndex: "2"}}><i className="bi bi-dash"></i></button>
            <h3 className="form-control h-100 border-0 border-top border-bottom rounded-0 bg-white text-center fs-3">{state.contador}</h3>
            <button onClick={sumar} className="btn btn-white border rounded-0 rounded-end fs-3 px-1 px-xl-3 fw-bold" style={{zIndex: "2"}}><i className="bi bi-plus"></i></button>
        </div>
    );

    }


export default Counter
