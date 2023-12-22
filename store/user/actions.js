const actions = {

    // Загрузить список пользователей
    // подключенных к проекту (для администратора)
    async getAllUsers({ commit }) {
        try {
            const res = await this.$axios({
                url: `user/all`,
                errors: true,
                method: 'get'
            });
            const data = res.data.data;
            commit('usersListUpdate', data);
        } catch(err) {}
    },

    // Загрузить данные пользователя
    // (для администратора)
    async getUser({ commit }, id) {
        try {
            const res = await this.$axios({
                url: `user/get`,
                method: 'get',
                errors: true,
                params: {
                    id: id
                }
            });
            commit('userUpdate', res.data.data);
        } catch(err) {}
    },

    // Обновить данные пользователя
    // (для администратора)
    async updateUser({ commit, dispatch }, data) {
        try {
            const res = await this.$axios({
                url: `user/update`,
                method: 'patch',
                errors: true,
                data: data
            });
        } catch(err) {}
    },

    // Обновить роль пользователя
    // (для администратора)
    async updateRole({ commit, dispatch }, data) {
        try {
            const res = await this.$axios({
                url: `user/reassign`,
                method: 'patch',
                errors: true,
                data: data
            });
        } catch(err) {}
    },

    // Импорт данных пользователей
    // подключенных к проекту (для администратора)
    async importUsers({ commit, dispatch }, data) {
        try {
            const res = await this.$axios({
                url: `user/import`,
                method: 'post',
                errors: true,
                data: data
            });
        } catch(err) {}
    },

}

export default actions;
