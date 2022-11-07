
import { FAMILLE_LIST_REQUEST,FAMILLE_LIST_FAIL,FAMILLE_LIST_SUCCESS, FAMILLE_SUPPRIMER_REQUEST, FAMILLE_SUPPRIMER_SUCCESS, FAMILLE_SUPPRIMER_FAIL, FAMILLE_AJOUTER_REQUEST, FAMILLE_AJOUTER_SUCCESS, FAMILLE_AJOUTER_FAIL, FAMILLE_AJOUTER_RESET, FAMILLE_MODIFIER_REQUEST, FAMILLE_MODIFIER_SUCCESS, FAMILLE_MODIFIER_FAIL } from "../constants/FamilleConstant";
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
//delete famille
export const familleSupprimerReducer=(state={},actios)=>{
    switch(actios.type){
        case FAMILLE_SUPPRIMER_REQUEST:
            return {
                loading:true, 
            };
        case FAMILLE_SUPPRIMER_SUCCESS:
            return {
                loading:false,
                 success:true
                };
        case FAMILLE_SUPPRIMER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}
//famille Ajouter
export const familleAjouterReducer=(state={},actios)=>{
    switch(actios.type){
        case FAMILLE_AJOUTER_REQUEST:
            return {
                loading:true, 
            };
        case FAMILLE_AJOUTER_SUCCESS:
            return {
                loading:false,
                 success:true,
                 familles:actios.payload
                };
        case FAMILLE_AJOUTER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        case FAMILLE_AJOUTER_RESET:
            return {};
        default:
            return state;        
    }
}

//famille Modifier
export const familleModifierReducer=(state={},actios)=>{
    switch(actios.type){
        case FAMILLE_MODIFIER_REQUEST:
            return {
                loading:true, 
            };
        case FAMILLE_MODIFIER_SUCCESS:
            return {
                loading:false,
                 success:true,
                 familles:actios.payload
                };
        case FAMILLE_MODIFIER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}