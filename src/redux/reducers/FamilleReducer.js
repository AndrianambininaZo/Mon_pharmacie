
import { FAMILLE_LIST_REQUEST,FAMILLE_LIST_FAIL,FAMILLE_LIST_SUCCESS } from "../constants/FamilleConstant";
export const familleListReducer=(state={familles:[]},actios)=>{
    switch(actios.type){
        case FAMILLE_LIST_REQUEST:
            return {
                loading:true, 
                familles:[]
            };
        case FAMILLE_LIST_SUCCESS:
            return {
                loading:false,
                 familles:actios.payload
                };
        case FAMILLE_LIST_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}