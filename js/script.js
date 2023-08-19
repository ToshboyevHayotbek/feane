window.addEventListener('DOMContentLoaded', () =>{

  const btn = document.querySelector(".fa-bars"),
  nav = document.querySelector(".nav"),
  navItem = document.querySelectorAll(".nav a");
  console.log(navItem);

  btn.addEventListener('click', () =>{
    if(nav.classList.contains('show')){
      nav.classList.remove('show');
      nav.classList.add('hide');
    }
    else{
      nav.classList.add('show');
      nav.classList.remove('hide');
    }
  })


  nav.addEventListener('click', (Event) =>{
    Event.target;
    navItem.forEach((item) =>{
      if(Event.target == item){
        setTimeout(() =>{
          nav.classList.add('hide');
          nav.classList.remove('show');
        }, 500)
      }
    })
  });


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        autoplay:{
            delay: 3000,
            disableOnInteraction: false,
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });


      const titleContent = document.querySelector('.title__content'),
            blogItem = document.querySelectorAll('.blog__item'),
            blogContainer = document.querySelector('.blog__container');

            function hideBlogContainer (){
              blogContainer.forEach(item =>{
                item.classList.add('hide');
                item.classList.remove('show', 'grid');
              });
              blogItem.forEach(item =>{
                item.classList.remove('active')
              });
            }

            function showBlogContainer(i = 0){
              blogContainer[i].classList.add('show', 'grid');
              blogContainer[i].classList.remove('hide');
            }
            hideBlogContainer();
            showBlogContainer();

            titleContent.addEventListener('click', (e) =>{
              const target = e.target;
              if(target && e.target.classList.contains('blog__item')){
                blogItem.forEach((item, idx) =>{
                  if(item == target){
                    hideBlogContainer();
                    showBlogContainer(idx);
                  }
                })
              }
            });



});