function handler() {
	var mobileMenu   = document.querySelector('.mobile-menu'),
	    menuUl       = document.querySelector('.menu-ul'),
	    order        = document.querySelector('.block-order'),
	    myorder      = document.querySelectorAll('.block-order'),
	    blockProdact = document.querySelectorAll('.main-order'),
	    container    = document.querySelector('#container-order'),
	    btnInfo      = document.querySelector('#button-total-info'),
	    cross 		 = document.querySelectorAll('.cross');

	
	function openMenu(){
		console.log('click');
		if(menuUl.style.display == 'none'){
			menuUl.style.display = 'block';
		} else{
			menuUl.style.display = 'none';
			console.log('hear');
		}
	};


	function openProductBlock(e){
		var target = e && e.target || window.e.srcElement;
		
		
		if(target.className == 'order' ){
			var p 			= target;
			var block 		= p.parentNode.closest('.order-ul');
			var divProduct	= block.nextElementSibling;
			var cards 		= divProduct.querySelector('.cards');
			var btn 		= divProduct.querySelector('#button-total-info');
					
			divProduct.classList.toggle('del');

			cards.addEventListener('click',delblock);
			btn.addEventListener('click',closeBlock);

			function delblock(e){
				var nextTarget = e && e.target || window.e.srcElement;
				
				if(nextTarget.classList.contains('cross')){
					var cross = nextTarget;
	 				var par   = cross.closest('.product-card');

					par.style.display   ='none';
					var priseString	 	= divProduct.querySelector('.total-price').innerHTML.split(' ');

					var allPriseString  = priseString.join('');

					var priseTotal 		= par.querySelector('.price').innerHTML.split(' ').slice(0,-1);

					var allpriseTotal   = priseTotal.join('');

					
					divProduct.querySelector('.total-price').innerHTML = parseInt(allPriseString) - parseInt(allpriseTotal);
					block.querySelector('.price').innerHTML            = parseInt(allPriseString) -  parseInt(allpriseTotal);
				}
			}
			
			function closeBlock(){
				var blockInfo  = divProduct.querySelector('.total-info'),
					blockOrder = divProduct.querySelector('.decor-order');

					blockInfo.style.display  ='none';
					blockOrder.style.display ='block';
			}

		}	
	}

	mobileMenu.addEventListener('click',openMenu);
	container.addEventListener('click',openProductBlock);
	
}
document.addEventListener('DOMContentLoaded',handler);