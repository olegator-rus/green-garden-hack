const actions = {

    async typeList({ commit }) {
        try {
            const res = await this.$axios({
                baseURL: this.$config.externalBaseUrl,
                url: `wagonTypeList`,
                method: 'get',
                errors: true,
            });

            const result = res.data;
            commit('updateTypeList', result);
        } catch(err) {}
    },

}

export default actions;
