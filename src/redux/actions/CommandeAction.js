import axios from "axios";
import { COMMANDE_AJOUTER_FAIL, COMMANDE_AJOUTER_REQUEST, COMMANDE_AJOUTER_SUCCESS } from "../constants/CommandeConstant";

//ajouter Achat
export const AjouterCommande=(qte,medicamentId,achatId,prix)=>async (dispatch)=>{
    try {
        dispatch({
            type:COMMANDE_AJOUTER_REQUEST
        })
      

        const {data}=await axios.post('Achat/commande?qte='+ qte +'&medicId='+ medicamentId +'&achatId=' + achatId +'&prix=' + prix);
        dispatch({
            type:COMMANDE_AJOUTER_SUCCESS,
            payload:data
        })
    } catch (errors) {
        const message="Le famille deja enregistrer"
        dispatch({
            type:COMMANDE_AJOUTER_FAIL,
            payload:message
            
        })
        
    }
}