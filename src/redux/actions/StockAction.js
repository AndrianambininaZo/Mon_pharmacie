import axios from "axios";
import { STOCK_LIST_FAIL, STOCK_LIST_REQUEST, STOCK_LIST_SUCCESS } from "../constants/StockConstant";

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