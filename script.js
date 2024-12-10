const products = [
    {
        id: 0,
        name: 'Chocolate Cherry',
        price: 13,
        rating: 4,
        amount: 0,
        category: 'Choklad',
        img: {
            url: 'assets/Chocolate.jpeg',
            width: '1024',
            height: '1024',
            loading: 'lazy',
            alt: 'En munk täckt av choklad och färgglatt strössel med ett rött körsbär på toppen'
        },
    },
    {
        id: 1,
        name: 'Applepie',
        price: 15,
        rating: 5,
        amount: 0,
        category: 'Fyllda munkar',
        img: {
            url: 'assets/Apple.jpeg',
            width: '1024',
            height: '1024',
            loading: 'lazy',
            alt: 'En munk med äppelfyllning'
        },
    },
    {
        id: 2,
        name: 'Blueberry dream',
        price: 13,
        rating: 4,
        amount: 0,
        category: 'Frukt och bär',
        img: {
            url: 'assets/Blueberry.jpeg',
            width: '1024',
            height: '1024',
            loading: 'lazy',
            alt: 'En munk täckt med blå/lila blåbärsfrosting och dekorerad med strössel och färska blåbär'
        },
    },
    {
        id: 3,
        name: 'Cinnamon',
        price: 13,
        rating: 4,
        amount: 0,
        category: 'Klassiker',
        img: {
            url: 'assets/Cinnamon.jpeg',
            width: '1024',
            height: '1024',
            loading: 'lazy',
            alt: 'En klassisk munk smaksatt med kanel och dekorerad med pudrat florsocker'
        },
    },
    {
        id: 4,
        name: 'Lemon Lovers',
        price: 13,
        rating: 4,
        amount: 0,
        category: 'Frukt och bär',
        img: {
            url: 'assets/Lemon.jpeg',
            width: '1024',
            height: '1024',
            loading: 'lazy',
            alt: 'En citronmunk med vit frosting dekorerad med riven samt skivad citron och blått strössel'
        },
    },
    {
        id: 5,
        name: 'Lime Time',
        price: 13,
        rating: 3,
        amount: 0,
        category: 'Frukt och bär',
        img: {
            url: 'assets/Lime.jpeg',
            width: '1024',
            height: '1024',
            loading: 'lazy',
            alt: 'En munk täckt med grön limefrosting och dekorerad med färgglatt strössel'
        },
    },
    {
        id: 6,
        name: 'Marshmellow heaven',
        price: 14,
        rating: 4,
        amount: 0,
        category: 'Klassiker',
        img: {
            url: 'assets/Marshmellow.jpeg',
            width: '1024',
            height: '1024',
            loading: 'lazy',
            alt: 'En munk täckt med vaniljfrosting, färgglatt strössel samt baby marshmellows'
        },
    },
    {
        id: 7,
        name: 'Nutella Fever',
        price: 15,
        rating: 5,
        amount: 0,
        category: 'Fyllda munkar',
        img: {
            url: 'assets/Nutella.jpeg',
            width: '1024',
            height: '1024',
            loading: 'lazy',
            alt: 'En munk fylld med nutella dekorerad med pudrat florsocker samt toppad med en klick nutella'
        },
    },
    {
        id: 8,
        name: 'Pink sprinkle',
        price: 13,
        rating: 4,
        amount: 0,
        category: 'Klassiker',
        img: {
            url: 'assets/PinkSprinkle.jpeg',
            width: '1024',
            height: '1024',
            loading: 'lazy',
            alt: 'En munk täckt med rosa hallon och vanilj frosting och toppad med färgglatt strössel'
        },
    },
    {
        id: 9,
        name: 'Smores',
        price: 15,
        rating: 5,
        amount: 0,
        category: 'Choklad',
        img: {
            url: 'assets/Smores.jpeg',
            width: '1024',
            height: '1024',
            loading: 'lazy',
            alt: 'En munk täckt med smält choklad, kaksmulor och rostade marshmellows'
        },
    },
    {
        id: 10,
        name: 'Vanilla',
        price: 14,
        rating: 4,
        amount: 0,
        category: 'Fyllda munkar',
        img: {
            url: 'assets/Vanilla.jpeg',
            width: '1024',
            height: '1024',
            loading: 'lazy',
            alt: 'En klassisk munk fylld med vaniljkräm toppad med pudrat florsocker'
        },
    },
    {
        id: 11,
        name: 'Strawberry on top',
        price: 13,
        rating: 4,
        amount: 0,
        category: 'Frukt och bär',
        img: {
            url: 'assets/Strawberry.jpeg',
            width: '1024',
            height: '1024',
            loading: 'lazy',
            alt: 'En munk täckt med rosa jordgubbsfrosting toppad med färgglatt strössel och en färsk jordgubbe'
        },
    },
];


