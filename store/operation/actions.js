const actions = {

    async typesNorms({ commit }) {
        try {
            const res = await this.$axios({
                baseURL: this.$config.externalBaseUrl,
                url: `operationsTypesNorms`,
                method: 'get',
                errors: true,
            });

            const result = res.data;
            commit('updateTypesNorms', result);
        } catch(err) {}
    },

    async types({ commit }) {
        try {
            const res = await this.$axios({
                baseURL: this.$config.externalBaseUrl,
                url: `operationsTypes`,
                method: 'get',
                errors: true,
            });

            const result = res.data;
            commit('updateTypes', result);
        } catch(err) {}
    },

    async machinists({ commit }) {
        try {
            const res = await this.$axios({
                url: `user/machinists`,
                method: 'get',
                errors: true,
            });

            const result = res.data.data;
            commit('updateMachinists', result);
        } catch(err) {}
    },

    async list({ commit }) {
        try {
            const res = await this.$axios({
                baseURL: this.$config.externalBaseUrl,
                url: `operationsList`,
                method: 'get',
                errors: true
            });

            const result = res.data;
            commit('updateList', result);
        } catch(err) {}
    },

    async reasonsList({ commit }) {
        try {
            const res = await this.$axios({
                baseURL: this.$config.externalBaseUrl,
                url: `operationReasonsList`,
                method: 'get',
                errors: true,
            });

            const result = res.data;
            commit('updateReasonsList', result);
        } catch(err) {}
    },


}

export default actions;
