
# Find Device in Network 

[quelle](https://superuser.com/questions/124453/how-can-i-scan-the-local-network-for-connected-devices-mac-os)

1. Ping the broadcast address
(you can find it with `ifconfig | grep broadcast`)

2. and then do an `arp -a`

