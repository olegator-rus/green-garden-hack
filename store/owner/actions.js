const actions = {

    async legend({ commit }) {
        try {
            const res = await this.$axios({
                url: `user/legend`,
                method: 'get',
                errors: true,
            });

            const result = res.data.data;
            commit('updateLegend', result);
        } catch(err) {}
    },

    async list({ commit }) {
        try {
            const res = await this.$axios({
                baseURL: this.$config.externalBaseUrl,
                url: `ownersList`,
                method: 'get',
                errors: true,
            });

            const result = res.data;
            commit('updateList', result);
        } catch(err) {}
    },

}

export default actions;
