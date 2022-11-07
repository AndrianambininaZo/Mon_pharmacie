import { STOCK_LIST_FAIL, STOCK_LIST_REQUEST, STOCK_LIST_SUCCESS } from "../constants/StockConstant";

export const stockListReducer=(state={stocks:[]},actios)=>{
    switch(actios.type){
        case STOCK_LIST_REQUEST:
            return {
                loading:true, 
                stocks:[]
            };
        case STOCK_LIST_SUCCESS:
            return {
                loading:false,
                stocks:actios.payload
                };
        case STOCK_LIST_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}