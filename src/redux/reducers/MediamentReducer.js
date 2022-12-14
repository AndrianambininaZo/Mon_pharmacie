import { MEDICAMENT_AJOUTER_FAIL, MEDICAMENT_AJOUTER_REQUEST, MEDICAMENT_AJOUTER_RESET, MEDICAMENT_AJOUTER_SUCCESS, MEDICAMENT_FILTER_FAIL, MEDICAMENT_FILTRER_REQUEST, MEDICAMENT_FILTRER_SUCCESS, MEDICAMENT_LIST_FAIL, MEDICAMENT_LIST_REQUEST, MEDICAMENT_LIST_SUCCESS, MEDICAMENT_MODIFIER_FAIL, MEDICAMENT_MODIFIER_REQUEST, MEDICAMENT_MODIFIER_SUCCESS, MEDICAMENT_SUPPRIMER_FAIL, MEDICAMENT_SUPPRIMER_REQUEST, MEDICAMENT_SUPPRIMER_SUCCESS } from "../constants/MedicammentConstant";

//famille Ajouter
export const medicamentAjouterReducer=(state={},actios)=>{
    switch(actios.type){
        case MEDICAMENT_AJOUTER_REQUEST:
            return {
                loading:true, 
            };
        case MEDICAMENT_AJOUTER_SUCCESS:
            return {
                loading:false,
                 success:true,
                 familles:actios.payload
                };
        case MEDICAMENT_AJOUTER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        case MEDICAMENT_AJOUTER_RESET:
            return {};
        default:
            return state;        
    }
}

export const medicamentListReducer=(state={medicaments:[]},action)=>{
    switch(action.type){
        case MEDICAMENT_LIST_REQUEST:
            return {
                loading:true, 
                medicaments:[]
            };
        case MEDICAMENT_LIST_SUCCESS:
            return {
                loading:false,
                medicaments:action.payload
                };
        case MEDICAMENT_LIST_FAIL:
            return {
                loading:false,
                 error:action.payload
                };
        default:
            return state;        
    }
}

export const medicamentSupprimerReducer=(state={},actios)=>{
    switch(actios.type){
        case MEDICAMENT_SUPPRIMER_REQUEST:
            return {
                loading:true, 
            };
        case MEDICAMENT_SUPPRIMER_SUCCESS:
            return {
                loading:false,
                 success:true
                };
        case MEDICAMENT_SUPPRIMER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}


export const medicamentFilterReducer=(state={medicamentsFilter:[]},action)=>{
    switch(action.type){
        case MEDICAMENT_FILTRER_REQUEST:
            return {
                loading:true, 
                medicamentsFilter:[]
            };
        case MEDICAMENT_FILTRER_SUCCESS:
            return {
                loading:false,
                medicamentsFilter:action.payload
                };
        case MEDICAMENT_FILTER_FAIL:
            return {
                loading:false,
                 error:action.payload
                };
        default:
            return state;        
    }
}


//medicament Modifier
export const medicamentModifierReducer=(state={},actios)=>{
    switch(actios.type){
        case MEDICAMENT_MODIFIER_REQUEST:
            return {
                loading:true, 
            };
        case MEDICAMENT_MODIFIER_SUCCESS:
            return {
                loading:false,
                 success:true,
                 medicament:actios.payload
                };
        case MEDICAMENT_MODIFIER_FAIL:
            return {
                loading:false,
                 error:actios.payload
                };
        default:
            return state;        
    }
}