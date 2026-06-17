importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCs4s6f3bRhc8lotVWcEKSUAEH_OQFWR1g",
    projectId: "diafon-tetik12",
    messagingSenderId: "534092717765",
    appId: "1:534092717765:web:695a90bde7071e207d1aac"
});

const messaging = firebase.messaging();
