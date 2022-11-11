import { createStore ,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { familleAjouterReducer, familleListReducer, familleModifierReducer, familleSupprimerReducer } from "./FamilleReducer";
import { fournisseurAjouterReducer, fournisseurListReducer, fournisseurSupprimerReducer } from "./FournisseurReducer";
import { medicamentAjouterReducer, medicamentListReducer, medicamentSupprimerReducer } from "./MediamentReducer";
import { stockListReducer } from "./StockReducer";
import { panierAjouterReducer, panierListReducer } from "./PanierAchatReducer";
import { achatAjouterReducer, achatListReducer } from "./AchatReducer";
import { commandeAjouterReducer } from "./CommandeReducer";

const reducer= combineReducers({ 
    famillelist:familleListReducer,
    familleSupprimer:familleSupprimerReducer,
    familleAjouter:familleAjouterReducer,
    familleModifier:familleModifierReducer,
    founisseurList:fournisseurListReducer,
    founisseurAjouter:fournisseurAjouterReducer,
    founisseurSupprimer:fournisseurSupprimerReducer,
    medicamentAjouter:medicamentAjouterReducer,
    medicamentlist:medicamentListReducer,
    medicamentSupprimer: medicamentSupprimerReducer ,
    stockList:stockListReducer ,
    panierAjouter:panierAjouterReducer,
    panierList:panierListReducer,
    ajouteAchat:achatAjouterReducer,
    achatList:achatListReducer,
    ajouteCommande:commandeAjouterReducer,

});

const initialeState={};

const middleware=[thunk];

const store=createStore(
    reducer,
    initialeState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;