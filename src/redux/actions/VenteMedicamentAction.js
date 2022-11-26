import axios from "axios";
import { VENTEMEDICAMENT_AJOUTER_FAIL, VENTEMEDICAMENT_AJOUTER_REQUEST, VENTEMEDICAMENT_AJOUTER_SUCCESS, VENTEMEDICAMENT_LIST_FAIL, VENTEMEDICAMENT_LIST_REQUEST, VENTEMEDICAMENT_LIST_SUCCESS } from "../constants/VentMedicamentConstant";

//ajouter vente medicament
export const AjouterVentMedicament=(qte,medicamentId,achatId,prix)=>async (dispatch)=>{
    try {
        dispatch({
            type:VENTEMEDICAMENT_AJOUTER_REQUEST
        })
      
        
        const {data}=await axios.post('Commande/medicament?qte='+ qte +'&medicId='+ medicamentId +'&achatId=' + achatId +'&prix=' + prix);
        dispatch({
            type:VENTEMEDICAMENT_AJOUTER_SUCCESS,
            payload:data
        })
    } catch (errors) {
        const message="Le vente deja enregistrer"
        dispatch({
            type:VENTEMEDICAMENT_AJOUTER_FAIL,
            payload:message
            
        })
        
    }
}

//List achat
export const listDetailVente=()=>async (dispatch)=>{
    try {
        dispatch({
            type:VENTEMEDICAMENT_LIST_REQUEST
        })

        const {data}=await axios.get('Vente/Detail');
        dispatch({
            type:VENTEMEDICAMENT_LIST_SUCCESS,
            payload:data
        })
    } catch (errors) {
        dispatch({
            type:VENTEMEDICAMENT_LIST_FAIL,
            payload:
            errors.response && errors.response.data.message 
            ? errors.response.data.message
            : errors.response,
        })
        
    }
}