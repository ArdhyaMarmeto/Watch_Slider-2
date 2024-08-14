// Array containing the carousel data
const carouselData = [
    {
        text: "Exquisite Watches",
        price: "$499.00",
        productImage: "https://s3-alpha-sig.figma.com/img/2ad3/d5c1/bc7c8b7d2ade47a27798d58559b94505?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TQ-JeuAzyxA5JaCfhrMTTKqI642qXfa6gVt1NyMNnmA85koWFnu4H6KkoPGKBrai89-OUKx9RtPb4skTGLi6y65orIJEMZmg1uokl8gK4-0yMrz5MUyKak133lWmduz5UxjYKVjZ5i3L3QdBAEsVDEemrKIllOFWDY-ru2OEKyusvWcF~6SRL5vE7MnP3rlRsfGeRFjJec2vEQPNbpeH4nL1RUoJRjsyKF4dpqaDe1fUnrXy0zaJ86I2Fov8KsnPlm63iHMZNAJlyZ4IXtJQogeycKRvAjJpV2m5KGSW6OPmdHeXvfB0XIXakhNRsog1jqU5WQzoIy-oNdw-M0VzAw__",
        ambientColor: "linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)"
    },
    {
        text: "Elegant Timepieces",
        price: "$699.00",
        productImage: "https://s3-alpha-sig.figma.com/img/9b03/5859/b3cd59b6e82967a441a89bdb7f113601?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hTaW3hezHED3cKrQfIF2~eNDQ4gaZVUaubb3kem6gpzO4DtXCr22rEo3Gooeyw8YF4Yq5uhOl~mBnjH222rnPmBXnL9D4G8Gqwxs2Sk~ygbF1i614~nZpf51Q38Mx8JtULZIWP96kbY84FzLP7QeaYaMzfc33w-8HDBr8YNe7RxktDpfXyNqBJOF-67Ulz-1io-wr5d-jweV-pDKP3vh9kYx8W5XC~h65ScjkUnfPhzWAaS7GKv5wsUQ-~NEI0XFGdyiRewribgJwyd4YvJye7RJ1HdBuSQ1DRJl3sKvFiS03amV-7Y9qDxi9qlgh-z3Sqhl0SRAacEgwgTRGxfYvA__",
        ambientColor: "linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)"
    },
    {
        text: "Stylish Accessories",
        price: "$799.00",
        productImage: "https://s3-alpha-sig.figma.com/img/1155/92de/a1e0499b541d8505e2a8b346af7f884f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dU9h6mKMeLyV6BhukaJ93ZNFihotK9ubtlVM8nFMKMbb1SY9iqaEvuGrDl1gLYffu9-JzWqcZoD9VVn7ghZ4mXkFiLAHuQKSvSlesnDk-zVrn8GPpEB2AfH9FKEDjiiSjHNjPCKRyJ4uhdcUJ9wldnuPjqQOcgF4ZCzzSDb4Xsm6uKapW~qImwpg1i3fvl2rmIWZhF-6h0d9jFU75os9yhChHViSpyxzGiVEO7EkClz3WIvinMl2KeHue9fojN7xaGLuv-aixsALETYM3WF0MsK~v1RrCVNeHXEluh6PVfOLG2cwiN-kJVQ4EQnB3IBW7ZsuJ~LTpMYFyY4AfH8L9A__",
        ambientColor: "linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)"
    },
    {
        text: "Timeless Classics",
        price: "$899.00",
        productImage: "https://s3-alpha-sig.figma.com/img/c62f/050a/5112960cf7b3fd65ba1ed29d826e710a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KKoREp5Pn6usjBTMN3VtFc5ILovMh1MyUHBPvAz3GeVXJDTOLBjXmZGgFd1uedyHR2szBHbc81eM3FcIoG8QAsjuJVriPu5Rs0H4ACUpKFsTeknpRV4-SGx4ND5G07cpcQaWLi~YktvSAdc0WvYUIZyFhPrp0sw8r77ArIhO5K1x-vOK2lSIRx9x3O208HPB-26V9PTudWLjv4Ggy7L9jDY0Msjlu07J2mHp4Rj6lPrUAaOf401Tp5OsG~NAYBfWbZdXwk~s1gtBusmc5Ie46QQV15c2hnTRQV7cJ3Sp7Ts33eYG7Um0wAnz47G1UrIUN~Oc~-NdIit-mdhWqjkLPg__",
        ambientColor: "linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)"
    }
];

// Get the carousel list, body background element, and static content elements
const carouselList = document.getElementById('carousel-list');
const ambientBg = document.getElementById('ambient-bg');
const staticTitle = document.getElementById('static-title');
const staticDescription = document.getElementById('static-description');
const staticDetail = document.getElementById('static-detail');
const staticPrice = document.getElementById('static-price');

// Create slides dynamically
carouselData.forEach((item) => {
    const slide = document.createElement('li');
    slide.className = 'splide__slide flex justify-center items-center';
    slide.innerHTML = `
        <div class="text-center-hidden-text">
            <img src="${item.productImage}" alt="${item.text}" class="w-full mt-6">
        </div>
    `;
    carouselList.appendChild(slide);
});

// Initialize Splide.js
const splide = new Splide('#carousel-container', {
    type: 'loop',
    perPage: 1,
    arrows: true
});

// Function to update static content based on the current slide
function updateStaticContent(index) {
    const currentItem = carouselData[index];
    
    // Update static content
    staticTitle.innerText = currentItem.text;
    staticDescription.innerHTML = `${currentItem.text}, <span class="text-black">Choose Us</span>`;
    staticDetail.innerText = `Discover the perfect watch for every occasion with ${currentItem.text} and elevate your style.`;
    staticPrice.innerText = currentItem.price;
}

// Event listener for slide changes
splide.on('move', (newIndex) => {
    const ambientColor = carouselData[newIndex].ambientColor;
    ambientBg.style.background = ambientColor;
    
    // Update the content dynamically
    updateStaticContent(newIndex);
});

// Mount the Splide instance
splide.mount();

// Set the initial background color and static content
ambientBg.style.background = carouselData[0].ambientColor;
updateStaticContent(0);



document.getElementById('signUpButton').addEventListener('click', function() {
    document.getElementById('signUpForm').classList.remove('hidden');
});

 // Hide the sign-up form when the close icon is clicked
 document.getElementById('closeButton').addEventListener('click', function() {
    console.log('Close button clicked'); // Debugging line
    document.getElementById('signUpForm').classList.add('hidden');
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Form submission logic here
    alert('Form submitted!');
    
    // Reset the form fields
    this.reset();

    // Hide the form after submission
    document.getElementById('signUpForm').classList.add('hidden');
});