import React from 'react'
import ReactDOM from 'react-dom'
import App from './AppContainer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import mainReducer from './store/reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // todo remove for prod

const store = createStore(
	mainReducer,
	composeEnhancers(
		applyMiddleware(thunk)
	),
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
