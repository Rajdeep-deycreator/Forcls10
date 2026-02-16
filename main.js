// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGuhMm8B612JZlVuNQ7C6cV4YahM7JhKw",
  authDomain: "bestwishes-dad65.firebaseapp.com",
  projectId: "bestwishes-dad65",
  storageBucket: "bestwishes-dad65.firebasestorage.app",
  messagingSenderId: "985234171383",
  appId: "1:985234171383:web:290bcfaaf5bd19dfce3af2",
  measurementId: "G-F6XJKD7JXL"
};
firebase.initializeApp(firebaseConfig);
const analytics=firebase.analytics();
setTimeout(()=>{
  document.body.style.animation= "rise 5s ease-in-out forwards"
},4000)
