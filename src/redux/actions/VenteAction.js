import axios from "axios";
import { VENTE_AJOUTER_FAIL, VENTE_AJOUTER_REQUEST, VENTE_AJOUTER_SUCCESS, VENTE_LIST_FAIL, VENTE_LIST_REQUEST, VENTE_LIST_SUCCESS } from "../constants/VenteConstant";

//ajouter Achat
export const AjouterVente=(idEmpyoyer,vente)=>async (dispatch)=>{
    try {
        dispatch({
            type:VENTE_AJOUTER_REQUEST
        })
      

        const {data}=await axios.post('Vente?employeId='+ 1,vente);
        dispatch({
            type:VENTE_AJOUTER_SUCCESS,
            payload:data
        })
    } catch (errors) {
        const message="Le vente deja enregistrer"
        dispatch({
            type:VENTE_AJOUTER_FAIL,
            payload:message
            
        })

    }
}

//List achat
export const listVentes=()=>async (dispatch)=>{
    try {
        dispatch({
            type:VENTE_LIST_REQUEST
        })

        const {data}=await axios.get('Vente/All');
        dispatch({
            type:VENTE_LIST_SUCCESS,
            payload:data
        })
    } catch (errors) {
        dispatch({
            type:VENTE_LIST_FAIL,
            payload:
            errors.response && errors.response.data.message 
            ? errors.response.data.message
            : errors.response,
        })
        
    }
}
        
  