// $(document).ready(function() {
//     // Click event on the element with id "previous-button"
//     $('#previous-button').click(function() {
//         // Select all elements with the class "carousel-element"
//         var carouselElements = $('.carousel-element');
//         console.log(carouselElements);
//         // Do something with the selected elements
//         carouselElements.each(function(index, element) {
//             if ($(element).hasClass('carousel-active-element')) {
//                 console.log(element)
//                 console.log(index)
//                 console.log($(carouselElements[index-1]))
//                 if (index != 0) {
//                     $(element).removeClass('carousel-active-element');
//                     $(carouselElements[index-1]).addClass('carousel-active-element');
//                     console.log($(carouselElements[index-1]))
//                 } else {
//                     $(element).removeClass('carousel-active-element');
//                     $(carouselElements[carouselElements.length-1]).addClass('carousel-active-element');
//                 }
//             }
//         });
//     });
// });

$(document).ready(function () {
    var currentIndex = 0;
    var totalItems = $('.carousel-element').length;

    $('#previous-button').click(function () {
        moveCarousel('prev');
    });

    $('#next-button').click(function () {
        moveCarousel('next');
    });

    function moveCarousel(direction) {
        var currentElement = $('.carousel-element.carousel-active-element');
        var nextIndex;
        if (direction === 'prev') {
            nextIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
            currentElement.css('animation-name', 'fadeOutAnimation');
        } else {
            nextIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        }
        var nextElement = $('.carousel-element').eq(nextIndex);
        nextElement.css('animation-name', 'fadeAnimation')

        // Slide left animation
        $(currentElement).removeClass('carousel-active-element');
        $(nextElement).addClass('carousel-active-element');

        currentIndex = nextIndex;
    }
});