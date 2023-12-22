// Плагин добавляющий вывод ошибок при неудачном actions
// ошибки выводятся с помощью vue-toastification
export default ({ $axios, $auth, store, redirect }) => {
    $axios.onRequest(config => {
        let projectId = localStorage.getItem("project-id");
        if(!projectId) return;
        config.headers.common['project-id'] = projectId;
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
