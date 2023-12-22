const actions = {

    // Зарегистрировать нового пользователя
    // в системе, и вернуть данные ответа
    async signupUser({ commit }, data) {
        try {
            const res = await this.$axios({
                url: `user/signup`,
                method: 'post',
                errors: true,
                data: data
            });
            return res.data.data;
        } catch(err) {}
    },

}

export default actions;
