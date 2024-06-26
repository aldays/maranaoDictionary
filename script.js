function translateWord() {
    var sourceLang = document.getElementById('sourceLanguage').value;
    var targetLang = document.getElementById('targetLanguage').value;
    var word = document.getElementById('searchWord').value.trim();
    var backendUrl = 'https://maranao-dictionary.netlify.app'; // Update with your Netlify backend domain

    if (!word) {
        document.getElementById('translation').textContent = 'Please enter a word to translate.';
        return;
    }

    fetch(`${backendUrl}/translate?from=${sourceLang}&dest=${targetLang}&phrase=${word}`)
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
