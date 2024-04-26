function translateWord() {
    var sourceLang = document.getElementById('sourceLanguage').value;
    var targetLang = document.getElementById('targetLanguage').value;
    var word = document.getElementById('searchWord').value.trim();

    if (!word) {
        document.getElementById('result').textContent = 'Please enter a word to translate.';
        return;
    }

    var apiUrl = `https://glosbe.com/gapi/translate?from=${sourceLang}&dest=${targetLang}&format=json&phrase=${word}&pretty=true`;

    fetch(apiUrl)
        .then(response => {
            console.log(response); // Log the response
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the data
            if (data && data.tuc && data.tuc.length > 0 && data.tuc[0].phrase) {
                document.getElementById('result').textContent = data.tuc[0].phrase.text;
            } else {
                document.getElementById('result').textContent = 'No translation found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').textContent = 'An error occurred during translation.';
        });
}
