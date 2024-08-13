// Example exchange rates (you should replace these with real data)
const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.76, JPY: 110.5, AUD: 1.35 },
    EUR: { USD: 1.18, GBP: 0.89, JPY: 129.0, AUD: 1.59 },
    GBP: { USD: 1.32, EUR: 1.12, JPY: 145.0, AUD: 1.79 },
    JPY: { USD: 0.0090, EUR: 0.0078, GBP: 0.0069, AUD: 0.012 },
    AUD: { USD: 0.74, EUR: 0.63, GBP: 0.56, JPY: 83.0 }
};

document.getElementById('convertButton').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (!amount || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    if (fromCurrency === toCurrency) {
        document.getElementById('result').value = amount.toFixed(2);
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    if (!rate) {
        alert('Conversion rate not available');
        return;
    }

    const convertedAmount = amount * rate;
    document.getElementById('result').value = convertedAmount.toFixed(2);
});


