window.addEventListener('DOMContentLoaded', () =>{

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
              blogItem[i].classList.add('blogItemActive');
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