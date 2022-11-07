import axios from "axios";
import { FOURNISSEUR_AJOUTER_FAIL, FOURNISSEUR_AJOUTER_REQUEST, FOURNISSEUR_AJOUTER_SUCCESS, FOURNISSEUR_LIST_FAIL, FOURNISSEUR_LIST_REQUEST, FOURNISSEUR_LIST_SUCCESS, FOURNISSEUR_SUPPRIMER_FAIL, FOURNISSEUR_SUPPRIMER_REQUEST, FOURNISSEUR_SUPPRIMER_SUCCESS } from "../constants/FournisseurContant";
//list fournisseurs
export const listFournisseurs=()=>async (dispatch)=>{
    try {
        dispatch({
            type:FOURNISSEUR_LIST_REQUEST
        })

        const {data}=await axios.get('Fournisseur/All');
        dispatch({
            type:FOURNISSEUR_LIST_SUCCESS,
            payload:data
        })
    } catch (errors) {
        dispatch({
            type:FOURNISSEUR_LIST_FAIL,
            payload:
            errors.response && errors.response.data.message 
            ? errors.response.data.message
            : errors.response,
        })
        
    }
}

//Ajouter fournisseurs

export const AjouterFournisseurs=(donne)=>async (dispatch)=>{
    try {
        dispatch({
            type:FOURNISSEUR_AJOUTER_REQUEST
        })

        const {data}=await axios.post('Fournisseur',donne);
        dispatch({
            type:FOURNISSEUR_AJOUTER_SUCCESS,
            payload:data
        })
    } catch (errors) {
        const message="Le famille deja enregistrer"
        dispatch({
            type:FOURNISSEUR_AJOUTER_FAIL,
            payload:errors.errorMessage
            
        })
        
    }
}

//suppresion fournisseurs
export const supprimerFournisseur=(id)=>async (dispatch)=>{
    try {
        dispatch({
            type:FOURNISSEUR_SUPPRIMER_REQUEST
        })

    await axios.delete(`Fournisseur/${id}`);
        dispatch({
            type:FOURNISSEUR_SUPPRIMER_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type:FOURNISSEUR_SUPPRIMER_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.response,
        })
        
    }
}