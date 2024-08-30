// script.js

document.addEventListener('DOMContentLoaded', function () {
    const infoWidget = document.getElementById('info-widget');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Davlatlar haqida ma'lumotlar
    const countries = [
        { name: "USA", description: "The United States of America, known for its diverse culture and economic power." },
        { name: "UK", description: "The United Kingdom, known for its historical influence and cultural heritage." },
        { name: "Japan", description: "Japan, known for its technological advancements and rich history." },
        { name: "Brazil", description: "Brazil, known for its vibrant culture and the Amazon Rainforest." },
        { name: "China", description: "China, known for its ancient history and rapid modernization." },
        { name: "Germany", description: "Germany, known for its engineering prowess and rich cultural history." },
        { name: "France", description: "France, known for its art, fashion, and culinary traditions." },
        { name: "India", description: "India, known for its diverse culture and historical landmarks." },
        { name: "Russia", description: "Russia, known for its vast landscapes and cultural heritage." },
        { name: "Australia", description: "Australia, known for its unique wildlife and beautiful landscapes." },
        { name: "Canada", description: "Canada, known for its natural beauty and multicultural cities." },
        { name: "South Africa", description: "South Africa, known for its diverse ecosystems and cultural diversity." },
        { name: "Italy", description: "Italy, known for its art, history, and delicious cuisine." },
        { name: "Mexico", description: "Mexico, known for its rich cultural traditions and historical sites." },
        { name: "South Korea", description: "South Korea, known for its technological advancements and pop culture." },
        { name: "Turkey", description: "Turkey, known for its historical sites and cultural crossroads." },
        { name: "Spain", description: "Spain, known for its vibrant culture and historic landmarks." },
        { name: "Netherlands", description: "Netherlands, known for its innovative architecture and picturesque landscapes." },
        { name: "Sweden", description: "Sweden, known for its high quality of life and beautiful nature." },
        { name: "Norway", description: "Norway, known for its stunning fjords and outdoor activities." },
        { name: "Denmark", description: "Denmark, known for its design, architecture, and high quality of life." },
        { name: "Switzerland", description: "Switzerland, known for its neutrality, financial services, and beautiful landscapes." },
        { name: "Austria", description: "Austria, known for its classical music heritage and alpine scenery." },
        { name: "Belgium", description: "Belgium, known for its medieval towns and Renaissance architecture." },
        { name: "Poland", description: "Poland, known for its historical cities and natural beauty." },
        { name: "Portugal", description: "Portugal, known for its maritime history and beautiful coastlines." },
        { name: "Greece", description: "Greece, known for its ancient ruins and Mediterranean culture." },
        { name: "Egypt", description: "Egypt, known for its ancient pyramids and historical significance." },
        { name: "Saudi Arabia", description: "Saudi Arabia, known for its oil reserves and rich cultural traditions." },
        { name: "United Arab Emirates", description: "UAE, known for its modern architecture and luxury lifestyle." },
        { name: "Qatar", description: "Qatar, known for its wealth and rapid modernization." },
        { name: "Iran", description: "Iran, known for its rich history and cultural heritage." },
        { name: "Iraq", description: "Iraq, known for its ancient civilizations and historical sites." },
        { name: "Jordan", description: "Jordan, known for its historical landmarks like Petra and the Dead Sea." },
        { name: "Lebanon", description: "Lebanon, known for its cultural diversity and historical sites." },
        { name: "Syria", description: "Syria, known for its ancient history and cultural heritage." },
        { name: "Yemen", description: "Yemen, known for its ancient architecture and rich history." },
        { name: "Oman", description: "Oman, known for its natural beauty and historic forts." },
        { name: "Kuwait", description: "Kuwait, known for its modern skyline and oil reserves." },
        { name: "Bahrain", description: "Bahrain, known for its financial services and historic sites." },
        { name: "Singapore", description: "Singapore, known for its modern cityscape and diverse culture." },
        { name: "Malaysia", description: "Malaysia, known for its tropical rainforests and vibrant cities." },
        { name: "Indonesia", description: "Indonesia, known for its diverse culture and tropical islands." },
        { name: "Philippines", description: "Philippines, known for its beautiful beaches and islands." },
        { name: "Vietnam", description: "Vietnam, known for its rich history and natural beauty." },
        { name: "Thailand", description: "Thailand, known for its vibrant culture and beautiful beaches." },
        { name: "Myanmar", description: "Myanmar, known for its historical sites and cultural heritage." },
        { name: "Cambodia", description: "Cambodia, known for its ancient temples and historical significance." },
        { name: "Laos", description: "Laos, known for its mountainous terrain and cultural traditions." },
        { name: "Nepal", description: "Nepal, known for its stunning landscapes and trekking opportunities." },
        { name: "Sri Lanka", description: "Sri Lanka, known for its tropical climate and cultural heritage." },
        { name: "Maldives", description: "Maldives, known for its luxury resorts and clear waters." },
        { name: "Bhutan", description: "Bhutan, known for its natural beauty and cultural traditions." },
        { name: "Pakistan", description: "Pakistan, known for its diverse landscapes and historical sites." },
        { name: "Afghanistan", description: "Afghanistan, known for its ancient history and cultural heritage." },
        { name: "Uzbekistan", description: "Uzbekistan, known for its Silk Road history and cultural landmarks." },
        { name: "Kazakhstan", description: "Kazakhstan, known for its vast steppes and cultural heritage." },
        { name: "Turkmenistan", description: "Turkmenistan, known for its rich history and desert landscapes." },
        { name: "Kyrgyzstan", description: "Kyrgyzstan, known for its mountainous terrain and natural beauty." },
        { name: "Tajikistan", description: "Tajikistan, known for its stunning mountains and cultural heritage." },
        { name: "Armenia", description: "Armenia, known for its ancient churches and historical sites." },
        { name: "Georgia", description: "Georgia, known for its diverse landscapes and cultural heritage." },
        { name: "Azerbaijan", description: "Azerbaijan, known for its rich culture and natural resources." },
        { name: "Cyprus", description: "Cyprus, known for its Mediterranean beaches and historical ruins." },
        { name: "Malta", description: "Malta, known for its historical sites and beautiful coastlines." },
        { name: "Luxembourg", description: "Luxembourg, known for its financial services and historic sites." },
        { name: "Monaco", description: "Monaco, known for its luxury lifestyle and beautiful coastline." },
        { name: "Andorra", description: "Andorra, known for its ski resorts and beautiful landscapes." },
        { name: "San Marino", description: "San Marino, known for its historical sites and stunning views." },
        { name: "Vatican City", description: "Vatican City, known for its religious significance and historic architecture." },
        { name: "Liechtenstein", description: "Liechtenstein, known for its beautiful scenery and financial services." },
        { name: "Jersey", description: "Jersey, known for its historic sites and beautiful landscapes." },
        { name: "Guernsey", description: "Guernsey, known for its picturesque landscapes and historical sites." },
        { name: "Isle of Man", description: "Isle of Man, known for its scenic beauty and historic sites." },
        { name: "Faroe Islands", description: "Faroe Islands, known for its stunning landscapes and remote beauty." },
        { name: "Greenland", description: "Greenland, known for its ice-covered landscapes and unique culture." },
        { name: "Iceland", description: "Iceland, known for its volcanic landscapes and geothermal activity." },
        { name: "Svalbard", description: "Svalbard, known for its Arctic wilderness and unique wildlife." }
    ];

    let currentIndex = 0;

    function updateInfo() {
        const country = countries[currentIndex];
        infoWidget.innerHTML = `
            <h2>${country.name}</h2>
            <p>${country.description}</p>
        `;
    }

    function showNextCountry() {
        currentIndex = (currentIndex + 1) % countries.length; // Next country
        updateInfo();
    }

    function showPrevCountry() {
        currentIndex = (currentIndex - 1 + countries.length) % countries.length; // Previous country
        updateInfo();
    }

    // Initialize the first country
    updateInfo();

    // Event listeners for buttons
    nextButton.addEventListener('click', showNextCountry);
    prevButton.addEventListener('click', showPrevCountry);
});
