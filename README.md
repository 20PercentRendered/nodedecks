# Nodedecks

**Open-source alternative for the Elgato Stream Deck software.**

## To Use
From your command line:

```bash
# Clone this repository
git clone https://github.com/20PercentRendered/nodedecks
# Go into the repository
cd nodedecks
# Install dependencies
npm install
# Run the app
npm start
```
## Linux only
Taken from [here](https://github.com/timothycrosley/streamdeck-ui/blob/master/README.md#linux-quick-start).
Add your user to the 'plugdev' group:
```bash
sudo usermod -a -G plugdev `whoami`
```
Add the udev rules using your favorite text editor:
```bash
sudo nano /etc/udev/rules.d/99-streamdeck.rules
```
Paste the following lines:
```
SUBSYSTEM=="usb", ATTRS{idVendor}=="0fd9", ATTRS{idProduct}=="0060", MODE:="666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0fd9", ATTRS{idProduct}=="0063", MODE:="666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0fd9", ATTRS{idProduct}=="006c", MODE:="666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTRS{idVendor}=="0fd9", ATTRS{idProduct}=="006d", MODE:="666", GROUP="plugdev"
```
Reload the rules:
```
sudo udevadm control --reload-rules
```
## License
MIT
