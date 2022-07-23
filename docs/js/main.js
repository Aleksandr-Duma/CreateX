
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

/*-----------------------timer-promo-----------------------*/

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

		if (daysVal && hoursVal && minutesVal && secondsVal) {
		
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
	}

	timeCount();
	setInterval(timeCount, 1000);

});

/*---------------------------------------------------------*/

const searchButtonHeader = document.querySelector('.button-search-header');
const searchBlockForm = document.querySelector('.search-block');
const orderWrap = document.querySelector('.order-wrap');
const burger = document.querySelector('.burger');
const buttonClose = document.querySelector('.menu-close__button');
const mobileMenu = document.querySelector('.header-main__navigation');
const menuItem = document.querySelectorAll('.header-main__list-item');
const menuLink = document.querySelectorAll('.header-main__list-span');
const subMenu = document.querySelectorAll('.sub-menu');
const overlay = document.querySelector('.overlay');

/*------------------Search-button-header-------------------*/

searchButtonHeader.addEventListener('click', () => {
	orderWrap.classList.add('hide');
	searchButtonHeader.classList.add('hide');
	searchBlockForm.classList.add('active');
});

searchBlockForm.addEventListener('submit', (e) => {
	e.preventDefault();
	orderWrap.classList.remove('hide');
	searchButtonHeader.classList.remove('hide');
	searchBlockForm.classList.remove('active');
});

/*-----------------------Burger-menu-----------------------*/

burger.addEventListener('click', () => {
	mobileMenu.classList.add('show');
	document.body.style.overflow = 'hidden';
});

buttonClose.addEventListener('click', () => {
	mobileMenu.classList.remove('show');
	document.body.style.overflow = '';
});

/*--------------------Hover on submenu---------------------*/

menuItem.forEach(item => {
	if (document.documentElement.offsetWidth > 990) {
		item.addEventListener('mouseover', () => {
			item.querySelector('.sub-menu').classList.add('open');
			overlay.classList.add('show');
		});

		item.addEventListener('mouseout', () => {
			item.querySelector('.sub-menu').classList.remove('open');
			overlay.classList.remove('show');
		});
	}
});

/*------------------For mobile-Change Hover----------------*/

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

let body = document.querySelector('body');

if (isMobile.any()){
	body.classList.add('touch');

	menuLink.forEach(link => {
		link.addEventListener('click', (e) => {
			e.target.nextElementSibling.classList.toggle('open');

			if (e.target.nextElementSibling.classList.contains('open')) {
				e.target.classList.add('open');
			} else {
				e.target.classList.remove('open');
			}
		});
	});

}else{
	body.classList.add('mouse');
};

/*------------------Marquee logo brands--------------------*/
const root = document.documentElement;
const marquieElementsDisplay = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed');
const marqueeContent = document.querySelector('.marquee__content');

if (marqueeContent) {
	root.style.setProperty('--marquee-elements', marqueeContent.children.length);

	for (let i = 0; i < marquieElementsDisplay; i++) {
		marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
	};
}

/*---------------------Number-spinner----------------------*/

const pageNumberSpinner = document.querySelectorAll('.number-spinner');
	
	if (pageNumberSpinner) {
		pageNumberSpinner.forEach(item => {
			numberSpinner(item);
		});
	}
	
function numberSpinner(param) {
	const buttonPlus = param.querySelector('.number-spinner__button-plus');
	const buttonMinus = param.querySelector('.number-spinner__button-minus');
	const inputSpinner = param.querySelector('.number-spinner__input');

	buttonPlus.addEventListener('click', () => {
		let quantity = parseInt(inputSpinner.value) + 6;

		if(quantity > 72) {
			quantity = 72;
		} 
		inputSpinner.value = quantity;

		return false;
	});

	buttonMinus.addEventListener('click', () => {
		let quantity = parseInt(inputSpinner.value) - 6;

		if(quantity < 6) {
			quantity = 6;
		}
		inputSpinner.value = quantity;

		return false;
	});
}

/*---------------------product-filter----------------------*/

const buttonOpenProductFilter = document.querySelectorAll('.products-head__open-filters');
const productFilter = document.querySelectorAll('.product-filter');

	buttonOpenProductFilter.forEach(button => {
		button.addEventListener('click', () => {
			productFilter.forEach(filter => {
				filter.classList.toggle('show');
			});
		});
	});


$(function(){

/*----------------------banner-slider----------------------*/

	$('.banner-slider').slick({
		dots: true,
		autoplay: true
	});
	// Add number 0 in native buttons slick-dots
	const dots = document.querySelectorAll('.slick-dots li button');

	dots.forEach(function(item, i) {
		item.innerHTML = `0${i + 1}`;
	});

/*---------------------arrivals-slider---------------------*/
	
	$('.arrivals__slider').slick({
		dots: true,
		arrows: false,
		autoplay: true,
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

/*---------------------trending-slider---------------------*/

	$('.presentation-slider').slick({
		dots: false,
		arrows: true,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
	    {
	      	breakpoint: 990,
	      	settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      	}
	    },
	    {
		    breakpoint: 690,
		    settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      	}
	    }
	  	]
	});

/*----------------------card-favorite----------------------*/

const favoriteCircle = document.querySelectorAll('.product-card__favorite');
	favoriteCircle.forEach(item => {
		item.addEventListener('click', () => {
			item.classList.toggle('active');
		});
	});


});