// ------------------------------------------------
// ------------------ HTML ELEMENTS ---------------
// ------------------------------------------------

const productsListDiv = document.querySelector('#products-list');
const cart = document.querySelector('#cart-summary');

const today = new Date();

const isFriday = today.getDay() === 6; // true eller false 
const isMonday = today.getDay() === 1;
const currentHour = today.getHours();

let slownessTimeout = setTimeout(slowCustomerMessage, 1000  * 60 * 15);
let slownessClear = setTimeout(slowCustomerClear, 1000 * 60 * 15);

// ------------------------------------------------
// -----------------------SHOW PRODUCTS IN CART----
// ------------------------------------------------

function updateAndPrintCart() {

    /* 
    TODO: 
    x A container in html where the products are printed 
    x The products that have a minimum of 1: filter 
    x A loop to print the products 
    x Totalsum
    x If there is no products or if products are reduced to zero, wright out 
    x that cart is empty 
    */

    /*
    Special rules:
    x On mondays before 10 give 10% discount on full order. This is shown in cart with a message.
    x On fridays after 15 and till 03:00 on monday a weekendprice of 15% will be added to all products. 
        This will not be shown to the customer.
    x If total amount is higher than 800kr the invoice payment option will not be avalible
    x If a customer has ordered more than 10 donuts of the same sort, a discount of 10% will be added to that specifik donuttype 
    x If a customer has orderad a total of more than 15 donuts the shippingcost will be free. In other case the shipping 
        is 25 kr plus 10% of the total value of the ordered products. 
    x If the customer has'nt finished ordering in 15 minutes a message will appear that says
        that the ordering procces is taking to long 
    x And the ordering form will be emptyed 
    */



    const cartProducts = products.filter((product) => product.amount > 0);

    let sum = 0;
    let orderedProductAmount = 0;
    let msg = '';
    let priceIncrease = getPriceMultiplier();

      // if cart is empty
    if (cartProducts.length === 0) {
        cart.innerHTML =
        '<p>Varukorgen är tom!</p>';
        return;
    }

    cart.innerHTML = '', // Empty the div of former content
    cartProducts.forEach(product => {
        orderedProductAmount += product.amount;
        if (product.amount > 0) {
            let productPrice = product.price;
            if (product.amount >= 10) {
                productPrice *= 0.9;
            }
            const adjustedDonutPrice = productPrice * priceIncrease;

            sum += product.amount * adjustedDonutPrice  //product.price

            cart.innerHTML += `
                <div>
                    ${product.name}: ${product.amount} st - ${Math.round(product.amount * adjustedDonutPrice)} kr
                </div>
            `;
        };
    });

  

    if (sum > 800) {
        document.querySelector('#invoiceRadio').classList.add('hidden');
    } else {
        document.querySelector('#invoiceRadio').classList.remove('hidden');
    }

    if (sum <= 0) {
        return;
    }

    if (today.getDay() === 1) {
        sum *= 0.9; // 100 - 10 => 90, 90 / 100
        msg += '<p>Måndagsrabatt: 10 % på hela beställningen</p>';
    }

    if (orderedProductAmount > 15) {
        cart.innerHTML += '<p>Frakt: 0 kr</p>';
    } else {
        cart.innerHTML += `<p>Frakt: ${Math.round(25 + (0.1 * sum))} kr</p>`;
    }

    cart.innerHTML += `<p>Total summa: ${Math.round(sum + (25 + (0.1 * sum)))} kr</p>`;
    cart.innerHTML += `<div>${msg}</div>`;

};

function getPriceMultiplier() {
    if ((isFriday && currentHour >= 15) || (isMonday && currentHour <= 3)) {
        return 1.15;
    }
    return 1;
};

// ------------------------------------------------
// -------------------- PRINT PRODUCTS IN HTML-----
// ------------------------------------------------

function getRatingHtml(rating) {
    let html = '';
    for (let i = 0; i < rating; i++) {
        if (rating % 1 === 0) {
            html += `<span>🍩</span>`;
        } else {
            html += `<span></span>`
        }
        
    }
    return html;
};


