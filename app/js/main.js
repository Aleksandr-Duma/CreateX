
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

//........................timer.........................

document.addEventListener('DOMContentLoaded', function() {
	const lastDate = new Date('September 18 2022 00:00:00');

	const daysVal = document.querySelector('.value-day');
	const hoursVal = document.querySelector('.value-hours');
	const minutesVal = document.querySelector('.value-minutes');
	const secondsVal = document.querySelector('.value-seconds');

	const daysText = document.querySelector('.text-day');
	const hoursText = document.querySelector('.text-hours');
	const minutesText = document.querySelector('.text-minutes');
	const secondsText = document.querySelector('.text-seconds');

	// функция склонения числительных
	function declOfNum(number, titles) {  
	    let cases = [2, 0, 1, 1, 1, 2];  
	    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];  
	}

	const timeCount = function() {
		let now = new Date();
		let leftUntil = lastDate - now;
		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

		if (leftUntil < 0) {
			document.querySelector('.timer__content').textContent = 'Акция завершена!';
		}

		daysVal.textContent = days;
		if (days < 10) {
			daysVal.textContent = `0${days}`;
		}

		hoursVal.textContent = hours;
		if (hours < 10) {
			hoursVal.textContent = `0${hours}`;
		}

		minutesVal.textContent = minutes;
		if (minutes < 10) {
			minutesVal.textContent = `0${minutes}`;
		}

		secondsVal.textContent = seconds;
		if (seconds < 10) {
			secondsVal.textContent = `0${seconds}`;
		}
		// функция склонения: по необходимости меняем на русский текст
		daysText.textContent = declOfNum(days, ['Day', 'Days', 'Days']);	
		hoursText.textContent = declOfNum(hours, ['Hour', 'Hours', 'Hours']);
		minutesText.textContent = declOfNum(minutes, ['Min', 'Mins', 'Mins']);
		secondsText.textContent = declOfNum(seconds, ['Sec', 'Sec', 'Sec']);
	}

	timeCount();
	setInterval(timeCount, 1000);

});

/*-----------------------header-sale-----------------------*/

const headerSale = document.querySelector('.header__sale');

setTimeout(function() {
	headerSale.classList.add('show');
}, 3000);



$(function(){

/*----------------------banner-slider----------------------*/

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

/*---------------------arrivals-slider---------------------*/
	
	$('.arrivals__slider').slick({
		dots: true,
		arrows: false,
		// autoplay: true,
		slidesToShow: 6,
		slidesToScroll: 2,
		responsive: [
		{
	      	breakpoint: 1700,
	      	settings: {
	        slidesToShow: 5,
	        slidesToScroll: 2
	      	}
	    },
	    {
	      	breakpoint: 1500,
	      	settings: {
	        slidesToShow: 4,
	        slidesToScroll: 2
	      	}
	    },
	    {
	      	breakpoint: 1200,
	      	settings: {
	        slidesToShow: 3,
	        slidesToScroll: 2
	      	}
	    },
	     {
	      	breakpoint: 900,
	      	settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2 
	      	}
	    },
	    {
		    breakpoint: 639,
		    settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      	}
	    }
	  	]
	});

/*----------------------card-favorite----------------------*/

const favoriteCircle = document.querySelectorAll('.product-card__favorite');
	console.log(favoriteCircle.length);
	favoriteCircle.forEach(item => {
		item.addEventListener('click', () => {
			item.classList.toggle('active');
		});
	});


});


