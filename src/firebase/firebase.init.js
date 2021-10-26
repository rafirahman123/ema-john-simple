import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* steps for authentications
Step: 1(Initial Setup)
1.create firebase project
2.create web app
3.get configaration
4.initialize firebase
5.enable auth method
6.call initial function to firebase.js to intial firebase

Step-2()
1.Create Login component
1.Create register component
1.Create route for login and register

Setp-3
1.Set up sign in method
2.Set up sign out method
3.user state
4.special observer
5.return nessesary mehtod and states from usefirebase

Step-5
1.create auth context
2.create context provider
3.set context provider context value
3.use auth provider
4.create auth hook
*/