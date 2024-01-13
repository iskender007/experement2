// function message(a, b) {
//   const result = a + b;
//   console.log(result);
// }
// message(986, 78);
// message(98, 78);
// message(9, 78);
// message(98, 8);
// message(9, 8);
// message(8, 78);

// const myName = "iskender";
// const myAge = 15;
// const myStatus = "children";
// console.log(myName, myAge, myStatus);

// const nameg = prompt("Enter your name");
//  const name = nameg.toLowerCase();
// console.log(`Добро пожаловать ${name}`);

// !!!СТРОКИ

// const firstName = "Iskender";
// const lastName = "Kaparbekov";
// const fullName = firstName + " " + lastName;

// function lengthtStings(stings) {
//   const length = stings.length;
//   console.log(length);
// }
// lengthtStings("iso8601");
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   const slova = message.split(" ");
//   const slava = slova.length;
//   const totalPrice = slava * pricePerWord;
//   console.log(totalPrice);
//   return totalPrice;
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);
// function slugify(title) {
//   const string = title.split(" ").join("-").toLowerCase();
//   console.log(string);

//   return string;
// }

// slugify("Arrays for begginers");
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let index = 0; index < order.length; index++) {
//     const element = (total += order[index]);
//     console.log(total);
//   }

//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// function findLongestWord(string) {
//   let words = string.split();
//   let maxLength = 0;
//   // Change code below this line
//   for (let i = 0; i < string.length; i++) {
//     const element = string[i];
//     console.log(element);
//   }

//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// function filterArray(numbers, value) {
//   const isa = [];
//   for (let i = 0; i <= numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       isa.push(numbers[i]);
//     }
//   }
//   console.log(isa);
//   return isa;

//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     console.log(number);
//   }
// }

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUserNames = (users) => {
//   return users.map((item) => {
//     return item.name;
//   });
// };

// console.log(getUserNames(users));

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((item) => {
//     return item.name;
//   });
// };

// console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
// const cars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// const getCarsWithType = (cars, type) => {
//   return cars.filter(function name(itam) {
//     return itam.type === type;
//   });
// };

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

// const getCarByModel = (cars, model) => {
//   return cars.filter(function name(itam) {
//     return itam.model === model;
//   });
// };

// const sortByAscendingAmount = (cars) => {
//   return cars.sort((a, b) => a.amount - b.amount);
// };

// console.table(sortByAscendingAmount(cars));

// const sortByDescendingPrice = (cars) => {
//   return cars.sort((a, b) => b.price - a.price);
// };

// console.table(sortByDescendingPrice(cars));
// const sortByModel = (cars, order) => {
//   return cars.sort((a, b) => {
//     let nameA = a.model.toLowerCase(),
//       nameB = b.model.toLowerCase();

//     if (order === "asc" && nameA < nameB) {
//       return -1;
//     }
//     if (order === "desc" && nameA > nameB) {
//       return -1;
//     }
//   });
// };

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

// const getTotalAmount = (cars) => {
//   return cars.reduce((acc, car) => acc + car.amount, 0);
// };

// console.log(getTotalAmount(cars));
// function filterArray(numbers, value) {
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element > value) {
//       newArray.push(element);
//       console.log(element);
//     }

//     return newArray;
//   }
// }
// filterArray([1, 2, 3, 4, 5], 3);
// function includes(array, value) {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element === value) {
//       return true;
//     }
//   }
//   return false;
// }
// includes([1, 2, 3, 4, 5], 3);
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// for (const key in apartment) {
//   const keys = key;
//   const values = apartment[key];
//   console.log(keys);
// }

// Change code below this line
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   for (const key in salaries) {
//     console.log(key);
//     if (salaries.hasOwnProperty(key)) {
//       totalSalary += 1;
//     }
//   }

//   // Change code above this line
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   console.log(productName);
//   const foundProduct = products.filter(
//     (product) => product.name === productName
//   );
//   return foundProduct ? foundProduct.price : null;
// }
// getProductPrice("Radar");
// const img = document.querySelector("img");
// img.src =
//   "data:image/jpeg;base64,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";
// const div = document.querySelector("div");
// const h2 = document.querySelector("h2");
// const text = document.querySelector(".text");
// div.style = "background-color : red";
// h2.style = "font-size : 30px";
// text.style = "font-size : 30px";

// text.textContent = "Satoru";
// const histori = document.querySelector(".link1");
// const sila = document.querySelector(".link2");
// const dizain = document.querySelector(".link3");

// histori.textContent = "История";
// sila.textContent = "Сила";
// dizain.textContent = "Дизайн";

// const categories = document.querySelector("#categories");
// const result = categories.children;
// for (const key of result) {
//   const child = key.lastElementChild;

//   key.insertAdjacentHTML("beforeend", child);
//   child;
// }
// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement("img");
image.setAttribute("src", "https://placeimg.com/640/480/nature");
image.setAttribute("alt", "nature");
categories.appendChild(image);
console.log(image);

// const userName = prompt("Please enter your name");

// categories.insertAdjacentHTML("beforebegin", ` <p>Hello ${userName}</p>`);
// const list = document.querySelector("#categories");
// const elements = list.children;
// console.log(elements.length);
// for (const element of elements) {
//   element.insertAdjacentHTML(
//     "beforeend",
//     ` кольичество элементов ${element.lastElementChild.children.length}`
//   );
// }
// const categories = document.querySelector("#categories");

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];
// for (const element of ingredients) {
//   const li = document.createElement("li");
//   li.textContent = element;
//   categories.appendChild(li);
// }
// for (const keys of images) {
//   for (const key in keys) {
//     {
//       const element = keys[key];
//       const li = document.createElement("li");

//       const image = document.createElement("img");
//       image.setAttribute("src", element);
//       image.setAttribute("alt", "nature");

//       li.appendChild(image);
//       document.body.appendChild(li);
//     }
//   }
// }
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];
// for (const item of images) {
//   const li = document.createElement("li");

//   const image = document.createElement("img");
//   image.setAttribute("src", item.url);
//   image.setAttribute("alt", item.alt);

//   li.appendChild(image);
//   document.body.appendChild(li);
// }
// const btm = document.querySelector(".btn");
// BigInt.addEventListener("click", () => {
//   document.body.style.backgroundColor = "#";
// });
const velue = document.querySelector(".velue");
const pulus = document.querySelector(".pulus");
const minus = document.querySelector(".minus");
const increment = () => {
  const vel = velue.innerHTML;
  velue.innerHTML = Number(vel) + 1;
};
const dicrement = () => {
  const vel = velue.innerHTML;
  velue.innerHTML = Number(vel) - 1;
};
pulus.addEventListener("click", dicrement);
minus.addEventListener("click", increment);

const chopShop = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    this.stones.name = stoneName;
    this.stones.price * this.quantity;
  },
};

log(chopShop.calcTotalPrice("Emerald"));
