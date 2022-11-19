import { ACHAT_AJOUTER_FAIL, ACHAT_AJOUTER_REQUEST, ACHAT_AJOUTER_SUCCESS, ACHAT_LIST_FAIL, ACHAT_LIST_REQUEST, ACHAT_LIST_SUCCESS } from "../constants/AchatConstant";

//Achat Ajouter
export const achatAjouterReducer=(state={},actios)=>{
    switch(actios.type){
        case ACHAT_AJOUTER_REQUEST:
            return {
                loading:true, 
            };
        case ACHAT_AJOUTER_SUCCESS:
            return {
                loading:false,
                 success:true,
                 achats:actios.payload
                };
        case ACHAT_AJOUTER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}
//reducer achat list
export const achatListReducer=(state={achats:[]},actios)=>{
    switch(actios.type){
        case ACHAT_LIST_REQUEST:
            return {
                loading:true, 
                achats:[]
            };
        case ACHAT_LIST_SUCCESS:
            return {
                loading:false,
                 achats:actios.payload
                };
        case ACHAT_LIST_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}