import { COMMANDE_AJOUTER_FAIL, COMMANDE_AJOUTER_REQUEST, COMMANDE_AJOUTER_SUCCESS, COMMANDE_LIST_FAIL, COMMANDE_LIST_REQUEST, COMMANDE_LIST_SUCCESS } from "../constants/CommandeConstant";

export const commandeAjouterReducer=(state={},actios)=>{
    switch(actios.type){
        case COMMANDE_AJOUTER_REQUEST:
            return {
                loading:true, 
            };
        case COMMANDE_AJOUTER_SUCCESS:
            return {
                loading:false,
                 success:true,
                 commandes:actios.payload
                };
        case COMMANDE_AJOUTER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}

export const commandeListReducer=(state={commandes:[]},actios)=>{
    switch(actios.type){
        case COMMANDE_LIST_REQUEST:
            return {
                loading:true, 
                commandes:[]
            };
        case COMMANDE_LIST_SUCCESS:
            return {
                loading:false,
                commandes:actios.payload
                };
        case COMMANDE_LIST_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}