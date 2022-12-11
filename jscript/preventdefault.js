const testLinkPrevent = document.querySelector('#testLinkPrevent');

testLinkPrevent.addEventListener('click', function (event) {
    // тело обработчика
    this.textContent = 'Может Вам не нужен яндекс?';
    event.preventDefault();
})