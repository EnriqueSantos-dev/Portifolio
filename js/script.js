const target = document.querySelectorAll('[data-anime]');
function animated(){
	let windowTop = window.scrollY ;
	target.forEach((e) => {
		if (windowTop > e.scrollTop) {
			e.classList.add('animate');
		}
		else{
			e.classList.remove('animate');
		}
	});
}
function headerFixed () {
	if (window.scrollY > 1 ){
		document.querySelector('header').style.position = 'Fixed';
		document.querySelector('header').style.backgroundColor = 'rgba(0,0,0,0.3)'
		document.querySelector('header').style.backdropFilter = 'blur(10px)'

	}
	else {
		document.querySelector('header').style.position = 'static';
		document.querySelector('header').style.backgroundColor = 'initial'
		document.querySelector('header').style.backdropFilter = 'none'
	}
}
window.addEventListener('scroll', () => {
	animated();
	headerFixed();
});

document.querySelectorAll('.menu nav li a').forEach(item =>{
	item.addEventListener('click', (e) =>{
		document.querySelector('.menu nav li a.active').classList.remove('active')
		e.target.classList.add('active')
	})
})
