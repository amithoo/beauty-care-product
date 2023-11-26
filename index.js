const modal=document.querySelector('.model');
const btn=document.querySelector('.cta')
const cancel=document.querySelector('.cancel')

const nam=document.getElementById('name')

const list=document.querySelector('.nameli')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
  modal.style.display='flex'
  btn.style.display='none'

})

cancel.addEventListener('click',()=>{
    modal.style.display='none'
})

const notify=()=>{
    if(nam.value){
        alert(`Thankyou ${nam.value} for subscribing us!!`)
        modal.style.display='none'
        list.innerHTML=nam.value
        btn.style.display='none'
    }
    else{
        alert("Please enter Name and Email")
    }
 
}

// swiper js code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });