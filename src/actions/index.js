import { auth, provider } from "../firebase";

export function signInAPI() {
    return (dispath) => {
        auth
        .signInWithPopup(provider)
        .then((payload) => {
            console.log(payload);
        })
        .catch((error) => alert(error.message));
    };
}
