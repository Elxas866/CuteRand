let img = document.getElementById('img');
let wrapper = document.getElementById('wrapper');

function roll() {
    console.log('Generating...');
    let i = Math.floor(Math.random() * 9) + 0;
    console.log(i);

    img.style.opacity = 0;

    setTimeout(() => {
        img.setAttribute('src', 'assets/' + i + '.jpeg');
        img.setAttribute('alt', i);

        img.style.opacity = 1;
    }, 500);
}