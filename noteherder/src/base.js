import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = firebase.initializeApp({
    //data from google firebase
    apiKey: "AIzaSyA-NiYKYE3I6N9Dmpi-xWJp9NivwRTrd9E",
    authDomain: "noteherder2.firebaseapp.com",
    databaseURL: "https://noteherder2.firebaseio.com",
    projectId: "noteherder2",
    storageBucket: "noteherder2.appspot.com",
    messagingSenderId: "999121509135"
  })

  const db = database(app)

  export const auth = app.auth()
  export const githubProvider = new firebase.auth.GithubAuthProvider()

  export default Rebase.createClass(db)