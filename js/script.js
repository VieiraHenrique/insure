const toggle = document.querySelector('.toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
	menu.classList.toggle('show');
	toggle.classList.toggle('close');
});
