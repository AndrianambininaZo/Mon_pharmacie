import axios from "axios"
import { MEDICAMENT_AJOUTER_FAIL, MEDICAMENT_AJOUTER_REQUEST, MEDICAMENT_AJOUTER_SUCCESS,
     MEDICAMENT_FILTER_FAIL, MEDICAMENT_FILTRER_REQUEST, MEDICAMENT_FILTRER_SUCCESS, 
     MEDICAMENT_LIST_FAIL, MEDICAMENT_LIST_REQUEST, MEDICAMENT_LIST_SUCCESS,
      MEDICAMENT_SUPPRIMER_FAIL, MEDICAMENT_SUPPRIMER_REQUEST, MEDICAMENT_SUPPRIMER_SUCCESS
     } from "../constants/MedicammentConstant";
export const AjouterMedicament=(qte,familleId,dataa)=>async (dispatch)=>{
    try {
        dispatch({
            type:MEDICAMENT_AJOUTER_REQUEST
        })
      

        const {data}=await axios.post('Medicament/?qte='+ qte +'&familleId=' + familleId, dataa);
        dispatch({
            type:MEDICAMENT_AJOUTER_SUCCESS,
            payload:data
        })
    } catch (errors) {
        const message="Le famille deja enregistrer"
        dispatch({
            type:MEDICAMENT_AJOUTER_FAIL,
            payload:message
            
        })
        
    }
}

//list famille
export const listMedicament=(nom)=>async (dispatch)=>{
    try {
        dispatch({
            type:MEDICAMENT_LIST_REQUEST
        })

        const {data}=await axios.get('Medicament/All');
        const filter=data.filter(res=>{
            if (nom) {
                return res.nom.toLowerCase().match(nom.toLowerCase());
            }else{
                return data;
            }
            
        })
        dispatch({
            type:MEDICAMENT_LIST_SUCCESS,
            payload:filter
        })
    } catch (errors) {
        dispatch({
            type:MEDICAMENT_LIST_FAIL,
            payload:
            errors.response && errors.response.data.message 
            ? errors.response.data.message
            : errors.response,
        })
        
    }
}

//suppresion fournisseurs
export const supprimerMedicament=(id)=>async (dispatch)=>{
    try {
        dispatch({
            type:MEDICAMENT_SUPPRIMER_REQUEST
        })

    await axios.delete(`Medicament/${id}`);
        dispatch({
            type:MEDICAMENT_SUPPRIMER_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type:MEDICAMENT_SUPPRIMER_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.response,
        })
        
    }
}

//list famille
export const filtrerMedicament=(nom)=>async (dispatch)=>{
    try {
        dispatch({
            type:MEDICAMENT_FILTRER_REQUEST
        })

        const {data}=await axios.get('Medicament/All');
        const filter=data.filter(res=>{
            if (nom) {
                return res.nom==nom;
            }else{
                return data;
            }
            
        })
        dispatch({
            type:MEDICAMENT_FILTRER_SUCCESS,
            payload:filter
        })
    } catch (errors) {
        dispatch({
            type:MEDICAMENT_FILTER_FAIL,
            payload:
            errors.response && errors.response.data.message 
            ? errors.response.data.message
            : errors.response,
        })
        
    }
}