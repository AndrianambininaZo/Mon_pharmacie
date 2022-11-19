import { STOCK_FILTER_FAIL, STOCK_FILTRER_REQUEST, STOCK_FILTRER_SUCCESS, STOCK_LIST_FAIL, STOCK_LIST_REQUEST, STOCK_LIST_SUCCESS } from "../constants/StockConstant";

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


export const stokFilterReducer=(state={stockFilter:[]},action)=>{
    switch(action.type){
        case STOCK_FILTRER_REQUEST:
            return {
                loading:true, 
                stockFilter:[]
            };
        case STOCK_FILTRER_SUCCESS:
            return {
                loading:false,
                stockFilter:action.payload
                };
        case STOCK_FILTER_FAIL:
            return {
                loading:false,
                 error:action.payload
                };
        default:
            return state;        
    }
}