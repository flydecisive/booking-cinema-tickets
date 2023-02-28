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
// создание верхнего блока
var Top = /** @class */ (function () {
    function Top(container) {
        this.container = container;
        this.initTop(container);
    }
    Top.prototype.initTop = function (container) {
        var topContainer = document.createElement('div');
        topContainer.classList.add('top');
        var topLink = document.createElement('a');
        topLink.classList.add('top__link');
        topLink.setAttribute('href', 'index.html');
        var logo = document.createElement('img');
        logo.classList.add('logo');
        logo.src = 'img/logo.png';
        logo.alt = 'logo';
        topLink.appendChild(logo);
        topContainer.appendChild(topLink);
        container.appendChild(topContainer);
    };
    return Top;
}());
// Создание info блока
var Info = /** @class */ (function () {
    function Info(container) {
        this.container = container;
        this.initInfo(container);
    }
    Info.prototype.initInfo = function (container) {
        var info = document.createElement('div');
        info.classList.add('info');
        var title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = 'Сейчас в кино';
        var search = document.createElement('div');
        search.classList.add('search');
        info.appendChild(title);
        info.appendChild(search);
        container.appendChild(info);
    };
    return Info;
}());
// создание блока content
var Content = /** @class */ (function () {
    function Content(container) {
        this.initContent(container);
    }
    Content.prototype.initContent = function (container) {
        var content = document.createElement('div');
        content.classList.add('content');
        // <a href="" class="content__link">
        //         <content class="content__item">
        //             <img src="img/films_img/1.webp" alt="" class="content__img">
        //             <h3 class="content__title">ОПЕРАЦИЯ «ФОРТУНА»: ИСКУССТВО ПОБЕЖДАТЬ</h3>
        //             <h4 class="content__subtitle">Боевик, комедия</h4>
        //         </content>
        //     </a>
        var contentLink = document.createElement('a');
        contentLink.classList.add('content__link');
        contentLink.href = '#';
        var contentItem = document.createElement('div');
        contentItem.classList.add('content__item');
        var contentImg = document.createElement('img');
        contentImg.classList.add('content__img');
        contentImg.src = 'img/films_img/1.webp';
        var contentTitle = document.createElement('h3');
        contentTitle.classList.add('content__title');
        contentTitle.textContent = 'ОПЕРАЦИЯ «ФОРТУНА»: ИСКУССТВО ПОБЕЖДАТЬ';
        var contentSubtitle = document.createElement('h4');
        contentSubtitle.classList.add('content__subtitle');
        contentSubtitle.textContent = 'Боевик, комедия';
        contentLink.appendChild(contentImg);
        contentLink.appendChild(contentTitle);
        contentLink.appendChild(contentSubtitle);
        contentItem.appendChild(contentLink);
        content.appendChild(contentItem);
        container.appendChild(content);
    };
    return Content;
}());
document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.container');
    if (container) {
        new Top(container);
        new Info(container);
        new Content(container);
    }
});
// 1 пиздим названия фильмов, описание и фотки (мб трейлер)
// 2 сделать мапу (объект с ключами, на ключах висят фильмы) с сеансами
// написать рандомайзер, который рандомно вставляет фильмы
// bootstrap, ts, webpack, rxjs
// спиздить дизайн с кинотеатра
// есть главная страница, в которой выводится список фильмов
// есть страница детализации фильма (выбор даты, время сеанса, стоимость билета)
// страница заказа
// тестовая оплата 
