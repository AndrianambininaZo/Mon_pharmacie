import { getCarts } from "../../componets/admin/achat/LocalStorage";
import { PANIER_AJOUTER_FAIL, PANIER_AJOUTER_REQUEST, PANIER_AJOUTER_SUCCESS } from "../constants/PanierAchatConstant";

export const AjouterPanier=(carts)=>async (dispatch)=>{
    try {
        dispatch({
            type:PANIER_AJOUTER_REQUEST
        })

       const data= localStorage.setItem('carts',JSON.stringify(carts));
        dispatch({
            type:PANIER_AJOUTER_SUCCESS,
            payload:data
        })
    } catch (error) {
        const message="Le famille deja enregistrer"
        dispatch({
            type:PANIER_AJOUTER_FAIL,
            payload:message
            
        })
        
    }
}

//list panier
export const listPanier=()=>async (dispatch)=>{
    try {
        dispatch({
            type:PANIER_AJOUTER_REQUEST
        })

        const data=getCarts();
        dispatch({
            type:PANIER_AJOUTER_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:PANIER_AJOUTER_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.response,
        })
        
    }
}