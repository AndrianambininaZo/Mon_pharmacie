import axios from "axios";
import { VENTE_AJOUTER_FAIL, VENTE_AJOUTER_REQUEST, VENTE_AJOUTER_SUCCESS } from "../constants/VenteConstant";

//ajouter Achat
export const AjouterVente=(idEmpyoyer,Achat)=>async (dispatch)=>{
    try {
        dispatch({
            type:VENTE_AJOUTER_REQUEST
        })
      

        const {data}=await axios.post('Vente?fournisseurId='+ 1,Achat);
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
        
  