const state = () => ({
    // Список всех пользователей
    users: [],
    // Выбранный пользователь для просмотра
    user: null,
    // Лоадер отправки комментария
    loading: false,
    // Отображение прелоадера
    preloader: true,
})

export default state
