# sites_keep_alive-scripts

websites keep awake script 


This script defines an array linksToPing containing the URLs you want to ping. It uses the axios library to make HTTP requests and the node-cron library to schedule the task to run every ten minutes. The pingAllLinks function iterates over the links and pings each one using the pingLink function.

Save this script as, for example, ping-script.js and run it using: