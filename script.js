let btnNext = document.querySelector('.next')
let btnback = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItensOnclick('next')
btnback.onclick = () => moveItensOnclick('back')


    function moveItensOnclick(type){
       let listItems = document.querySelectorAll('.list .list-item')
       let thumbItems = document.querySelectorAll('.thumb .thumb-item')
 console.log (listItems)
 console.log (thumbItems)

       
       if (type === 'next'){
           list.appendChild(listItems[0])
           thumb.appendChild(thumbItems[0])
           container.classList.add('next')
        }else {
            list.prepend(listItems[listItems.length -1])
            thumb.prepend(thumbItems[listItems.length -1])
            container.classList.add('back')


            //   thumb.prepend(thumbItems[3])//



        }


    }



