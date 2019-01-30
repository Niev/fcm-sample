function onLoad() {
    let config = {
        apiKey: "AAAAawcMLJI:APA91bGRLb3z9ni-GFydKVx1U5B1bpKN151v4jbB98yZBjTB_4tPsZ-K-p14Kj3fdGUeQAxCpAdkOtp_ayKs1Z1N7DfAcVq0ay-s25yeyR-n628nTHhH3h0u_30VriuC00pRTsp6ahrz",
        authDomain: "niev.github.io",
        databaseURL: "https://awesome-push-app.firebaseio.com",
        projectId: "awesome-push-app",
        messagingSenderId: "459679739026"
    };
    firebase.initializeApp(config);

    const messaging = firebase.messaging();

    if (Notification.permission === 'granted')   {
        subscribe()
    }

    document.querySelector("#btn").addEventListener("click", function () {
        subscribe()
    })

    document.querySelector("form").addEventListener("submit", function () { return false })


    document.querySelector("#msg").addEventListener("change", function () {

    })

    function subscribe() {
        messaging.requestPermission()
            .then(function () {
                messaging.getToken().then(storeToken())
            })
    }

}

function storeToken () {
    return new Promise(function (token) {
        window.localStorage.setItem('token', token)
    })
}



document.addEventListener("DOMContentLoaded", onLoad);
