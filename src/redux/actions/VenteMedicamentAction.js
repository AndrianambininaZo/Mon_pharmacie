import axios from "axios";
import { VENTEMEDICAMENT_AJOUTER_FAIL, VENTEMEDICAMENT_AJOUTER_REQUEST, VENTEMEDICAMENT_AJOUTER_SUCCESS } from "../constants/VentMedicamentConstant";

//ajouter vente medicament
export const AjouterVentMedicament=(qte,medicamentId,prix)=>async (dispatch)=>{
    try {
        dispatch({
            type:VENTEMEDICAMENT_AJOUTER_REQUEST
        })
      

        const {data}=await axios.post('Vente/Medicament?qte='+ qte +'&medicId='+ medicamentId +'&prix=' + prix);
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