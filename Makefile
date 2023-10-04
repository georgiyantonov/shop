run:
	docker-compose up
stop:
	docker-compose down
deletecontainers:
	docker rm shop-server-1
	docker rm shop-client-2