function printProductsList() {
    productsListDiv.innerHTML = '';

    let priceIncrease = getPriceMultiplier();

    products.forEach(product => {
        productsListDiv.innerHTML += `
            <article class="product">
                <img src="${product.img.url}" alt="${product.img.alt}">
                <h3>${product.name}</h3>
                <p>Pris: ${Math.round(product.price * priceIncrease)} kr</p>
                <p>Omdöme: ${getRatingHtml(product.rating)}</p>
                <p>Kategori: ${product.category}</p>
                <div>
                    <button class="decrease" id="decrease-${product.id}">-</button>
                    <input type="number" min="0" value="${product.amount}" id="input-${product.id}">
                    <button class="increase" id="increase-${product.id}">+</button>
                </div>
            </article>
        `;
    });


    const decreaseButtons = document.querySelectorAll('button.decrease');
    decreaseButtons.forEach(button => {
        button.addEventListener('click', decreaseProductCount);
    });

    const increaseButtons = document.querySelectorAll('button.increase');
    increaseButtons.forEach(button => {
        button.addEventListener('click', increaseProductCount);
    });

};



function decreaseProductCount(e) {
    const productId = Number(e.target.id.replace('decrease-', ''));

    const clickedButtonId = e.target.id;

    const foundProductIndex = products.findIndex(product => product.id === productId);
    console.log('found product at index', foundProductIndex);

    if (products[productId].amount <= 0) {
        products[productId].amount = 0;
    } else {
        products[productId].amount -= 1;
    }


    printProductsList();
    document.querySelector(`#${clickedButtonId}`).focus();

    updateAndPrintCart();
};

function increaseProductCount(e) {
    const productId = Number(e.target.id.replace('increase-', ''));

    const clickedButtonId = e.target.id;    
    console.log('clicked on button with id', productId);
    // Find the right product in the array that has the right id
    const foundProductIndex = products.findIndex(product => product.id === productId);
    console.log('found product at index', foundProductIndex);

    // Message to myself. If product does'nt exist, print error message in console
    if (foundProductIndex === -1) {
        console.error('Det finns ingen sådan produkt i produktlistan! Kolla att id:t är korrekt')
        return;
    }

    products[foundProductIndex].amount += 1;


    // Print productlist 
    printProductsList();
    document.querySelector(`#${clickedButtonId}`).focus();

    updateAndPrintCart();
};

function slowCustomerMessage() {
    alert('Du är för långsam på att beställa!');
};


// ------------------------------------------------
// -----------------------SORT --------------------
// ------------------------------------------------

/**
 x Recieve a value from whats clicked on
 x Add an eventlistener on that value 
 x The eventlistener triggers a funktion
 x The function will sort 
 */

function sortByName () {

   const sorted = products.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
   });
   printProductsList();
};


function sortByRating() {
    products.sort((productA, productB) => productB.rating - productA.rating);
    printProductsList();
};

function sortByCategory() {
    const sortedCategory = products.sort((a, b) => {
    if (a.category < b.category) {
        return -1;
    }
    if (a.category > b.category) {
        return 1;
    }
        return 0;
    });
    printProductsList();
};

function sortByPrice() {
    products.sort((productA, productB) => productA.price - productB.price);
    printProductsList();
};

document.querySelector('#sortByName').addEventListener('click', sortByName);
document.querySelector('#sortByRating').addEventListener('click', sortByRating);
document.querySelector('#sortByCategory').addEventListener('click', sortByCategory);
document.querySelector('#sortByPrice').addEventListener('click', sortByPrice);


// ------------------------------------------------
// -----------------------PAYMENT FORM ------------
// ------------------------------------------------

/**
 * Validate all inputs
 * Make it obligatory to klick accept gdpr 
 * Make the submit button disabled untill att fields are filled in correctly
 */

const shippingContainerInputs = Array.from(document.querySelectorAll('input[name="shippingInfoContainer"]'));
const shippingInputs = [
    document.querySelector('#inputName'),
    document.querySelector('#inputLastname'),
    document.querySelector('#inputAdress'),
    document.querySelector('#inputZip'),
    document.querySelector('#inputArea'),
    document.querySelector('#inputTel'),
    document.querySelector('#inputEmail'),
    document.querySelector('#gdpr'),
];

const shippingInfoBtn = document.querySelector('#submitshippingInfoBtn');
const shippingInfoContainer = document.querySelector('#shippingInfoContainer');

const inputNameError = document.querySelector('#inputNameError');
const inputLastNameError = document.querySelector('#inputLastNameError');


