import { createStore ,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { medicamentListReducer } from "./MedicamentReducer";
import { AchatList } from "./AchatReducer";
import { familleListReducer } from "./FamilleReducer";
import { listFournisseurReducer } from "./FournisseurReducer";

const reducer= combineReducers({    
    achatslist:AchatList,
    medicamentList:medicamentListReducer,
    famillelist:familleListReducer,
});

const initialeState={};

const middleware=[thunk];

const store=createStore(
    reducer,
    initialeState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;