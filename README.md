[ Разворачивание приложения ]

Для начала вам необходимо развернуть бэкенд, склонируйте репозиторий и выполните следующие команды.

rm composer.lock
composer install
cp .env.example .env
docker-compose up -d
php artisan migrate:rollback
php artisan migrate --seed
php artisan passport:install
php artisan config:clear
php artisan config:cache
php artisan cache:clear
php artisan route:cache
php artisan view:clear
php artisan optimize

Также незабудьте запустить сервер базы данных, заказчика (кейсодержателя). Для разворачивания сервера необходимо:

Выполнить команду npm install/yarn install для установки зависимостей
Выполнить команду npm start/yarn start для запуска сервера

После можно скопировать клиентскую часть приложения, перейти в 
папку проекта и выполнить следующие команды:

cp .env.example .env
npm install
npm run dev
