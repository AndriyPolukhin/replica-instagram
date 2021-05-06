import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';

ReactDOM.render(
	<FirebaseContext.Provider value={{ firebase, FieldValue }}>
		<App />
	</FirebaseContext.Provider>,

	document.getElementById('root')
);

/**
Client Side render app: react (cra)
   -> database which is Firebase
   -> react-loading-skeleton
   -> tailwind

	Folder structure
 	 src:
		-> components,
		-> constants,
		-> context,
		-> helpers,
		-> hooks,
		-> lib (firebase is going to live in here),
		-> pages,
		-> services (firebase functions in here)
		-> styles (tailwind's folder (app/tailwind))
*/
