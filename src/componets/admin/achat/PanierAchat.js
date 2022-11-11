import React from 'react';

const PanierAchat = ({ carts ,valideAchat}) => {

  const montTotal = carts.reduce((prev, current) => prev + current.montant, 0);
  const qte=carts.reduce((prev, current) => prev + current.qte, 0);
  const envoyerCart=()=>{
    valideAchat(montTotal,qte);

  }
  return (
    <div className='panierAchat'>
      <div className='topPanier'>
        <span>Total cart medicament ({carts.length})</span>
      </div>
      <div className='containerPanier'>
        <ul>
          {
            carts.map((res, index) =>
              <li key={index}>
                <p className='name'>{res.nom}</p>
                <p className='qte'>{res.qte}</p>
                <p className='montant'>{res.montant}</p>
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
            carts.length > 0 ? <button className='btnValider' onClick={()=>envoyerCart()}>Valider</button> : ""
          }

          
        </div>
      </div>
    </div>
  );
};

export default PanierAchat;