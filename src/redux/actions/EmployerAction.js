//Ajouter Empolyer
import axios from "axios";
import { EMPLOYER_AJOUTER_FAIL, EMPLOYER_AJOUTER_REQUEST, EMPLOYER_AJOUTER_SUCCESS, EMPLOYER_LIST_FAIL, EMPLOYER_LIST_REQUEST, EMPLOYER_LIST_SUCCESS } from "../constants/EmployerConstant";

export const AjouterEmployer=(donne)=>async (dispatch)=>{
    try {
        dispatch({
            type:EMPLOYER_AJOUTER_REQUEST
        })

        const {data}=await axios.post('api/Employee',donne);
        dispatch({
            type:EMPLOYER_AJOUTER_SUCCESS,
            payload:data
        })
    } catch (error) {
        const message="Le famille deja enregistrer"
        dispatch({
            type:EMPLOYER_AJOUTER_FAIL,
            payload:message
            
        })
        
    }
}

export const listEmployer=()=>async (dispatch)=>{
    try {
        dispatch({
            type:EMPLOYER_LIST_REQUEST
        })

        const {data}=await axios.get('api/Employee');
        dispatch({
            type:EMPLOYER_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:EMPLOYER_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.response,
        })
        
    }
}

