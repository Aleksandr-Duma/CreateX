
/*----------------------custom-select----------------------*/

document.querySelectorAll('.select-wrap').forEach(function(selectWrap){
	const select = selectWrap.querySelector('.select');
	const selectList = selectWrap.querySelector('.select-list');
	const selectListItems = selectWrap.querySelectorAll('.select-list__item');
	const inputHidden = selectWrap.querySelector('.input-hidden');
	// Клик по селекту открыть/закрыть
	select.addEventListener('click', function(){
		selectList.classList.toggle('visible');
		this.classList.add('active');
	});
	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	selectListItems.forEach(function(listItem){
		listItem.addEventListener('click', function(event){
			event.stopPropagation();
			// select.innerText = this.innerText;
			select.innerHTML = this.innerHTML;
			select.focus();
			inputHidden.value = this.dataset.value;
			selectList.classList.remove('visible');
		});
	});
	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function(event){
		if(event.target !== select){
			select.classList.remove('active');
			selectList.classList.remove('visible');
		}
	});
	// По нажатию на Tab или Escape закрыть дропдаун
	document.addEventListener('keydown', function(event){
		if(event.key === 'Tab' || event.key === 'Escape'){
			select.classList.remove('active');
			selectList.classList.remove('visible');
		}
	});
});

/*-----------------------header-sale-----------------------*/

const headerSale = document.querySelector('.header__sale');

setTimeout(function() {
	headerSale.classList.add('show');
}, 3000);

/*----------------------card-favorite----------------------*/

const favoriteCircle = document.querySelectorAll('.product-card__favorite');

	favoriteCircle.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			item.classList.toggle('active');
		})
	});





$(function(){

	$('.banner-slider').slick({
		dots: true,
		autoplay: true
		// prevArrow: '.about-slider__nav-left',
		// nextArrow: '.about-slider__nav-right'
	});
	// Add 0 in buttons slick-dots
	const dots = document.querySelectorAll('.slick-dots li button');

	dots.forEach(function(item, i) {
		item.innerHTML = `0${i + 1}`;
	});

});


