const getters = {

    OWNERS_LIST: (state) => {
        return state.list;
    },

    OWNERS_UNIQUE: (state) => {
        // https://qna.habr.com/q/884939
        const res = state.legend.reduce((o, i) => {
            if (!o.find(v => v.alias == i.alias)) {
              o.push(i);
            }
            return o;
          }, []);
        return res;
    },

    OWNERS_BY_ALIAS: (state) => (alias) => {
        return state.legend
            .find((item) =>  item.alias == alias );
    },

    LEGEND_LIST: (state) => {
        return state.legend;
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
