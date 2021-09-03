import { navPosition } from './navPosition'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createWrapper } from 'next-redux-wrapper';

const reducers = combineReducers({
	navPosition: navPosition	
})


function store() {
	const store = createStore(reducers, composeWithDevTools());
	return store
}

export const storeWrapper = createWrapper(store, { debug: false });