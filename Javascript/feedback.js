import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwfWu1PURjxShsC1W5txloyOYZWkQj7yc",
  authDomain: "amalthea-de751.firebaseapp.com",
  projectId: "amalthea-de751",
  storageBucket: "amalthea-de751.appspot.com",
  messagingSenderId: "789359583828",
  appId: "1:789359583828:web:989a1d4f47e46fea6783c1",
  measurementId: "G-R5LZEVN998"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db, '/feedback')
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', () => {
  const feedback = document.querySelector('#feedback');
  push(dbRef, {
    feedback: feedback.value
  })
  console.log('Sent')
  feedback.value = '';
})