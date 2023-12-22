const mutations = {

    updateList(state, data){
        state.list = data;
    },

    updateLegend(state, data){
        state.legend = data;
    },

    updateSelectorOwners(state, data){
        state.selected = data;
    },

    // Мутация закрытия модального окна
    closeModal(state){
        state.modal = false;
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
