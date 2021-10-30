build:
	docker-compose build

dev:
	docker-compose up -d

sh:
	docker-compose run frontpage sh

add-dev:
	@read -p "Enter package name:" package; \
	docker-compose exec frontpage yarn add $$package --dev

exec:
	docker-compose exec frontpage $1