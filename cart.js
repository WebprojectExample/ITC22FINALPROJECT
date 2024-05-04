const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const closeShopping2 = document.querySelector('.closeShopping2');
const Chart = document.querySelector('.Chart');
const list = document.querySelector('.list');
const list2 = document.querySelector('.list2');
const list3 = document.querySelector('.list3');
const list4 = document.querySelector('.list4');
const listCard = document.querySelector('.listCard');
const listCard2 = document.querySelector('.listCard2');
const body = document.querySelector('body');
const total = document.querySelector('.total');
const quantity = document.querySelector('.quantity');
const total2 = document.querySelector('.total2');
const paypalButton = document.getElementById('paypal-button');
const popup = document.querySelector('.popup');
const cartIcon = document.querySelector('.icon');

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

Chart.addEventListener('click', () => {
  body.classList.add('active2');
  body.classList.remove('active');
});

closeShopping2.addEventListener('click', () => {
  body.classList.remove('active2');
  body.classList.add('active');
});

const products = [
  {
    id: 1,
    name: 'Ottogi Cheese Ramen',
    image: '1.PNG',
    price: 50
  },
  {
    id: 2,
    name: 'Namyang Doraemon',
    image: '2.PNG',
    price: 40
  },
  {
    id: 3,
    name: 'Lays Kyushu Flavor Chips',
    image: '3.PNG',
    price: 90
  },
  {
    id: 4,
    name: 'Jin Ramen Mild Noodles',
    image: '4.PNG',
    price: 40
  },
  {
    id: 5,
    name: 'Busan-eomun Fish Cake',
    image: '5.PNG',
    price: 50
  },
  {
    id: 6,
    name: 'Jjapageti Black Bean Pasta',
    image: '6.PNG',
    price: 110
  },
  {
    id: 7,
    name: '(2-in-1) Ruffles Original Chips',
    image: '7.PNG',
    price:90
  },
  {
    id: 8,
    name: 'Cheetos Puffs Party Pack',
    image: '8.PNG',
    price: 120
  },
  {
    id: 9,
    name: 'Chuckie Chocolate Drink 1 Litre',
    image: '9.PNG',
    price: 120
  },
  {
    id: 10,
    name: 'Ferrero Rocher 8s Box',
    image: '10.PNG',
    price: 150
  }
];

const products2 = [
  {
    id: 11,
    name: 'Galaxy Pajamas for Male Teens1',
    image: '11.PNG',
    price: 200
  },
  {
    id: 12,
    name: 'Jung Saet-byeol Checkered Dress',
    image: '12.PNG',
    price: 230
  },
  {
    id: 13,
    name: 'Korean Fashion Long Open Coat',
    image: '13.PNG',
    price: 200
  },
  {
    id: 14,
    name: 'Relaxed Fit Cardigan for Men',
    image: '14.PNG',
    price: 300
  },
  {
    id: 15,
    name: 'Flannel Pants for Men',
    image: '15.PNG',
    price: 150
  },
  {
    id:16,
    name: 'Sports Style Crop Top',
    image: '16.PNG',
    price: 130
  },
  {
    id: 17,
    name: 'Cotton Set (Short & Tshirt)',
    image: '17.PNG',
    price: 240
  },
  {
    id: 18,
    name: 'ZALORA Black Lined Waffle Shirt',
    image: '18.PNG',
    price: 230
  },
  {
    id: 19,
    name: 'Cotton Relaxed Ankle Pants',
    image: '19.PNG',
    price: 120
  },
  {
    id: 20,
    name: 'Beige Loose Cardigan',
    image: '20.PNG',
    price: 140
  }
];

