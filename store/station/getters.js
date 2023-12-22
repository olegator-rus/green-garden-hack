const getters = {

    STATION_DATA: (state) => (id) => {
        // Фильтруем данные по станции
        let data = state.data
            .filter((item) => item.station?.id == id);

        // Групированные по парку данные
        let group = Object.groupBy(data, ({ park }) => park.id);

        return group;
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
