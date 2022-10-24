import axios from "axios";

import { FOURNISSEUR_LIST_FAIL,FOURNISSEUR_LIST_REQUEST,FOURNISSEUR_LIST_SUCCESS } from "../constants/FournisseurContant";

export const listFournisseur=()=>async (dispatch)=>{
    try {
        dispatch({
            type:FOURNISSEUR_LIST_REQUEST
        })

        const {data}=await axios.get('Fournisseur/All');
        dispatch({
            type:FOURNISSEUR_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {        
        dispatch({
            type:FOURNISSEUR_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.response,
        })
        
    }
}