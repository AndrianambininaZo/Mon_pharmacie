import axios from "axios";
import { FAMILLE_LIST_REQUEST,FAMILLE_LIST_FAIL,FAMILLE_LIST_SUCCESS } from "../constants/FamilleConstant";


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