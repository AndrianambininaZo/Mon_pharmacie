import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Paniervente = ({valideVente,ventes}) => {
    
    const montantTotal=ventes.reduce((prev,curr)=>parseInt(prev) + parseInt(curr.prixVente),0);
    const qteTotal=ventes.reduce((prev,curr)=>parseInt(prev) + parseInt(curr.qtVente),0);
    const handlerValider=()=>{
        valideVente(montantTotal,qteTotal);
    }
    return (
        <div className='panierVente'>
            <div className='panierTop'>
                <span>Total cart ventes ({ventes.length})</span>
            </div>
            <div className='panierContainer'>
                <ul>
                {
                    ventes.map((res,index)=>
                    <li key={index}>
                        <p>{res.nom}</p>
                        <p>{res.qtVente}</p>
                        <p>{res.prixVente}</p>
                        <p>
                            <button className='btn' style={{color:"blue"}}><EditIcon/></button>
                            <button className='btn' style={{color:"red"}}><DeleteIcon/></button>
                        </p>
                    </li>
                    )
                }
                </ul>                
                <div className='totalVente'>
                  {
                    ventes.length < 1 ? "" : <p>Total:<span>{montantTotal}</span></p>
                  }  
                    
                </div>
                <div className='btnValider'>
                {
                    ventes.length < 1 ? "" :<button className='btnValider' onClick={()=>handlerValider()}>Valider</button>
                }
                    
                </div>
            </div>
        </div>
    );
};

export default Paniervente;