import { FOURNISSEUR_LIST_FAIL,FOURNISSEUR_LIST_SUCCESS,FOURNISSEUR_LIST_REQUEST } from "../constants/FournisseurContant";

export const listFournisseurReducer=(state={fournisseur:[]},actios)=>{
    switch (actios.type) {
        case FOURNISSEUR_LIST_REQUEST:
            {
                return {
                    loading:true,
                    fournisseur:[]                    
                }
            };
        case FOURNISSEUR_LIST_SUCCESS:
                {
                    return {
                        loading:false,
                        fournisseur:actios.payload                    
                    }
                };
                case FOURNISSEUR_LIST_FAIL:
                    {
                        return {
                            loading:true,
                            error:actios.payload                   
                        }
                    };
    
        default:
            break;
    }


}