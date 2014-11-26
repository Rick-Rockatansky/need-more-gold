window.onload = function() {

	var a = document.getElementById('intro'),
		b = document.getElementById('about'),
		c = document.getElementById('start');
		
	var d = document.getElementById('catalogs'),
		e = document.getElementById('actionTypes'),
		f = document.getElementById('actions'),
		g = document.getElementById('reports');
		
	a.onclick = function() {
		a.nextElementSibling.classList.toggle('hide');
		a.children[0].classList.toggle('down');
	};
	b.onclick = function() {
		b.nextElementSibling.classList.toggle('hide');
		b.children[0].classList.toggle('down');
	};
	c.onclick = function() {
		c.nextElementSibling.classList.toggle('hide');
		c.children[0].classList.toggle('down');
	};

	d.onclick = function() {
	d.nextElementSibling.classList.toggle('hide');
	};
	e.onclick = function() {
	e.nextElementSibling.classList.toggle('hide');
	};
	f.onclick = function() {
	f.nextElementSibling.classList.toggle('hide');
	};
	g.onclick = function() {
	g.nextElementSibling.classList.toggle('hide');
	};


	$(window).scroll(function(){
  if($(window).scrollTop() > 1000){
      $("#navigation").fadeIn("slow");
  }
});
$(window).scroll(function(){
  if($(window).scrollTop() < 1000){
      $("#navigation").fadeOut("fast");
  }
});
	

	
};