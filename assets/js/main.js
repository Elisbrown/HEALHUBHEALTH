(function () {
"use strict";

	//===== Preloader

window.addEventListener('load', function () {
    fadeout();
});

function fadeout() {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 500); // Delay to ensure smooth transition
}



	/*=====================================
	Sticky
	======================================= */
	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;

		if (window.pageYOffset > sticky) {
			header_navbar.classList.add("sticky");
		} else {
			header_navbar.classList.remove("sticky");
		}



		// show or hide the back-top-top button
		var backToTo = document.querySelector(".scroll-top");
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			backToTo.style.display = "block";
		} else {
			backToTo.style.display = "none";
		}
	};

	// Get the navbar

	//======= tiny slider for slider-active
	tns({
		container: '.slider-active',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		mouseDrag: true,
		gutter: 0,
		nav: true,
		controls: false,
		autoplayButtonOutput: false,
	});



	//===== close navbar-collapse when a  clicked
	let navbarToggler = document.querySelector(".navbar-toggler");
	var navbarCollapse = document.querySelector(".navbar-collapse");

	document.querySelectorAll(".page-scroll").forEach(e =>
		e.addEventListener("click", () => {
			navbarToggler.classList.remove("active");
			navbarCollapse.classList.remove('show')
		})
	);
	navbarToggler.addEventListener('click', function () {
		navbarToggler.classList.toggle("active");
	})




	//======== WOW active
	new WOW().init();


// Dropdown click and hover effects
	document.addEventListener('DOMContentLoaded', function() {
		const dropdown = document.querySelector('.nav-item.dropdown');
	  
		dropdown.addEventListener('mouseenter', function() {
		  const menu = dropdown.querySelector('.dropdown-menu');
		  menu.classList.add('show');
		});
	  
		dropdown.addEventListener('mouseleave', function() {
		  const menu = dropdown.querySelector('.dropdown-menu');
		  menu.classList.remove('show');
		});
	  
		// Toggle on click (in case of touch screens or PCs)
		dropdown.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
		  event.preventDefault(); // Prevent default anchor behavior
		  const menu = dropdown.querySelector('.dropdown-menu');
		  menu.classList.toggle('show');
		});
	  });
	  

})();	