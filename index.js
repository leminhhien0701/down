// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = { 
  apiKey : "AIzaSyDNHjh6Tss0Vauz-Wh78cMpZwk4Y4mpfz8" , 
  authDomain : "nhom14-b0e01.firebaseapp.com" , 
  databaseURL : "https://nhom14-b0e01-default-rtdb.asia-southeast1.firebaseddatabase.app" , 
  projectId : "nhom14-b0e01" , 
  storageBucket : "nhom14-b0e01.appspot.com" , 
  messagingSenderId : "749911634944" , 
  appId : "1:749911634944:web:ed02d1370a9f43362894e5" 
};

// Initialize Firebase
const app = initializeApp ( firebaseConfig );
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

send.addEventListener('click',(e) =>{ 
Sends();
});
read.addEventListener('click',(e) =>{ 
Getval();
});

function Sends(){
    Number = parseFloat(document.getElementById('Number').value);
const db = getDatabase();
  set(ref(db, 'Number/'), {
    Value : Number
  });
}

function Getval(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Number` + '/Value')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById('val').innerHTML = "Number/Value="+snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
