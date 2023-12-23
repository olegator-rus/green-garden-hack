// Плагин добавляющий вывод ошибок при неудачном actions
// ошибки выводятся с помощью vue-toastification
export default ({ $axios, $auth, store, redirect }) => {
    $axios.onRequest(config => {
        let stationId = localStorage.getItem("station-id");
        if(!stationId) return;
        config.headers.common['station-id'] = stationId;
    });

    // Добавляем перехват ответов
    $axios.interceptors.response.use(function (response) {
        // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
        if(response.config.success == true) {
            store.$toast.success(response.data.message);
        }
        // Прокидываем ответ дальше
        return response;
    }, function (error) {
        error = error.response;
        // Любые коды состояния, выходящие за пределы диапазона 2xx, вызывают срабатывание этой функции
        // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
        if(error.config.errors == true) {
            store.$toast.error(error.data.message);
        }
        return Promise.reject(error);
    });
}
