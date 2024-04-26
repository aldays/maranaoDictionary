function translateWord() {
    var word = document.getElementById('word').value.trim();
    var apiUrl = `/translate?from=eng&dest=mrw&phrase=${word}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.tuc && data.tuc.length > 0 && data.tuc[0].phrase) {
                document.getElementById('translation').textContent = data.tuc[0].phrase.text;
            } else {
                document.getElementById('translation').textContent = 'No translation found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('translation').textContent = 'An error occurred during translation.';
        });
}
