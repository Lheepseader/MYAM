window.onload = function() {
  // Запускаем таймер
  setTimeout(function() {
    // Создаем элемент всплывающего окна
    var popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.bottom = '20px'; // расположение в правом нижнем углу
    popup.style.right = '20px';
    popup.style.backgroundColor = '#fff';
    popup.style.padding = '20px';
    popup.style.borderRadius = '5px';
    popup.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
    popup.innerHTML = 'Здесь ваше всплывающее окно';
    // Добавляем кнопку закрытия
    var closeBtn = document.createElement('button');
    closeBtn.innerText = 'Закрыть';
    closeBtn.style.marginLeft = '10px';
    closeBtn.addEventListener('click', function() {
      popup.parentNode.removeChild(popup);
    });
    popup.appendChild(closeBtn);
    // Добавляем элемент всплывающего окна на страницу
    document.body.appendChild(popup);
  }, 3000); // 3 секунды
};