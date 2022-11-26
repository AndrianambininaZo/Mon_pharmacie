import axios from "axios";
import { STOCK_FILTER_FAIL, STOCK_FILTRER_REQUEST, STOCK_FILTRER_SUCCESS, STOCK_LIST_FAIL, STOCK_LIST_REQUEST, STOCK_LIST_SUCCESS, STOCK_MODIFIER_FAIL, STOCK_MODIFIER_REQUEST, STOCK_MODIFIER_SUCCESS } from "../constants/StockConstant";

//list famille
export const listStock=()=>async (dispatch)=>{
    try {
        dispatch({
            type:STOCK_LIST_REQUEST
        })

        const {data}=await axios.get('Stock/All');
        dispatch({
            type:STOCK_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:STOCK_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.response,
        })
        
    }
}
//list filtrer
export const filtrerStock=(nom)=>async (dispatch)=>{
    try {
        dispatch({
            type:STOCK_FILTRER_REQUEST
        })

        const {data}=await axios.get('Stock/All');
        const filter=data.filter(res=>{
            if (nom) {
                return res.nom.toLowerCase().match(nom.toLowerCase());
            }else{
                return data;
            }
            
        })
        dispatch({
            type:STOCK_FILTRER_SUCCESS,
            payload:filter
        })
    } catch (errors) {
        dispatch({
            type:STOCK_FILTER_FAIL,
            payload:
            errors.response && errors.response.data.message 
            ? errors.response.data.message
            : errors.response,
        })
        
    }
}


//Modifier famille

export const ModifierStock=(donne)=>async (dispatch)=>{
    try {
        dispatch({
            type:STOCK_MODIFIER_REQUEST
        })

        const {data}=await axios.put('Stock/'+donne.id,donne);
        dispatch({
            type:STOCK_MODIFIER_SUCCESS,
            payload:data
        })
    } catch (errors) {
        const message="il y a un erreur de champs"
        dispatch({
            type:STOCK_MODIFIER_FAIL,
            payload:errors.errorMessage
            
        })
        
    }
}