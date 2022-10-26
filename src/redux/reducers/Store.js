import { createStore ,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { medicamentListReducer } from "./MedicamentReducer";
import { AchatList } from "./AchatReducer";
import { familleAjouterReducer, familleListReducer, familleSupprimerReducer } from "./FamilleReducer";
import { fournisseurListReducer } from "./FournisseurReducer";

const reducer= combineReducers({    
    achatslist:AchatList,
    medicamentList:medicamentListReducer,
    famillelist:familleListReducer,
    fournisseurlist:fournisseurListReducer,
    familleSupprimer:familleSupprimerReducer,
    familleAjouter:familleAjouterReducer

});

const initialeState={};

const middleware=[thunk];

const store=createStore(
    reducer,
    initialeState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;