import { createStore ,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { familleAjouterReducer, familleListReducer, familleModifierReducer, familleSupprimerReducer } from "./FamilleReducer";
import { fournisseurAjouterReducer, fournisseurListReducer, fournisseurSupprimerReducer } from "./FournisseurReducer";
import { medicamentAjouterReducer, medicamentFilterReducer, medicamentListReducer, medicamentModifierReducer, medicamentSupprimerReducer } from "./MediamentReducer";
import { stockListReducer, stockModifierReducer, stokFilterReducer } from "./StockReducer";
import { achatAjouterReducer, achatListReducer } from "./AchatReducer";
import { commandeAjouterReducer, commandeListReducer } from "./CommandeReducer";
import { employerAjouterReducer, employerListReducer } from "./EmployerReducer";
import { venteAjouterReducer, venteListReducer } from "./VenteReducer";
import { detailVenteListReducer, venteMedicamentAjouterReducer } from "./VentMedicamentReducer";
import { statMoisListReducer } from "./StatistiqueReducer";

const reducer= combineReducers({ 
    famillelist:familleListReducer,
    familleSupprimer:familleSupprimerReducer,
    familleAjouter:familleAjouterReducer,
    familleModifier:familleModifierReducer,
    //fournisseur
    founisseurList:fournisseurListReducer,
    founisseurAjouter:fournisseurAjouterReducer,
    founisseurSupprimer:fournisseurSupprimerReducer,
    //medicament
    medicamentAjouter:medicamentAjouterReducer,
    medicamentlist:medicamentListReducer,
    medicamentSupprimer: medicamentSupprimerReducer ,
    medicamentFilter:medicamentFilterReducer,
    medicamentEditer:medicamentModifierReducer,
    //stock
    stockList:stockListReducer ,
    stocksFilterList:stokFilterReducer,
    stockEditer:stockModifierReducer,
    //achat
    ajouteAchat:achatAjouterReducer,
    achatList:achatListReducer,
    ajouteCommande:commandeAjouterReducer,
    commandeList:commandeListReducer,
    //Empoyer
    ajouteEployer:employerAjouterReducer,
    emploerlist:employerListReducer,
    //vente
    venteAjouter:venteAjouterReducer,
    venteMedicamentAjouter:venteMedicamentAjouterReducer,
    venteList:venteListReducer,
    detailVenteList:detailVenteListReducer,

    //statistique
    statMoisList:statMoisListReducer
   
    

});

const initialeState={};

const middleware=[thunk];

const store=createStore(
    reducer,
    initialeState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;