const getters = {

    OPERATION_LIST: (state) => {
        // Группировать по станциям
        return state.list;
    },

    OPERATION_TYPES: (state) => {
        return state.types;
    },

    OPERATION_REASONS: (state) => {
        return state.reasonsList;
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
