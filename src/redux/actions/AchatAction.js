import axios from "axios";
import { ACHAT_AJOUTER_FAIL, ACHAT_AJOUTER_REQUEST, ACHAT_AJOUTER_RESET, ACHAT_AJOUTER_SUCCESS, ACHAT_LIST_FAIL, ACHAT_LIST_REQUEST, ACHAT_LIST_SUCCESS } from "../constants/AchatConstant";
//ajouter Achat
export const AjouterAchat=(idFrs,Achat)=>async (dispatch)=>{
    try {
        dispatch({
            type:ACHAT_AJOUTER_REQUEST
        })
      

        const {data}=await axios.post('Achat?fournisseurId='+ idFrs,Achat);
        dispatch({
            type:ACHAT_AJOUTER_SUCCESS,
            payload:data
        })
    } catch (errors) {
        const message="Le famille deja enregistrer"
        dispatch({
            type:ACHAT_AJOUTER_FAIL,
            payload:message
            
        })
        
    }
}

//List achat
export const listAchats=()=>async (dispatch)=>{
    try {
        dispatch({
            type:ACHAT_LIST_REQUEST
        })

        const {data}=await axios.get('Achat');
        dispatch({
            type:ACHAT_LIST_SUCCESS,
            payload:data
        })
    } catch (errors) {
        dispatch({
            type:ACHAT_LIST_FAIL,
            payload:
            errors.response && errors.response.data.message 
            ? errors.response.data.message
            : errors.response,
        })
        
    }
}