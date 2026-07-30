import { auth, db } from "./firebase.js";

import { 
    createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const signupBtn = document.getElementById("signupBtn");


signupBtn.addEventListener("click", async () => {

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    if(password !== confirmPassword){
        alert("Passwords do not match!");
        return;
    }


    try {

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );


        const user = userCredential.user;


        await setDoc(doc(db, "users", user.uid), {

            username: username,
            email: email,
            createdAt: new Date()

        });


        alert("Account created!");

        window.location.href = "chat.html";


    } catch(error){

        alert(error.message);

    }

});
