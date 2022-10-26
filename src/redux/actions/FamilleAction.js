import axios from "axios";
import { FAMILLE_LIST_REQUEST,FAMILLE_LIST_FAIL,FAMILLE_LIST_SUCCESS, FAMILLE_SUPPRIMER_REQUEST, FAMILLE_SUPPRIMER_SUCCESS, FAMILLE_SUPPRIMER_FAIL, FAMILLE_AJOUTER_RESET, FAMILLE_AJOUTER_SUCCESS, FAMILLE_AJOUTER_FAIL } from "../constants/FamilleConstant";

//list famille
export const listFamille=()=>async (dispatch)=>{
    try {
        dispatch({
            type:FAMILLE_LIST_REQUEST
        })

        const {data}=await axios.get('Familles/All');
        dispatch({
            type:FAMILLE_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:FAMILLE_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.response,
        })
        
    }
}

//suppresion famille
export const supprimerFamille=(id)=>async (dispatch)=>{
    try {
        dispatch({
            type:FAMILLE_SUPPRIMER_REQUEST
        })

    await axios.delete(`Familles/${id}`);
        dispatch({
            type:FAMILLE_SUPPRIMER_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type:FAMILLE_SUPPRIMER_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.response,
        })
        
    }
}
//Ajouter famille

export const AjouterFamille=(donne)=>async (dispatch)=>{
    try {
        dispatch({
            type:FAMILLE_AJOUTER_RESET
        })

        const {data}=await axios.post('Familles',donne);
        dispatch({
            type:FAMILLE_AJOUTER_SUCCESS,
            payload:data
        })
    } catch (error) {
        const message="Le famille deja enregistrer"
        dispatch({
            type:FAMILLE_AJOUTER_FAIL,
            payload:message
            
        })
        
    }
}

//Modifier famille

export const ModifierFamille=(donne)=>async (dispatch)=>{
    try {
        dispatch({
            type:FAMILLE_AJOUTER_RESET
        })

        const {data}=await axios.put('Familles/'+donne.id,donne);
        dispatch({
            type:FAMILLE_AJOUTER_SUCCESS,
            payload:data
        })
    } catch (errors) {
        const message="il y a un erreur de champs"
        dispatch({
            type:FAMILLE_AJOUTER_FAIL,
            payload:errors.errorMessage
            
        })
        
    }
}