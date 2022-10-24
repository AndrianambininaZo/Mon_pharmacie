import { FOURNISSEUR_LIST_FAIL,FOURNISSEUR_LIST_SUCCESS,FOURNISSEUR_LIST_REQUEST } from "../constants/FournisseurContant";

export const fournisseurListReducer=(state={fournisseurs:[]},actios)=>{
    switch(actios.type){
        case FOURNISSEUR_LIST_REQUEST:
            return {
                loading:true, 
                fournisseurs:[]
            };
        case FOURNISSEUR_LIST_SUCCESS:
            return {
                loading:false,
                fournisseurs:actios.payload
                };
        case FOURNISSEUR_LIST_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}