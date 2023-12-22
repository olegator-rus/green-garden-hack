const getters = {

    TYPES_LIST: (state) => {
        return state.typeList;
    },

    SELECTED_LIST: (state) => {
        return state.selected;
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
