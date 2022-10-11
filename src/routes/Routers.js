import React from 'react';

import { useRoutes} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Famille from '../Famille';
import Home from '../Home';
import Produit from '../Produit';

const Routers = () => {

    const element=useRoutes([
        {path:'admin' ,element:<Dashboard/>,
        children:[
            {path:'famille', element:<Famille/>},
            {path:'produit', element:<Produit/>},
        ]
    }
        ])
    return element;
};

export default Routers;