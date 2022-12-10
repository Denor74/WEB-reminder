const testTextField = document.querySelector('#testTextField');

testTextField.addEventListener('click', function (event) {
    //тело обработчика
    this.textContent = 'Произошло событие ' + event.type;
    console.log('Координаты по Х ' + event.clientX + ' Координаты по Y ' + event.clientY);
    // конец обработчика
})