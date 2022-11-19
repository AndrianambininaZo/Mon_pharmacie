import { EMPLOYER_AJOUTER_FAIL, EMPLOYER_AJOUTER_REQUEST, EMPLOYER_AJOUTER_SUCCESS, EMPLOYER_LIST_FAIL, EMPLOYER_LIST_REQUEST, EMPLOYER_LIST_SUCCESS } from "../constants/EmployerConstant";

//famille Ajouter
export const employerAjouterReducer=(state={},actios)=>{
    switch(actios.type){
        case EMPLOYER_AJOUTER_REQUEST:
            return {
                loading:true, 
            };
        case EMPLOYER_AJOUTER_SUCCESS:
            return {
                loading:false,
                 success:true,
                 employers:actios.payload
                };
        case EMPLOYER_AJOUTER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}

export const employerListReducer=(state={employers:[]},actios)=>{
    switch(actios.type){
        case EMPLOYER_LIST_REQUEST:
            return {
                loading:true, 
                employers:[]
            };
        case EMPLOYER_LIST_SUCCESS:
            return {
                loading:false,
                employers:actios.payload
                };
        case EMPLOYER_LIST_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}