// Add eventlistener 

shippingInputs.forEach(input => {
    input.addEventListener('change', activateOrderButton);
    input.addEventListener('focusout', activateOrderButton);
});

console.log(shippingInputs);


function slowCustomerClear() {
    shippingInfoContainer.reset();
};


//***********************VALIDATE*********************/

// RegEx
const emailRegEx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);


// ------------------------------------------------
// -----------------------PAYMENT OPTIONS----------
// ------------------------------------------------

/*
x Switches between invoice payment method and card payment method.
x Toggles their visibility.
x Validate card number, year, month and cvc with RegEx
*/

const cardInvoiceRadios = Array.from(document.querySelectorAll('input[name="payment-option"]'));
const inputs = [
    document.querySelector('#creditCardNumber'),
    document.querySelector('#creditCardYear'),
    document.querySelector('#creditCardMonth'),
    document.querySelector('#creditCardCvc'),
    document.querySelector('#personalID')
];

const personalIdError = document.querySelector('#personalIdError');
const creditCardNumberError = document.querySelector('#creditCardNumberError');
const creditCardMonthError = document.querySelector('#creditCardMonthError');
const creditCardYearError = document.querySelector('#creditCardYearError');
const creditCardCvcError = document.querySelector('#creditCardCvcError');

const invoiceOption = document.querySelector('#invoice');
const cardOption = document.querySelector('#card');
const orderBtn = document.querySelector('#orderBtn');
orderBtn.addEventListener('click', orderConfirmation);

// Default options
let selectedPaymentOption = 'card';

// REGEX
const personalIdRegEx = new RegExp(/^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})/);
const creditCardNumberRegEx = new RegExp(/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/); // MasterCard

// Add event listeners
inputs.forEach(input => {
    input.addEventListener('change', activateOrderButton);
    input.addEventListener('focusout', activateOrderButton);
});

cardInvoiceRadios.forEach(radioBtn => {
    radioBtn.addEventListener('change', switchPaymentMethod);
});

function switchPaymentMethod(e) {
    invoiceOption.classList.toggle('hidden');
    cardOption.classList.toggle('hidden');

    selectedPaymentOption = e.target.value;
};


// Activate order button if all fields are correctly filled 
 
function activateOrderButton() {
    orderBtn.setAttribute('disabled', '');

    if (inputName.value <= 2) {
        console.warn('Information is missing.');
        return;
    };

    if (selectedPaymentOption === 'invoice' && !isPersonalIdNumberValid()) {
        return;
    }

    if (selectedPaymentOption === 'card') {
        //check card number
        if (creditCardNumberRegEx.exec(creditCardNumber.value) === null) {
            creditCardNumberError.innerHTML = 'Fel: Kortnummret är ej giltigt.';
            return;
        } else {
            creditCardNumberError.innerHTML = '';
        };

           // Check card month
           if (creditCardMonth.value.length < 2) {
            creditCardMonthError.innerHTML = 'Fel: Månaden är ej giltig.';
            return;
        } else {
            creditCardMonthError.innerHTML = '';
        };

         // Check card year
         let year = Number(creditCardYear.value);
         const today = new Date ();
         const shortYear = Number(String(today.getFullYear()).substring(2));
 
         if (year > shortYear + 2 || year < shortYear) {
             creditCardYearError.innerHTML = 'Fel: Årtalet är ej giltigt.';
             return;
         } else {
            creditCardYearError.innerHTML = '';
         };
 
        // Check card CVC
        if (creditCardCvc.value.length !== 3 ) {
            creditCardCvcError.innerHTML = 'Fel: CVC numret är ej giltigt.';
            return;
        } else {
            creditCardCvcError.innerHTML = '';
        };
    };

   orderBtn.removeAttribute('disabled');

   shippingInputs.forEach(input => {
    input.addEventListener('change', orderBtn);
    input.addEventListener('focusout', orderBtn);
});
};



// ------------------------------------------------
// ------------------ ORDER CONFIRMATION ----------
// ------------------------------------------------

/**
 * Make an "order confirmation" with delivery time, total sum and ordernumber 
 * 
 */

function orderConfirmation(e) {
    e.preventDefault();

    const confirmationDiv = document.querySelector('#confirmation');
    confirmationDiv.innerHTML = `
    <h3> Tack för din beställning </h3>
    <p> Dina produkter är redo för upphämtning inom 15 min.</p>
    `;
};

printProductsList();
