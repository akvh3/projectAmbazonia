import {auth} from './config.js';

export const authMethods = {
    signup: (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
                console.log("User not created successfully.")
            })
    },
    // signin: (email, password) => {

    // },
    // signout: (email, password) => {

    // },
}