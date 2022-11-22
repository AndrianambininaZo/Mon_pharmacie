import { VENTE_AJOUTER_FAIL, VENTE_AJOUTER_REQUEST, VENTE_AJOUTER_SUCCESS, VENTE_LIST_FAIL, VENTE_LIST_REQUEST, VENTE_LIST_SUCCESS } from "../constants/VenteConstant";

export const venteAjouterReducer=(state={},actios)=>{
    switch(actios.type){
        case VENTE_AJOUTER_REQUEST:
            return {
                loading:true, 
            };
        case VENTE_AJOUTER_SUCCESS:
            return {
                loading:false,
                 success:true,
                 ventes:actios.payload
                };
        case VENTE_AJOUTER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}

//reducer achat list
export const venteListReducer=(state={ventes:[]},actios)=>{
    switch(actios.type){
        case VENTE_LIST_REQUEST:
            return {
                loading:true, 
                ventes:[]
            };
        case VENTE_LIST_SUCCESS:
            return {
                loading:false,
                 ventes:actios.payload
                };
        case VENTE_LIST_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}