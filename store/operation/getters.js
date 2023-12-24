const getters = {

    MACHINISTS_LIST: (state) => {
        return state.machinists;
    },

    ROUTES_LIST: (state, getters, rootState, rootGetters) => {
        console.log(state.arrivalStationId, rootGetters['station/CURRENT_STATION'].id);
        return state.routesData
            .filter((item) => item.arrivalStation?.id == state.arrivalStationId)
            .filter((item) => item.departureStation?.id == rootGetters['station/CURRENT_STATION'].id);
    },

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
