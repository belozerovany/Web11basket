window.onload = function name() {
	var mobileMenu  = document.querySelector('.mobile-menu'),
	    menuUl      = document.querySelector('.menu-ul'),
	    order       = document.querySelector('.order'),
	    product     = document.querySelector('.product'),
	    btnInfo     = document.querySelector('#button-total-info');
	console.log(order);
	console.log(product );
	console.log(menuUl );
	console.log('btnInfo',btnInfo);
	

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
	};
	function closeBlock(){
		console.log('ddd');
		var blockInfo  = document.querySelector('.total-info'),
			blockOrder = document.querySelector('.decor-order');
		blockInfo.style.display  ='none';
		blockOrder.style.display ='block';
		console.log('block',blockInfo);
	}
	mobileMenu.addEventListener('click',openMenu);
	order.addEventListener('click',openProduct);
	btnInfo.addEventListener('click',closeBlock);
}