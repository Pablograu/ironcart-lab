fetch('https://superheroapi.com/api/10221315464094563/1')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log('oopsiiii', err))

var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var createBtn =  document.querySelector('#create')

function updateSubtot($product) {
  var pu = $product.querySelector('.pu span').innerHTML
  var qty = $product.querySelector('.qty input').value
  var subTotal = $product.querySelector('.subtot span')
  var result = pu*qty;
  subTotal.textContent = result
  return result
}

function calcAll() {
  const products = document.querySelectorAll('.product')
  const allProducts = [...products]
  var total = document.querySelector('h2 span')
  var sum = 0
  allProducts.forEach((el) => {    
    sum += updateSubtot(el)
  })
  total.textContent = sum
}

function setDeleteEventListener(){
  var $btnDelete = document.querySelectorAll('.btn-delete') 
  console.log('setting event listenrs again...');
  let deleteButtonsArr = [...$btnDelete]
  deleteButtonsArr.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.currentTarget.parentNode.parentNode.remove()
      calcAll()
    })
  })  
}
function createRow(){
  const name = document.querySelector('.new .name').value
  const price = document.querySelector('.new .price').value
  let table = document.querySelector("tbody")
  let newRow = document.querySelector("tbody tr").cloneNode(true)
  newRow.querySelector(".name span").innerHTML = name;
  newRow.querySelector(".pu span").innerHTML = price;
  table.appendChild(newRow)
  setDeleteEventListener()
}

// function createRow(){
//   const name = document.querySelector('.new .name').value
//   const price = document.querySelector('.new .price').value
//   let table = document.querySelector("tbody");
//   console.log('table',table);
//   let newRow = document.createElement('tr')
//   newRow.innerHTML = `<tr class="product">
//   <td class="name">
//     <span>${name}</span>
//   </td>
//   <td class="pu">$<span>${price}</span></td>

//   <td class="qty">
//     <label>
//       <input type="number" value="0" min="0" />
//     </label>
//   </td>
//   <td class="subtot">$<span>0</span></td>
//   <td class="rm">
//     <button class="btn btn-delete">Delete</button>
//   </td>
// </tr>`
//   table.appendChild(newRow)
// }

setDeleteEventListener()
$calc.onclick = calcAll;
createBtn.onclick = createRow

