class Session {
    constructor (public elements: NodeListOf<Element> | undefined) {}

    // рендер сидячих мест в кинотеатре
    renderSeats (container: Element | undefined): void {
        for (let i = 1; i <= 20; i++) {
            const seat = document.createElement('div');
            seat.classList.add('seats__item');
            seat.textContent = String(i);
            container?.appendChild(seat);
        }
    }

    //рендер кнопок   
    renderButtons (container: Element | null): void {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons__container');
        const backButton = document.createElement('button');
        backButton.classList.add('back__button', 'button');
        backButton.textContent = 'Назад';
        const bookButton = document.createElement('button');
        bookButton.classList.add('book__button', 'button');
        bookButton.textContent = 'Забранировать';
        buttonsContainer.appendChild(backButton);
        buttonsContainer.appendChild(bookButton);
        container?.appendChild(buttonsContainer);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const sessionContainer = container?.querySelector('.session__container');
    const sessionItems = sessionContainer?.querySelectorAll('.session__item'); 

    const session = new Session(sessionItems);
    if (sessionItems) {
        sessionItems.forEach((item) => {
            item.addEventListener('click', () => {
                const seatsContainer = document.createElement('div');
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

interface Film {
    name: string;
    image: string;
    genre: string;
}

interface Films {
    position: {
        [key: string]: Film;
    }
}

const films: Films = {
    1: {
        'name': 'ОПЕРАЦИЯ «ФОРТУНА»: ИСКУССТВО ПОБЕЖДАТЬ',
        'image': 'img/films_img/1.webp',
        'genre': 'Боевик, комедия',
    }
}

// создание верхнего блока
class Top {
    constructor (public container: Element) {
        this.initTop(container);
    }

    initTop(container: Element): void {
        const topContainer = document.createElement('div');
        topContainer.classList.add('top');
        const topLink = document.createElement('a');
        topLink.classList.add('top__link');
        topLink.setAttribute('href', 'index.html');
        const logo = document.createElement('img');
        logo.classList.add('logo');
        logo.src = 'img/logo.png';
        logo.alt = 'logo';
        topLink.appendChild(logo);
        topContainer.appendChild(topLink);
        container.appendChild(topContainer);
    }
}

// Создание info блока
class Info {
    constructor (public container: Element) {
        this.initInfo(container);
    }

    initInfo(container: Element): void {
        const info = document.createElement('div');
        info.classList.add('info');
        const title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = 'Сейчас в кино';
        const search = document.createElement('div');
        search.classList.add('search');
        info.appendChild(title);
        info.appendChild(search);
        container.appendChild(info);
    }
}

// создание блока content
class Content {
    constructor (container: Element) {
        this.initContent(container);
    }

    initContent(container: Element): void {
        const content = document.createElement('div');
        content.classList.add('content');
        const contentLink = document.createElement('a');
        contentLink.classList.add('content__link');
        contentLink.href = '#';
        const contentItem = document.createElement('div');
        contentItem.classList.add('content__item');
        const contentImg = document.createElement('img');
        contentImg.classList.add('content__img');
        contentImg.src = 'img/films_img/1.webp';
        const contentTitle = document.createElement('h3');
        contentTitle.classList.add('content__title');
        contentTitle.textContent = 'ОПЕРАЦИЯ «ФОРТУНА»: ИСКУССТВО ПОБЕЖДАТЬ';
        const contentSubtitle = document.createElement('h4');
        contentSubtitle.classList.add('content__subtitle');
        contentSubtitle.textContent = 'Боевик, комедия';
        contentLink.appendChild(contentImg);
        contentLink.appendChild(contentTitle);
        contentLink.appendChild(contentSubtitle);
        contentItem.appendChild(contentLink);
        content.appendChild(contentItem);
        container.appendChild(content);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

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