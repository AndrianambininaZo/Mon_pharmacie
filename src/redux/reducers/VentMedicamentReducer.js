import { VENTEMEDICAMENT_AJOUTER_FAIL, VENTEMEDICAMENT_AJOUTER_REQUEST, VENTEMEDICAMENT_AJOUTER_SUCCESS } from "../constants/VentMedicamentConstant";

export const venteMedicamentAjouterReducer=(state={},actios)=>{
    switch(actios.type){
        case VENTEMEDICAMENT_AJOUTER_REQUEST:
            return {
                loading:true, 
            };
        case VENTEMEDICAMENT_AJOUTER_SUCCESS:
            return {
                loading:false,
                 success:true,
                 venteMedicaments:actios.payload
                };
        case VENTEMEDICAMENT_AJOUTER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}