[ Деплой клиентской части ]

cp .env.example .env
npm install
npm run build
pm2 start --name "EVRAZ" --start
