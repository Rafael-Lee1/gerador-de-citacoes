const quotes = [
    "A vida é o que acontece enquanto você está ocupado fazendo outros planos. - John Lennon",
    "O sucesso é a capacidade de passar de um fracasso para outro sem perder o entusiasmo. - Winston Churchill",
    "A única coisa que fica entre você e seu objetivo é a história que você continua contando a si mesmo sobre por que não pode alcançá-lo. - Jordan Belfort",
    "A melhor vingança é um sucesso maciço. - Frank Sinatra",
    "A única maneira de fazer um excelente trabalho é amar o que você faz. - Steve Jobs"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').textContent = quote;
}
