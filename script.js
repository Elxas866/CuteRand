let img = document.getElementById('img');

function roll() {
    console.log('Generating...');
    let i = Math.floor(Math.random() * 9) + 0;
    console.log(i);
    img.setAttribute('src', 'assets/' + i + '.jpeg');
    img.setAttribute('alt', i);
}