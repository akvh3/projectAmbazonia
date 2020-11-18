import {auth} from './config.js';

export const authMethods = {
    signup: (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log("inside sign up")
                console.log(res)
            }).catch(err => {
                console.log(err)
                console.log("User not created successfully.")
            })
    },
    signin: (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log("inside sign in")
                console.log(res)
            }).catch(err => {
                console.log(err)
                console.log("User could not log in successfully.")
            })
    },
    signout: () => {
        auth.signOut()
            .then(function() {
                console.log("sign up successful")
            }).catch(function(err) {
                console.log("user could not sign out")
            }) 
    },
}