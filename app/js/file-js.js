window.onload = function name() {
	var mobileMenu  = document.querySelector('.mobile-menu'),
	    menuUl      = document.querySelector('.menu-ul'),
	    order       = document.querySelector('.order'),
	    product     = document.querySelector('.product');
	console.log(order);
	console.log(product );
	console.log(menuUl );
	

	function openMenu(){
		console.log('click');
		if(menuUl.style.display == 'none'){
			menuUl.style.display = 'block';
		} else{
			menuUl.style.display = 'none';
			console.log('hear');
		}
	};
	function openProduct(){
		if(product.style.display == 'none'){
			product.style.display = 'block';
		} else{
			product.style.display = 'none';
			console.log('product');
		}
	}
	mobileMenu.addEventListener('click',openMenu);
	order.addEventListener('click',openProduct);
}