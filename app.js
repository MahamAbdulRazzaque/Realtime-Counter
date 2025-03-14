  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBj4PA_YqCNRfuKBBswry3Jd6l5ZvoDvY4",
    authDomain: "sign-up-login-form-6d6ef.firebaseapp.com",
    databaseURL: "https://sign-up-login-form-6d6ef-default-rtdb.firebaseio.com",
    projectId: "sign-up-login-form-6d6ef",
    storageBucket: "sign-up-login-form-6d6ef.firebasestorage.app",
    messagingSenderId: "900601216169",
    appId: "1:900601216169:web:f03c16fbfa4cdff59d3db8",
    measurementId: "G-9Y4V1GSXHX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);
  const counterRef = ref(db , 'counter');

  function updateCounter(value) {
    set(counterRef , value);
  }

  document.getElementById("increment").addEventListener("click" ,  (e) => {
    e.preventDefault();
    let count = Number(document.getElementById("counter").innerText);
    updateCounter(count + 1);
  });

  document.getElementById("decrement").addEventListener("click" , (e) => {
    e.preventDefault();
    let count = Number(document.getElementById("counter").innerText);
    updateCounter(count - 1);
  });

  onValue(counterRef , function (snapshot) {
    document.getElementById("counter").innerText = snapshot.val();
  });


