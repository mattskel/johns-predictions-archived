# johns-predictions

This is the readme. Read.

# Accessing my droplet and starting the app
Can log into the droplet using ssh and the droplet IP address
ssh root@170.64.152.65 (This looks as though it is constant, however can get from digital ocean page)
Password is stored in Google passwords manager, dummy

To start run, cd into johns-predictions/backend and run the command
pm2 server.js start
That's it (I think). It should be running. Go to johnspredictions.com and check.

# Stopping the app
Stopping the app is just as easy
Inside the droplet console find the process you want to stop
You can get a list of running processes by running the command
pm2 list
To stop the process run the command
pm2 stop <name>
The process is probably called "server". 
