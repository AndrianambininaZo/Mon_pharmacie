import { MEDICAMENT_AJOUTER_SUCCESS, MEDICAMENT_LIST_FAIL, MEDICAMENT_LIST_REQUEST, MEDICAMENT_LIST_SUCCESS } from "../constants/MedicammentConstant";

const initialeState={
    medicaments:[],
    
}/**   
export const medicamentListReducer=(state={medicaments:[]},actios)=>{
    switch(actios.type){
        case MEDICAMENT_LIST_REQUEST:
            return {
                loading:true, 
                medicaments:[]
            };
        case MEDICAMENT_LIST_SUCCESS:
            return {
                loading:false,
                 medicaments:actios.payload
                };
        case MEDICAMENT_LIST_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}
*/
export const medicamentListReducer=(state=initialeState,actios)=>{
    switch(actios.type){
        case MEDICAMENT_LIST_REQUEST:
            return {
                ...state,
                  loading:true,                
                medicaments:[]
            };
        case MEDICAMENT_LIST_SUCCESS:
            return {
                ...state,
                loading:false,                
                 medicaments:actios.payload
                };
        case MEDICAMENT_LIST_FAIL:
            return {
                ...state,
                loading:false,                
                 error:actios.payload
                };
        default:
            return state;        
    }
}