
fetch:
	git clone https://github.com/Camel-app/Dashboard

build:
	npm install .
	npm run build

update:
	pm2 stop server-dashboard
	git pull

start:
	pm2 start "npm run start" --name server-dashboard
