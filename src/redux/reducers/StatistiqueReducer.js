import { STASTMOIS_LIST_FAIL, STASTMOIS_LIST_REQUEST, STASTMOIS_LIST_SUCCESS } from "../constants/StatistiqueConstant";

export const statMoisListReducer=(state={mois:[]},actios)=>{
    switch(actios.type){
        case STASTMOIS_LIST_REQUEST:
            return {
                loading:true,
                mois:[]
            };
        case STASTMOIS_LIST_SUCCESS:
            return {
                loading:false,
                mois:actios.payload
                };
        case STASTMOIS_LIST_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}