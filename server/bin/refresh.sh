while true; do 
	curl http://localhost:3000/mta/live > /dev/null
	sleep 30
done
