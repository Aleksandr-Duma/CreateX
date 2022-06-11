
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





$(function(){

});