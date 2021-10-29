import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebaseAuthentication from '../Firebase/firebase.init';

//initialize the firebase configuration for authentication
initializeFirebaseAuthentication();

//Main hook for firebase authentication
const useFirebase = () => {
    //state variable for user, error and data loading progress
    const [ user, setUser ] = useState( {} );
    const [ error, setError ] = useState( '' );
    const [ isLoading, setIsLoading ] = useState( true );

    //get the authentication token
    const auth = getAuth();
    //google auth provider object for google authentication
    const googleProvider = new GoogleAuthProvider();

    //function for google sign-in
    const signInUsingGoogle = () => {
        setIsLoading( true );
        signInWithPopup( auth, googleProvider )
            .then( result => {
                setError( '' );
                setUser( result.user );
            } )
            .catch( error => {
                setError( error.message );
            } )
            .finally( () => {
                setIsLoading( false );
            } );
    }

    //Set the observer on auth object to get the current user status on real-time
    useEffect( () => {
        const unsubscribe = onAuthStateChanged( auth, user => {
            if ( user ) {
                setUser( user );
            }
            else {
                setUser( {} );
            }
            setIsLoading( false );
        } );
        return () => unsubscribe();
    }, [ auth ] );


    //function for logout
    const logout = () => {
        setIsLoading( true );
        signOut( auth ).then( () => {
            setUser( {} );
            setError( 'User Logged Out!' )
        } )
            .catch( ( error ) => {
                setError( error.message );
            } )
            .finally( () => setIsLoading( false ) );
    }

    //return all the necessary variables and function for further use
    return {
        user,
        error,
        signInUsingGoogle,
        logout,
        isLoading
    }
}

export default useFirebase;