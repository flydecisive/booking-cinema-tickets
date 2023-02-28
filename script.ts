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

class NavBar {
    
}

class StartPage {
    
}

// 1 пиздим названия фильмов, описание и фотки (мб трейлер)
// 2 сделать мапу (объект с ключами, на ключах висят фильмы) с сеансами
// написать рандомайзер, который рандомно вставляет фильмы
// bootstrap, ts, webpack, rxjs
// спиздить дизайн с кинотеатра
// есть главная страница, в которой выводится список фильмов
// есть страница детализации фильма (выбор даты, время сеанса, стоимость билета)
// страница заказа
// тестовая оплата 