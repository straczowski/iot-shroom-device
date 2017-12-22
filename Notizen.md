
# Find Device in Network 

[quelle](https://superuser.com/questions/124453/how-can-i-scan-the-local-network-for-connected-devices-mac-os)

1. Ping the broadcast address
(you can find it with `ifconfig | grep broadcast`)

2. and then do an `arp -a`






# Blinking LED, Hardware Setup

[quelle](https://thepihut.com/blogs/raspberry-pi-tutorials/27968772-turning-on-an-led-with-your-raspberry-pis-gpio-pins)




# Pin Belegung mit WiringPi

[Pin Belegung](https://de.pinout.xyz/pinout/wiringpi)


# Shutdon Raspberry

```
$ sudo shutdown -h 0
```



# Connt to Wifi

[hier](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)

```
$ sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
```

```
network={
    ssid="{SSID_NAME}"
    psk="{SSID_PW}"
}
```

```
$ wpa_cli -i wlan0 reconfigure
```

## SSH auf Mac reset

```
ssh-keygen -f "/Users/raoulstraczowski/.ssh/known_hosts" -R 192.168.2.100
```
192.168.0.15

192.168.2.100