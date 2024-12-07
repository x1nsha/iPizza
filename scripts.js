const contactButton = document.getElementById('contactButton');

contactButton.addEventListener('click', () =>
{
    if (!contactButton.classList.contains('expanded'))
    {
        contactButton.textContent = "";
        contactButton.classList.add('expanded');
    }
});

document.addEventListener("DOMContentLoaded", () =>
{
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".section");

    links.forEach((link, index) =>
    {
        link.addEventListener("click", (e) =>
        {
            e.preventDefault();

            links.forEach((link) => link.classList.remove("active"));

            link.classList.add("active");

            sections.forEach((section) => section.classList.add("hidden"));

            setTimeout(() =>
            {
                sections[index].classList.remove("hidden");

                const offset = sections[index].offsetTop;

                window.scrollTo({
                    top: offset - 80,
                    behavior: "smooth",
                });
            }, 300);
        });
    });
});

document.addEventListener('DOMContentLoaded', () =>
{
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark')
    {
        body.classList.add('dark-theme');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () =>

    {
        if (themeToggle.checked)
        {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
        else
        {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});

document.getElementById('searchButton').addEventListener('click', () =>
{
    const searchPanel = document.getElementById('searchPanel');

    if (searchPanel.classList.contains('visible'))
    {
        searchPanel.classList.remove('visible');
    }
    else
    {
        searchPanel.classList.add('visible');
    }
});

document.addEventListener("DOMContentLoaded", () =>
{
    const searchInput = document.querySelector("#searchPanel input");
    const dishes = document.querySelectorAll(".top-pick, .featured-item");

    searchInput.addEventListener("input", (e) =>
    {
        const query = e.target.value.toLowerCase();

        dishes.forEach((dish) =>
        {
            const name = dish.querySelector("h3").textContent.toLowerCase();

            if (name.includes(query))
            {
                dish.style.display = "block";
                dish.style.animation = "fadeIn 0.5s ease-in-out";
            }
            else
            {
                dish.style.display = "none";
            }
        });
    });
});

const searchButton = document.getElementById("searchButton");
const searchPanel = document.getElementById("searchPanel");

searchButton.addEventListener("click", () =>
{
    searchPanel.classList.toggle("hidden");
});

document.getElementById('languageSelect').addEventListener('change', function ()
{
    const selectedLanguage = this.value;
    const translations =
    {
        en: {
            header: "Welcome to iPizza 🍕",
            subheader: "Delicious pizza and more.",
            discount: "Get 20% off your first order!",
            contact: "Contact Us",
            searchPlaceholder: "Search for delicious items...",
            translateLabel: "Translate",
            footer: "© 2024 iPizza. All rights reserved."
        },
        ru: {
            header: "Добро пожаловать в iPizza 🍕",
            subheader: "Вкусная пицца и многое другое.",
            discount: "Получите 20% скидки на первый заказ!",
            contact: "Свяжитесь с нами",
            searchPlaceholder: "Ищите вкусные блюда...",
            translateLabel: "Перевести",
            footer: "© 2024 iPizza. Все права защищены."
        },
        it: {
            header: "Benvenuti da iPizza 🍕",
            subheader: "Pizza deliziosa e altro.",
            discount: "Ottieni il 20% di sconto sul primo ordine!",
            contact: "Contattaci",
            searchPlaceholder: "Cerca articoli deliziosi...",
            translateLabel: "Traduci",
            footer: "© 2024 iPizza. Tutti i diritti riservati."
        },
    };
    const textContent = translations[selectedLanguage];

    document.querySelector('.hero-overlay h2').textContent = textContent.header;
    document.querySelector('.hero-overlay p:nth-of-type(1)').textContent = textContent.subheader;
    document.querySelector('.hero-overlay p:nth-of-type(2)').textContent = textContent.discount;
    document.querySelector('.contact-button').textContent = textContent.contact;
    document.querySelector('#searchPanel input').placeholder = textContent.searchPlaceholder;
    document.querySelector('footer').textContent = textContent.footer;
});

document.getElementById('languageSelect').addEventListener('change', () =>
{
    const contactButton = document.getElementById('contactButton');

    contactButton.classList.remove('expanded');
});

document.addEventListener('DOMContentLoaded', () =>
{
    const scrollTopButton = document.getElementById('scrollTopButton');

    window.addEventListener('scroll', () =>
    {
        if (window.scrollY > 200)
        {
            scrollTopButton.classList.remove('hidden');
            scrollTopButton.classList.add('visible');
        }
        else
        {
            scrollTopButton.classList.remove('visible');
            scrollTopButton.classList.add('hidden');
        }
    });
    scrollTopButton.addEventListener('click', () =>
    {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});
