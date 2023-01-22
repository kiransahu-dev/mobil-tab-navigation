const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item,idx) => {
    item.addEventListener('click',(e)=>{
        hideallcontents()
        hideallitem()
        e.target.parentElement.classList.add('active')
        contents[idx].classList.add('show')
    })
});

function hideallcontents(){
    contents.forEach(content=>content.classList.add('hide'))
    contents.forEach(content=>content.classList.remove('show'))
}

function hideallitem(){
    listItems.forEach(item=>item.classList.remove('active'))
}