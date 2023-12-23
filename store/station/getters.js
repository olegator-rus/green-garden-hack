const getters = {

    UPDATE_KEY: (state) => {
        return state.token;
    },

    STATION_LIST: (state) => {
        return state.list;
    },

    STATION_LIST_COUNT: (state) => {
        return state.list.length;
    },

    CURRENT_STATION: (state) => {
        console.log(state.stationId, state.list);
        let data = state.list
            .find((item) => item.id == state.stationId);

        return data;
    },

    STATION_SELECT_LIST: (state) => {
        let list = [...state.list];
        // Сортируем список значений
        list.sort((a, b) => a.title.localeCompare(b.name));
        // Добавляем в список «Не выбрано»
        list.unshift({
            "id": null,
            "title": "Не выбрано"
        });
        // Возвращаем итоговый список станций
        return list;
    },

    PARKS_BY_STATION: (state) => (id) => {
        let data = state.data
            .filter((item) => item.station?.id == id);

        return data.map(function(station) {
            return station['park'];
        });
    },

    WAYS_BY_STATION: (state) => (id) => {
        let data = state.data
            .filter((item) => item.station?.id == id);

            return data.map(function(station) {
                return station['way'];
            });
    },

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
