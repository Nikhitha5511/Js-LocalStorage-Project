const textarea = document.getElementById("textarea");

function saveLocalStorage(){
    localStorage.setItem("Text",textarea.value);
}

if(localStorage.getItem('Text')){
    textarea.value = localStorage.getItem('Text');

}

textarea.addEventListener('input',saveLocalStorage);

const themeSelector = document.getElementById('theme');

themeSelector.addEventListener('change', function() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }

    localStorage.setItem('theme', selectedTheme);
});

window.addEventListener('load', function() {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
       
        document.body.classList.add('light-mode');
    }
});