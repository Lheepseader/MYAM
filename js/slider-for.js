$(document).ready(function(){
    let sliderPositionText = 0; // начальная позиция дорожки
    let sliderPositionImg = 0; // начальная позиция дорожки
    const sliderContainerForText = $('.customer-inner-content-item');
    const sliderContainerForImg = $('.customer-inner-slider-imgs');
    const sliderItemImg = $('.customer-inner-img');
    const sliderItem = $('.customer-inner-content-item-slider');
    const sliderItemWidth = sliderItem.width();
    const sliderItemImgWidth = sliderItemImg.width();
    const sliderContainerForTextWidth = sliderContainerForText.width();
    const sliderContainerForImgWidth = sliderContainerForImg.width();
    const sliderImgTrack = $('.customer-inner-slider-imgs-wrap');
    const sliderTextTrack = $('.customer-inner-content-item-wrap');
    // ширина дорожки определяется как разница между шириной всех картинок и шириной контейнера
    // разница нужна для того, чтобы прокрутка не проводилась дальше последнего фото
    const sliderTrackTextWidth = sliderItem.length * sliderItemWidth - sliderContainerForText;
    const sliderTrackImgWidth = sliderItemImg.length * sliderItemImgWidth - sliderContainerForImgWidth; 
    const sliderButtonPrev = $('.customer-inner-content-button-left');
    const sliderButtonNext = $('.customer-inner-content-button-right');
    sliderButtonPrev.on('click', function(){
        sliderPositionImg += sliderItemImgWidth; // увеличиваем отступ при нажатии назад
        sliderPositionText += sliderItemWidth;
        // поскольку отступ будет всегда отрицательный, нужно сравнивать с нулем, 
        // чтобы исключить пустые прокрутки
        if (sliderPositionImg > 0) {
            sliderPositionImg = 0;
            sliderPositionText = 0;
        }
        sliderImgTrack.css('transform', `translateX(${sliderPositionImg}px`);
        sliderTextTrack.css('transform', `translateX(${sliderPositionText}px`);

        sliderButtons();
    });
    sliderButtonNext.on('click', function(){
        sliderPositionImg -= sliderItemImgWidth;
        sliderPositionText -= sliderItemWidth;
        // так как отступы отрицательные, нужно сравнить с отрицательной длинной дорожки, 
        // чтобы исключить пустые прокрутки
        if (sliderPositionImg < -sliderTrackImgWidth) {
            sliderPositionImg = -sliderTrackImgWidth;
            sliderPositionText = -sliderTrackTextWidth;
        }
        sliderImgTrack.css('transform', `translateX(${sliderPositionImg}px`);
        sliderTextTrack.css('transform', `translateX(${sliderPositionText}px`);
        sliderButtons();
    });
    // скрываем кнопки prev/next, когда нельзя больше крутить
    const sliderButtons = () => {
        if (sliderPositionImg == 0) {
            sliderButtonPrev.hide();
        } else {
            sliderButtonPrev.show();
        }
        if (sliderPositionImg == -sliderTrackImgWidth) {
            sliderButtonNext.hide();
        } else {
            sliderButtonNext.show();
        }
    };
    sliderButtons();
});