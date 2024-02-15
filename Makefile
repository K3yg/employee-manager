.PHONY: run stop build rebuild restart logs

run: 
	docker-compose up -d

stop: 
	docker-compose down

build: 
	docker-compose build

rebuild: 
	docker-compose build --no-cache

restart: 
	docker-compose restart

logs: 
	docker-compose logs -f