const currentYear = new Date().getFullYear(); //Автозамена года
document.getElementById('footer__par').textContent = currentYear + ' ' + document.getElementById('footer__par').textContent;