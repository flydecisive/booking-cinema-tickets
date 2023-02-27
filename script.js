var Session = /** @class */ (function () {
    function Session(elements) {
        this.elements = elements;
    }
    // рендер сидячих мест в кинотеатре
    Session.prototype.renderSeats = function (container) {
        for (var i = 1; i <= 20; i++) {
            var seat = document.createElement('div');
            seat.classList.add('seats__item');
            seat.textContent = String(i);
            container === null || container === void 0 ? void 0 : container.appendChild(seat);
        }
    };
    //рендер кнопок   
    Session.prototype.renderButtons = function (container) {
        var buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons__container');
        var backButton = document.createElement('button');
        backButton.classList.add('back__button', 'button');
        backButton.textContent = 'Назад';
        var bookButton = document.createElement('button');
        bookButton.classList.add('book__button', 'button');
        bookButton.textContent = 'Забранировать';
        buttonsContainer.appendChild(backButton);
        buttonsContainer.appendChild(bookButton);
        container === null || container === void 0 ? void 0 : container.appendChild(buttonsContainer);
    };
    return Session;
}());
document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.container');
    var sessionContainer = container === null || container === void 0 ? void 0 : container.querySelector('.session__container');
    var sessionItems = sessionContainer === null || sessionContainer === void 0 ? void 0 : sessionContainer.querySelectorAll('.session__item');
    var session = new Session(sessionItems);
    if (sessionItems) {
        sessionItems.forEach(function (item) {
            item.addEventListener('click', function () {
                var seatsContainer = document.createElement('div');
                seatsContainer.classList.add('seats__container');
                if (container) {
                    container.innerHTML = '';
                    container.appendChild(seatsContainer);
                }
                session.renderSeats(seatsContainer);
                session.renderButtons(container);
            });
        });
    }
});
