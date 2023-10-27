run:
	docker-compose up
stop:
	docker-compose down
deletecontainers:
	docker rm shop-server
	docker rm shop-client
