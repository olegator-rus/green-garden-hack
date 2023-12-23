export default function ({ store, redirect }) {

    // Если не установлен токен текущей станции,
    // перенаправляем пользователя на страницу выбора проекта.
    const stationId = localStorage.getItem("station-id");
    if(!stationId) return redirect('/selector');

}
