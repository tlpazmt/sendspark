document.querySelector('.header__burger').addEventListener('click', () => {
	document.querySelector('.header__burger').classList.toggle('active')
	document.querySelector('.header__menu').classList.toggle('active')
	document.querySelector('body').classList.toggle('lock')
})


const itemArrows = document.querySelectorAll('.customer-wrap-body-item__arrow')
const items = document.querySelectorAll('.customer-wrap-body-item')


const hideAll = (index) => itemArrows.forEach((btn, i) => {
	if (i != index)
		items[i].classList.remove('active')
})

itemArrows.forEach((btn, i) => btn.addEventListener('click', () => {
	hideAll(i)
	items[i].classList.toggle('active')
}))