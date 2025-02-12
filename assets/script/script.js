const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', function() {
	// show backToTopButton
	if( window.pageYOffset > 300 ) {
	   if(!backToTopButton.classList.contains('btnEntrance')) {
                  backToTopButton.classList.remove('btnExit');
                  backToTopButton.classList.add('btnEntrance');
	   	          backToTopButton.style.display = 'block';
	   }

	}else {
		 // hide the button
		if( backToTopButton.classList.contains('btnEntrance')) {
              backToTopButton.classList.remove('btnEntrance');
              backToTopButton.classList.add('btnExit');
              setTimeout(function() {
				  backToTopButton.style.display = 'none';  
              }, 250);
		}
	}
})

backToTopButton.addEventListener('click', function() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;
       window.requestAnimationFrame(step) 
      
       function step(timestamp) {
               if(!start) start = timestamp;
               const progress = timestamp - start;
               window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
               if( progress < duration ) window.requestAnimationFrame(step);
       }
});
function easeInOutCubic(t, b, c, d) {
   t /= d / 2;
   if( t < 1 ) return c / 2 * t * t * t + b;
   t -= 2;
   return c / 2 * ( t * t * t + 2) + b;  
};

// hamburger button 
const hamBtn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');
const navLink = document.querySelectorAll('.link-nav');
const body = document.querySelector('body');
hamBtn.addEventListener('click', function() {
       this.classList.toggle('active');
       menu.classList.toggle('active');
       body.classList.toggle('active');
});

for( let i = 0; i < navLink.length; i++ ){
      navLink[i].addEventListener('click', function(e) {
            function clickMenuHamburger(e) {
                  e.preventDefault();
                  const targetId = e.currentTarget.getAttribute('href') === '#' ? 'header' :  e.currentTarget.getAttribute('href');
                   const duration = 1000;
                   const targetPosition = document.querySelector(targetId).offsetTop;
                   const startPosition = window.pageYOffset;
                 const distance = targetPosition - startPosition;
        
                  let start = null;
                  window.requestAnimationFrame(step);

                  function step(timestamp) {
                    if( !start ) start = timestamp;
                    const progress = timestamp - start;
                    window.scrollTo(0, isInOutQuadCubic(progress, startPosition, distance, duration));
                    if( progress < duration) window.requestAnimationFrame(step);
                     
                      function linear(t, b, c, d) {
                          return c * t / d + b; 
                      } 

                      function isInOutQuad(t, b, c, d) {
                          t /= d / 2;
                          if( t < 1 ) return c / 2 * t * t + b;
                          t--;
                          return -c / 2 * (t * (t - 2) - 1) + b; 
                      }
                     
                     function isInOutQuadCubic(t, b, c, d) {
                          t /= d / 2;
                          if( t < 1 ) return c / 2 * t * t * t + b;
                          t -= 2
                          return c / 2 * (t * t * t + 2) + b; 
                      }




                  }
            }
            clickMenuHamburger(e);
            body.classList.remove('active');
            menu.classList.remove('active');
            hamBtn.classList.remove('active');

      });
}
