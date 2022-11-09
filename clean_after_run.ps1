docker kill $(docker ps -q)
docker rm $(docker ps -aq)

docker network rm test-net
docker volume rm pg-data

docker container rm -f $(docker container ls -aq)