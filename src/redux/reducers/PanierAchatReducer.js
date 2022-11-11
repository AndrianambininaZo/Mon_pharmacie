import { PANIER_AJOUTER_FAIL, PANIER_AJOUTER_REQUEST, PANIER_AJOUTER_SUCCESS } from "../constants/PanierAchatConstant";

//famille Ajouter
export const panierAjouterReducer=(state={},actios)=>{
    switch(actios.type){
        case PANIER_AJOUTER_REQUEST:
            return {
                loading:true, 
            };
        case PANIER_AJOUTER_SUCCESS:
            return {
                loading:false,
                 success:true,
                 carts:actios.payload
                };
        case PANIER_AJOUTER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };        
        default:
            return state;        
    }
}

export const panierListReducer=(state={carts:[]},actios)=>{
    switch(actios.type){
        case PANIER_AJOUTER_REQUEST:
            return {
                loading:true, 
                carts:[]
            };
        case PANIER_AJOUTER_SUCCESS:
            return {
                loading:false,
                 carts:actios.payload
                };
        case PANIER_AJOUTER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}