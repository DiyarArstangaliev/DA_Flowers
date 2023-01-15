let store = {
    _state: {

        dialogsData: [
            {id: 1, name: 'SolaZola'},
            {id: 2, name: 'LuxuryG'},
            {id: 3, name: 'AviA'},
            {id: 4, name: 'AsaAkira'},
            {id: 5, name: 'SolaZola'},
            {id: 6, name: 'LuxuryG'},
            {id: 7, name: 'AviA'},
            {id: 8, name: 'AsaAkira'}
        ],
        messagesData: [
            {id: 1, text: 'Hi*'},
            {id: 3, text: 'My first video'},
            {id: 2, text: 'what do you think?'},
            {id: 4, text: 'HOT'}
        ],
        newMessageText: 'da_flowers',
        accordion: [
            {
                title: "Можно заказать дешево и много?",
                content: `Заказать дешево и много можно цветы плохого качества, но у нас таких нет!`
            },
            {
                title: "Как продлить цветам жизнь?",
                content: `1. Покупайте только свежие цветы 2. Не оставляйте цветы без воды 
            3. Удалите все увядшие лепестки и листья
            4. Чаще подрезайте стебли
            5. Меняйте воду чаще
            6. Подкармливайте цветы
            7. Опрыскивайте цветы
            8. Храните цветы в прохладных местах`
            },
            {
                title: "Куда приехать и выбрать самому?",
                content: `К сожалению, у нас пока нет офлайн магазина. Но мы к этому идём`
            },
            {
                title: "Когда уже приедет курьер?",
                content: `Если вы заказали у нас, то долго ждать не придётся. Менеджеры и наши курьеры всегда на связи.
                  Мы заботимся не только о цветах, но и о клиентах! Спасибо что выбрали нас!`
            }
        ]
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log('State was changed');
    },
    addMessage ()  {
        let newMessage = {
            id:5,
            text: this._state.newMessageText
        };
        this._state.messagesData.push(newMessage);
        this._state.newMessageText = '';
        this._rerenderEntireTree(this._state);
    },
    updateNewMessageText (newMessage) {
        this._state.newMessageText = newMessage;
        this._rerenderEntireTree(this._state);
    },
    subscribe (observer) {
        this._rerenderEntireTree = observer;
    }
}

export default store;
