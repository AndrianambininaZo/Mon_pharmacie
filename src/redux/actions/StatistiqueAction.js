//list famille

import axios from "axios";
import { STASTMOIS_LIST_FAIL, STASTMOIS_LIST_REQUEST, STASTMOIS_LIST_SUCCESS } from "../constants/StatistiqueConstant";

export const listStatMois=(donne)=>async (dispatch)=>{
    try {
        dispatch({
            type:STASTMOIS_LIST_REQUEST
        })
        
        var dat= new Date();
        var anne=dat.getFullYear().toString();
        var annee= donne ? anne: donne

        const {data}=await axios.get('Vente/Statistique/'+annee);
       
        dispatch({
            type:STASTMOIS_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:STASTMOIS_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.response,
        })
        
    }
}