export default function ({ store, redirect }) {

    // Получаем все роли пользователя
    let roles = store.state.auth.user.roles.map(role => role.name);;
    console.log(roles);

    // Пользователей роли «администратор» переадресовываем
    // управления проектами. Важно обратить внимание,
    // что администратору токен мероприятия не нужен.
    if (roles.includes('manager')) {
        return redirect('/manager/board');
    }

    // В случае если ни один сценарий не подошел
    // переадресовываем пользователя на страницу входа
    return redirect('/auth/signin');

}
