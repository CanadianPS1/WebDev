getRandomQuote();
function getRandomQuote(){
    fetch("csvs\\quotes.csv").then(response => response.text()).then(text => {
        const rows = text.trim().split('\n');
        const randomRow = rows[Math.floor(Math.random() * rows.length)];
        const columns = randomRow.split(',');
        const quote = columns[0];
        document.getElementById("quote").textContent = (quote);
    }).catch(error => console.error("Error loading CSV:", error));
}