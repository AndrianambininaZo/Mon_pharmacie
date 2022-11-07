import {    FOURNISSEUR_AJOUTER_FAIL, FOURNISSEUR_AJOUTER_REQUEST, FOURNISSEUR_AJOUTER_SUCCESS,
            FOURNISSEUR_LIST_FAIL, FOURNISSEUR_LIST_REQUEST, FOURNISSEUR_LIST_SUCCESS,
            FOURNISSEUR_SUPPRIMER_FAIL, FOURNISSEUR_SUPPRIMER_REQUEST, FOURNISSEUR_SUPPRIMER_SUCCESS 
        }from "../constants/FournisseurContant";

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

//Fournisseurs Ajouter
export const fournisseurAjouterReducer=(state={},actios)=>{
    switch(actios.type){
        case FOURNISSEUR_AJOUTER_REQUEST:
            return {
                loading:true, 
            };
        case FOURNISSEUR_AJOUTER_SUCCESS:
            return {
                loading:false,
                 success:true,
                 founisseurs:actios.payload
                };
        case FOURNISSEUR_AJOUTER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}

export const fournisseurSupprimerReducer=(state={},actios)=>{
    switch(actios.type){
        case FOURNISSEUR_SUPPRIMER_REQUEST:
            return {
                loading:true, 
            };
        case FOURNISSEUR_SUPPRIMER_SUCCESS:
            return {
                loading:false,
                 success:true
                };
        case FOURNISSEUR_SUPPRIMER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}