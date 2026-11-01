
let quotes = [
    "Believe in yourself!",
    "Never stop learning.",
    "Dream big and work hard.",
    "Consistency is the key to success.",
    "Every day is a new opportunity.",
    "Small steps lead to big results.",
    "Don't give up on your dreams."
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText =
        quotes[randomIndex];
}






                               





















                                              