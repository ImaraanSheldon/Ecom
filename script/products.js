//   Date on footer
document.querySelector('[current-year]').textContent = new Date().getUTCFullYear()

let container = document.querySelector('[ourStore]')
let searchProduct = document.querySelector('[searchProduct]')
let sortingByAmount = document.querySelector('[sorting]')
let product = JSON.parse(localStorage.getItem('products'))

//items||Products
let checkoutItems = JSON.parse(localStorage.getItem('checkout'))
?JSON.parse(localStorage.getItem('checkout'))
:[]