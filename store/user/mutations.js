const mutations = {

    // Мутация списка пользователей
    usersListUpdate(state, data){
      state.users = data;
    },

    // Мутация данных пользователя
    userUpdate(state, data){
        state.user = data;
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
