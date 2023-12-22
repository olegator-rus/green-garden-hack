export default function ({ store, redirect }) {

    // Получаем все роли пользователя
    let roles = store.state.auth.user.roles.map(role => role.name);;

    // Пользователей роли «администратор» переадресовываем
    // управления проектами. Важно обратить внимание,
    // что администратору токен мероприятия не нужен.
    if (roles.includes('moderator')) {
        return redirect('/moderator/board');
    }

    return (async () => {

        // В случае если ни один сценарий не подошел
        // переадресовываем пользователя на страницу входа
        return redirect('/auth/signin');
    })();
}
