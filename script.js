
// function toggleTheme() {

//     // Obtains an array of all <link>
//     // elements.
//     // Select your element using indexing.
//     var theme = document.getElementsByTagName('link')[0];

//     // Change the value of href attribute 
//     // to change the css sheet.
//     if (theme.getAttribute('href') == './styles/styles.css') {
//         theme.setAttribute('href', './styles/stylesdark.css');
//     } else {
//         theme.setAttribute('href', './styles/styles.css');
//     }
// }


// Comparing this with one above
document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        if(themeStylesheet.href.includes('styles.css')) {
            themeStylesheet.href = './styles/stylesdark.css';
        } else {
            themeStylesheet.href = './styles/styles.css';
        }
    })
})

