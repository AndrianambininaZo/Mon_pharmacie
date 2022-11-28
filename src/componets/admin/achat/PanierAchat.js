import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const PanierAchat = ({ carts, valideAchat }) => {

  const montTotal = carts.reduce((prev, current) => prev + current.montant, 0);
  const qte = carts.reduce((prev, current) => parseInt(prev) + parseInt(current.qte), 0);
  const envoyerCart = () => {
    valideAchat(montTotal, qte);
  }
  const handlerEditer=(res)=>{
    console.log(res);
  }
  return (
    <div className='panierAchat'>
      <div className='topPanier'>
        <span>Total cart achat ({carts.length})</span>
      </div>
      <div className='containerPanier'>
        <ul>
          {
            carts.map((res, index) =>
              <li key={index}>
                <p className='name'>Nom:<span>{res.nom}</span></p>
                <p className='qte'>Qte:<span>{res.qte}</span></p>
                <p className='montant'>Montant:<span>{res.montant}</span></p>
                <p>
                  <button className='btn' style={{ color: "blue" }} onClick={()=>handlerEditer(res)}><EditIcon /></button>
                  <button className='btn' style={{ color: "red" }}><DeleteIcon /></button>
                </p>
              </li>
            )

          }
        </ul>
        <div className='montantTotalPanier'>
          {
            carts.length > 0 ? <p>Total: {montTotal}</p> : ""
          }
        </div>
        <div className='butonPanier'>
          {
            carts.length > 0 ? <button className='btnValider' onClick={() => envoyerCart()}>Valider</button> : ""
          }


        </div>
      </div>
    </div>
  );
};

export default PanierAchat;