let area = document.getElementById('code');
let div = document.getElementById('result');

div.innerHTML = area.value;
area.addEventListener('input', () => {
    div.innerHTML = area.value;
}, false);
