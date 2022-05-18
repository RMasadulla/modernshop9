const store = document.querySelector('.productSection').children;
const btns = document.querySelectorAll('.btnC');
const catMenu = document.querySelector('.menuIcon');
const catItem = document.querySelector('.catagorySection')
const searchSec = document.querySelector('.searchform')

for(let i = 0; i< btns.length; i++){
    btns[i].onclick = function(){
        for(let x = 0; x<btns.length; x++){
            btns[x].classList.remove('active');
            catItem.classList.remove('active')
            catMenu.classList.replace('fa-times','fa-bars')
        }
        this.classList.add('active');
        const displayItems = this.getAttribute('data-filter');

        for(let z = 0; z<store.length; z++){
            store[z].style.transform = 'scale(0)'
            setTimeout(()=>{store[z].style.display = 'none'},500);
            if((store[z].getAttribute('data-category') == displayItems) || displayItems == "all"){
                store[z].style.transform = 'scale(1)'
                setTimeout(()=>{store[z].style.display = "grid"},500)
            }
        }
    }
}
console.log(catMenu.classList)
catMenu.addEventListener('click',function(){
    if(catMenu.classList.contains('fa-bars')){
        catMenu.classList.replace('fa-bars','fa-times')
        catItem.classList.add('active')
    }else{
        catMenu.classList.replace('fa-times','fa-bars')
        catItem.classList.remove('active')
    }
})

searchSec.addEventListener('click',(e)=>{
    e.preventDefault()
})





// for(let i = 0; i<btns.length; i++){
//     btns[i].addEventListener('click',(e)=>{
//         e.preventDefault();
//         const filter = e.target.dataset.filter;
//         store.forEach((product)=>{
//             if(filter == "mobile & accssrs"){
//                 product.style.display = "grid"
//             }else{
//                 if(product.classList.contains(filter)){
//                     product.style.display ="grid"
//                 }else{
//                     product.style.display = "none"
//                 }
//             }
//         })
       
//    })
// }

