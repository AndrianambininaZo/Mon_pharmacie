import { GET_ACHATS_LIST,MEDICAMENT_LIST_REQUEST,MEDICAMENT_LIST_FAIL} from "../constants/AchatConstant";

const initialeState={
    achats:[],
}
export const AchatList=(state=initialeState,actios)=>{
    switch(actios.type){
        case GET_ACHATS_LIST:
            return {
                ...state,               
                 achats:actios.payload
                };
        default:
            return state;        
    }
}