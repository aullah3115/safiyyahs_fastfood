let menuItems = document.querySelectorAll('.menu-item');
let basketCount = {};

for(let i = 0; i < menuItems.length; i++){
  let item = menuItems[i]

  let id = item.dataset.id;
  let button = item.querySelector('button');

  button.addEventListener('click', (event) => {
    console.log(id)
    let amount = basketCount[id];

    if (amount == undefined) {
      basketCount[id] = 1
    }
    else {
      basketCount[id] += 1;
    }

    console.log(basketCount)

  })
}


