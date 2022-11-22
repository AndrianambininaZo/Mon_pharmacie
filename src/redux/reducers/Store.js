import { createStore ,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { familleAjouterReducer, familleListReducer, familleModifierReducer, familleSupprimerReducer } from "./FamilleReducer";
import { fournisseurAjouterReducer, fournisseurListReducer, fournisseurSupprimerReducer } from "./FournisseurReducer";
import { medicamentAjouterReducer, medicamentFilterReducer, medicamentListReducer, medicamentSupprimerReducer } from "./MediamentReducer";
import { stockListReducer, stokFilterReducer } from "./StockReducer";
import { achatAjouterReducer, achatListReducer } from "./AchatReducer";
import { commandeAjouterReducer, commandeListReducer } from "./CommandeReducer";
import { employerAjouterReducer, employerListReducer } from "./EmployerReducer";
import { venteAjouterReducer, venteListReducer } from "./VenteReducer";
import { detailVenteListReducer, venteMedicamentAjouterReducer } from "./VentMedicamentReducer";

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
    medicamentFilter:medicamentFilterReducer,
    stockList:stockListReducer ,
    stocksFilterList:stokFilterReducer,
    ajouteAchat:achatAjouterReducer,
    achatList:achatListReducer,
    ajouteCommande:commandeAjouterReducer,
    commandeList:commandeListReducer,
    ajouteEployer:employerAjouterReducer,
    emploerlist:employerListReducer,
    venteAjouter:venteAjouterReducer,
    venteMedicamentAjouter:venteMedicamentAjouterReducer,
    venteList:venteListReducer,
    detailVenteList:detailVenteListReducer

});

const initialeState={};

const middleware=[thunk];

const store=createStore(
    reducer,
    initialeState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;