document.querySelector('header img').addEventListener('click', () => {
	window.location.reload();
})
function showMenu(){
	const menu = document.querySelector('#menu');
	const check = document.querySelector('#check');
	
	if(check.checked === true){
		menu.style.width = '0px';
	} else{
		menu.style.width = '70%'
	}
}
document.querySelector('label').addEventListener("click", showMenu)
document.querySelector('#menu div label').addEventListener('click', showMenu)

