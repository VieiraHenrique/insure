const toggle = document.querySelector('.toggle');
const menu = document.getElementById('menu');
const body = document.querySelector('body');
let state = 0;

toggle.addEventListener('click', () => {
	menu.classList.toggle('show');
	toggle.classList.toggle('close');
	body.classList.toggle('noscroll');
});
