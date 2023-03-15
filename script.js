const input = document.getElementById('input')
const button = document.getElementById('btn')
const list = document.querySelector('.list-items')

let id = 0
button.addEventListener('click',verifiction)
function verifiction(){
    input.value?addItens():error()
}
function addItens(){
    const item=document.createElement('div')
    item.innerText=input.value
    item.id='item1.'+id
    item.classList='items-list'
    const btnremove=document.createElement('button')
    btnremove.innerText='X'
    btnremove.id = 'item1.' + id
    btnremove.classList='btn-remove'
    btnremove.addEventListener('click',()=>section.remove())
    const section=document.createElement('section')
    section.id = 'item1.' + id
    section.classList='itens'
    section.append(item,btnremove)
    list.appendChild(section)
    input.value='' 
id++
}
function error(){
    input.classList.add('error')
    input.addEventListener('keydown',()=>input.classList.remove('error'))
}

