const getters = {

    // Получение статуса открытия
    // модального окна
    OPENED_MODAL: (state) => {
        return state.modal;
    },

    // Получение статуса загрузки экшена
    LOADING_STATUS: (state) => {
        return state.loading;
    },

    // Получаение статуса загрузки модуля
    PRELOADER_STATUS: (state) =>{
        return state.preloader;
    }

}

export default getters;
