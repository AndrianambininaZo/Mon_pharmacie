import axios from "axios"
import { MEDICAMENT_AJOUTER_SUCCESS, MEDICAMENT_LIST_FAIL, MEDICAMENT_LIST_REQUEST, MEDICAMENT_LIST_SUCCESS } from "../constants/MedicammentConstant"

export const listMedicament=()=>async (dispatch)=>{
    try {
        dispatch({
            type:MEDICAMENT_LIST_REQUEST
        })

        const {data}=await axios.get('https://localhost:7036/api/Medicament');
        dispatch({
            type:MEDICAMENT_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:MEDICAMENT_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message
            : error.response,
        })
        
    }
}
export const ajoutermedicament=(qte,selectfamille, data)=>async(dispatch)=>{
    const medicament= await axios.post('https://localhost:7036/api/Medicament?qte='+qte+'&familleId='+selectfamille, data);
    dispatch({        
        type:MEDICAMENT_AJOUTER_SUCCESS,
    })
}
