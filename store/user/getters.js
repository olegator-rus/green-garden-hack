const getters = {

    // Получение данных определенного пользоватя
    USER: (state) => {
        return state.user;
    },

    // Получение списка пользователей
    USERS_LIST (state) {
        return state.users;
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
