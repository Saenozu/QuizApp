docker rm -f test
docker rmi -f test
docker build -t test .
docker run --name=test --rm -p 18703:3000 -it test
echo "Done!"