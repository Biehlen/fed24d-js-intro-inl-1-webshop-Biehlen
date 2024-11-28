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
        name: 'Appelpie',
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
const filteredProductsDiv = document.querySelector('#filter-products');

const today = new Date();

const isFriday = today.getDay() === 6; // true eller false 
const isMonday = today.getDay() === 1;
const currentHour = today.getHours();

let slownessTimeout = setTimeout(slowCustomerMessage, 1000  * 60 * 15);

// ------------------------------------------------
// -----------------------SHOW PRODUCTS IN CART----
// ------------------------------------------------

function updateAndPrintCart() {

    /* 
    Att Göra: 
    x En container i html där producterna skrivs ut
    x Produkter som har minst 1 i antal: filter 
    x Loop för att skriva ut produkterna
    x totalsumma
    - om det inte finns några produkter eller om man minskar antalet av en produkt till 0
        så ska det skrivas ut att varukorgen är tom
    */

    /*
    Specialregler: 
    x På måndagar innan kl. 10 ges 10% rabatt på hela beställningssumman. Detta visas i varukorgssammanställningen 
    som en rad med texten "Måndagsrabatt: 10 % på hela beställningen".
    x På fredagar efter kl. 15 och fram till natten mellan söndag och måndag kl, 03.00 tillkommer ett helgpåslag på 15%
    på alla munkar. Detta ska inte framgå för kunden att munkarna är dyrare, utan priser ska bara vara högre i "utskriften"
    av munkarna. 
    - Om kunden har beställt för totalt mer än 800 kr ska det inte gå att välja faktura som betalsätt
    x Om kunden har beställt minst 10 munkar av samma sort ska munkpriset för just denna munksort rabatteras med 10 %
    x Om kunden beställer totalt mer än 15 munkar så blir frakten gratis. I annat fall är fraktsumman 25 kr plus 10% av 
    totalbeloppet i varukorgen 
    x Om kunden inte slutfört beställningen inom 15 min kunden meddelas att det går för långsamt
    - Och formuläret ska rensas
    */

    
    

    const cartProducts = products.filter((product) => product.amount > 0);

    // Print selected products to cart 

    let sum = 0;
    let orderedProductAmount = 0;
    let msg = '';
    let priceIncrease = getPriceMultiplier();

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


    if (sum <= 0) {
        return;
    }

    if (today.getDay() === 1) {
        sum *= 0.9; // 100 - 10 => 90, 90 / 100
        msg += '<p>Måndagsrabatt: 10 % på hela beställningen</p>';
    }

    cart.innerHTML += `<p>Total summa: ${Math.round(sum)} kr</p>`;
    cart.innerHTML += `<div>${msg}</div>`;

    if (orderedProductAmount > 15) {
        cart.innerHTML += '<p>Frakt: 0 kr</p>';
    } else {
        cart.innerHTML += `<p>Frakt: ${Math.round(25 + (0.1 * sum))} kr</p>`;
    }
};

function getPriceMultiplier() {
    if ((isFriday && currentHour >= 15) || (isMonday && currentHour <= 3)) {
        return 1.15;
    }
    return 1;
}


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
}


function printProductsList() {
    productsListDiv.innerHTML = '';

    let priceIncrease = getPriceMultiplier();

    products.forEach(product => {
        productsListDiv.innerHTML += `
            <article class="product">
                <img src="${product.img.url}" alt="${product.img.alt}">
                <h3>${product.name}</h3>
                <p>Pris: ${product.price * priceIncrease} kr</p>
                <p>Omdöme: ${getRatingHtml(product.rating)}</p>
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

}

printProductsList();

function decreaseProductCount(e) {
    const productId = Number(e.target.id.replace('decrease-', ''));

    const foundProductIndex = products.findIndex(product => product.id === productId);
    console.log('found product at index', foundProductIndex);

    if (products[productId].amount <= 0) {
        products[productId].amount = 0;
    } else {
        products[productId].amount -= 1;
    }


    printProductsList();
    updateAndPrintCart();
}

function increaseProductCount(e) {
    const productId = Number(e.target.id.replace('increase-', ''));
    console.log('clicked on button with id', productId);
    // Find the right product in the array that has the right id
    const foundProductIndex = products.findIndex(product => product.id === productId);
    console.log('found product at index', foundProductIndex);

    // Massage to myself. If product does'nt exist, print error message in console
    if (foundProductIndex === -1) {
        console.error('Det finns ingen sådan produkt i produktlistan! Kolla att id:t är korrekt')
        return;
    }

    products[foundProductIndex].amount += 1;


    // Print productlist 
    printProductsList();

    updateAndPrintCart();
}

function slowCustomerMessage() {
    alert('Du är för långsam på att beställa!');
}

// ------------------------------------------------
// -----------------------PAYMENT OPTIONS----------
// ------------------------------------------------

/*
x Switches between invoice payment method and card payment method.
x Toggles their visibility.
- Validate card number, year, month and cvc with RegEx
*/

const cardInvoiceRadios = Array.from(document.querySelectorAll('input[name="payment-option"]'));
const inputs = [
    document.querySelector('#creditCardNumber'),
    document.querySelector('#creditCardYear'),
    document.querySelector('#creditCardMonth'),
    document.querySelector('#creditCardCvc'),
    document.querySelector('#personalID')
];

const invoiceOption = document.querySelector('#invoice');
const cardOption = document.querySelector('#card');
const orderBtn = document.querySelector('#orderBtn');

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
}


function isPersonalIdNumberValid() {
    return personalIdRegEx.exec(personalId.value);
}

// Activate order button if all fields are correctly filled 
 
function activateOrderButton() {
    orderBtn.setAttribute('disabled', '');

    if (selectedPaymentOption === 'invoice' && !isPersonalIdNumberValid()) {
        return;
    }

    if (selectedPaymentOption === 'card') {
        //check card number
        if (creditCardNumberRegEx.exec(creditCardNumber.value) === null) {
            console.warn('Credit card number not valid.');
            return;
        }

        // Check card year
        let year = Number(creditCardYear.value);
        const today = new Date ();
        const shortYear = Number(String(today.getFullYear()).substring(2));

        if (year > shortYear + 2 || year < shortYear) {
            console.warn('Credit card month not valid.');
            return;
        }

        //TODO: Fixa månad, obs. "padStart" med 0

        // Check card CVC
        if (creditCardCvc.value.length !== 3 ) {
            console.warn('CVC not valid.');
            return;
        }
    }

    orderBtn.removeAttribute('disabled');
}

