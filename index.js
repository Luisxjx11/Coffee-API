function atualiza() {
    // Reload the page and bypass the cache
    window.location.reload(true);

    // Change the src of the image with id 'foto'
    document.getElementById('foto').src = 'https://coffee.alexflipnote.dev/random';
}

// clica no botão e chama a função
var button = document.getElementById('cafe');
button.addEventListener('click', atualiza);