const products3 = [
  {
    id: 21,
    name: 'Dog-E Robot Dog',
    image: '21.PNG',
    price: 400
  },
  {
    id: 22,
    name: 'Elmo Plushie',
    image: '22.PNG',
    price: 100
  },
  {
    id: 23,
    name: 'Spinning Pen',
    image: '23.PNG',
    price: 50
  },
  {
    id: 24,
    name: 'Hovering Ball',
    image: '24.PNG',
    price: 60
  },
  {
    id: 25,
    name: 'Waveboard',
    image: '25.PNG',
    price: 700
  },
  {
    id: 26,
    name: 'UNO Cards',
    image: '26.PNG',
    price: 60
  },
  {
    id: 27,
    name: 'OctoPlush Mega',
    image: '27.PNG',
    price: 200
  },
  {
    id: 28,
    name: 'OctoPlush Mini',
    image: '28.PNG',
    price: 50
  },
  {
    id: 29,
    name: 'Little Live Pets',
    image: '29.PNG',
    price: 150
  },
  {
    id: 30,
    name: 'Lego Mega Blocks',
    image: '30.PNG',
    price: 50
  }
];

const products4 = [
  {
    id: 31,
    name: 'Bleu de Chanel',
    image: '31.PNG',
    price: 4700
  },
  {
    id: 32,
    name: 'Cetaphil',
    image: '32.PNG',
    price: 600
  },
  {
    id: 33,
    name: 'Lux Magical Spell',
    image: '33.PNG',
    price: 220
  },
  {
    id: 34,
    name: 'Nivea Extra Bright',
    image: '34.PNG',
    price: 120
  },
  {
    id: 35,
    name: 'Ralph Lauren',
    image: '35.PNG',
    price: 4400
  },
  {
    id: 36,
    name: 'Sol de Janeiro',
    image: '36.PNG',
    price: 2500
  },
  {
    id: 37,
    name: 'Cleene Cotton',
    image: '37.PNG',
    price: 120
  },
  {
    id: 38,
    name: 'Dior Sauvage',
    image: '38.PNG',
    price: 4000
  },
  {
    id: 39,
    name: 'Dove Soap',
    image: '39.PNG',
    price: 120
  },
  {
    id: 40,
    name: 'Palmolive ',
    image: '40.PNG',
    price: 120
  }
];

let listCards = [];

list.style.display = 'flex';
list.style.overflowY = 'auto';
list.style.maxHeight = '350px';

list2.style.display = 'flex';
list2.style.overflowY = 'auto';
list2.style.maxHeight = '350px';

list3.style.display = 'flex';
list3.style.overflowY = 'auto';
list3.style.maxHeight = '350px';

list4.style.display = 'flex';
list4.style.overflowY = 'auto';
list4.style.maxHeight = '350px';

listCard.style.overflowY = 'auto';
listCard.style.maxHeight = '580px';

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
          <img src="image/${value.image}">
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });

  products2.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
          <img src="image/${value.image}">
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCard2(${key})">Add To Card</button>`;
    list2.appendChild(newDiv);
  });

  products3.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
          <img src="image/${value.image}">
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCard3(${key})">Add To Card</button>`;
    list3.appendChild(newDiv);
  });

  products4.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
          <img src="image/${value.image}">
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCard4(${key})">Add To Card</button>`;
    list4.appendChild(newDiv);
  });
}

initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}

function addToCard2(key) {
  if (listCards[products.length + key] == null) {
    // copy product form list2 to list card
    listCards[products.length + key] = JSON.parse(JSON.stringify(products2[key]));
    listCards[products.length + key].quantity = 1;
  }
  reloadCard();
}

function addToCard3(key) {
  if (listCards[products.length + products2.length + key] == null) {
    // copy product form list3 to list card
    listCards[products.length + products2.length + key] = JSON.parse(JSON.stringify(products3[key]));
    listCards[products.length + products2.length + key].quantity = 1;
  }
  reloadCard();
}

function addToCard4(key) {
  if (listCards[products.length + products2.length + products3.length + key] == null) {
    // copy product form list4 to list card
    listCards[products.length + products2.length + products3.length + key] = JSON.parse(JSON.stringify(products4[key]));
    listCards[products.length + products2.length + products3.length + key].quantity = 1;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
              <div><img src="image/${value.image}"/></div>
              <div>${value.name}</div>
              <div>${value.price.toLocaleString()}</div>
              <div>
                  <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                  <div class="count">${value.quantity}</div>
                  <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
              </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  total2.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

cartIcon.addEventListener('click', () => {
});