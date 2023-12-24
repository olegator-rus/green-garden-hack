const mutations = {

    setCurrentStation(state, id){
        state.stationId = id;
    },

    changeShowMode(state){
        state.showNumber = !state.showNumber;
    },

    setShowMode(state, value){
        state.showNumber = value;
    },

    updateData(state, data){
        state.data = data;
        this.commit("station/updateTokenKey");
    },

    updateStationWagon(state, data){
        const parkId = data.parkId;
        const stationId = data.stationId;
        const oldIndex = data.oldIndex;
        const newIndex = data.newIndex;

        let per = state.data.find((item) =>
            item.park.id == parkId && item.station.id == stationId
        );

        let obj = per.wagons;
        let key1 = oldIndex;
        let key2 = newIndex;

        [obj[key1], obj[key2]] = [obj[key2], obj[key1]];
        this.commit("station/updateTokenKey");
    },

    updateTokenKey(state){
        state.token = Math.random() * (1000 - 1) + 1;
    },

    updateList(state, data){
        state.list = data;
    },

    // Мутация начала загрузки экшена
    startLoading(state){
        state.loading = true;
    },

    // Мутация конца загрузки экшена
    finishLoading(state){
        state.loading = false;
    },

    // Мутация конца загрузки модуля
    activatePreloader(state){
        state.preloader = true;
    },

    // Мутация конца загрузки модуля
    deactivatePreloader(state){
        state.preloader = false;
    }

}

export default mutations;
