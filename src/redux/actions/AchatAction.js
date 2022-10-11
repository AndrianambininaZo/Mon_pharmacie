import axios from "axios"
import { GET_ACHATS_LIST } from "../constants/AchatConstant"

export const listAchats=()=>async (dispatch)=>{    
        const {data}=await axios.get('https://localhost:7036/api/Familles')
        dispatch({
            type:GET_ACHATS_LIST,
            payload:data
        })
    
}
