const actions = {

    // Зарегистрировать нового пользователя
    // в системе, и вернуть данные ответа
    async list({ commit }) {
        try {
            const res = await this.$axios({
                baseURL: this.$config.externalBaseUrl,
                url: `stationsList`,
                method: 'get',
                errors: true
            });

            const result = res.data;
            commit('updateList', result);
        } catch(err) {}
    },

    // Зарегистрировать нового пользователя
    // в системе, и вернуть данные ответа
    async data({ commit }) {
        try {
            const res = await this.$axios({
                baseURL: this.$config.externalBaseUrl,
                url: `stationsData`,
                method: 'get',
                errors: true,
            });

            const result = res.data;
            commit('updateData', result);
        } catch(err) {}
    },

}

export default actions;
