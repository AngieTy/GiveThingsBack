import fire from "../../components/Firebase/Fire";
import "firebase/firestore";
import firebase from "firebase/app";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER = "REGISTERED";
export const USER_ID = "ACHIEVED USER ID";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

const userId = id => {
  return {
    type: USER_ID,
    id
  };
};

const register = user => {
  return {
    type: REGISTER,
    user
  };
};

const receiveLogin = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};
const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

//pobranie id użytkownika nadany przez FireStore
export const keepUserId = id => dispatch => {
  dispatch(userId(id));
};

export const registerUser = (email, password) => dispatch => {
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(register(user));
    })
    .catch(error => {
      console.log(error);
      const db = firebase.firestore();
      db.collection("users")
        .where("email", "==", "")
        .get()
        .then(response => {
          response.forEach(resp => {
            resp.ref.delete();
          });
        });
    });
};

export const loginUser = (email, password) => dispatch => {
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      console.log(error);
      dispatch(loginError());
    });
};

export const logoutUser = () => dispatch => {
  fire
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(error => {
      console.log(error);
    });
};

export const verifyAuth = () => dispatch => {
  fire.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
  });
};

export * from "./auth";
