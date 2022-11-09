docker image build -t server-node server
docker image build -t client-node client

docker network create test-net
docker volume create pg-data

docker container run -d --name postgres --net test_network -p 5432:5432 --mount type=bind,source="$(Get-Location)"/database,target=/docker-entrypoint-initdb.d --mount source=pg-data,target=/var/lib/postgresql/data -e POSTGRES_USER=dbuser -e POSTGRES_PASSWORD=secretpassword -e POSTGRES_DB=sample-db postgres:11.5-alpine

docker container run --name server --net test_network -p 3000:3000 -d server-node

timeout 10

docker container run --name api-test --net test_network -e BASE_URL="http://server:3000" client-node