# Airpods Quick Connect

Airpods Quick Connect is a GNOME Shell extension that allows users to quickly connect to their Airpods with one click. The extension adds a panel menu button to the top panel, which, when clicked, displays a menu item to connect to AirPods Pro 2. The connection is established using the `bluetoothctl` command-line tool. Upon successful connection, a notification is displayed.

## Features

- Quickly connect to your AirPods Pro 2 with a single click
- Simple and intuitive interface
- Notifications for connection status

## Installation

### Prerequisites

Ensure you have `bluetoothctl` installed on your system. This is typically included with the `bluez` package on most Linux distributions.

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/airpods-quick-connect.git
   ```

2. **Navigate to the extension directory:**

   ```sh
   cd airpods-quick-connect
   ```

3. **Zip the extension files:**

   ```sh
   zip -r airpods.quick.connect@ahmad244.com.zip *
   ```

4. **Install the extension:**

   ```sh
   gnome-extensions install airpods.quick.connect@ahmad244.com.zip --force
   ```

5. **Enable the extension:**

   ```sh
   gnome-extensions enable airpods.quick.connect@ahmad244.com
   ```

## Usage

After enabling the extension, you will see a smiley face icon in the top panel.
Click the icon to open the menu.
Click "Connect to AirPods Pro 2" to connect your AirPods.
Upon successful connection, a notification will be displayed. If the connection fails, a notification with the error message will be shown.

## Configuration

By default, the extension is set up to connect to AirPods Pro 2 with the MAC address `18:3F:70:70:78:CA`. If your AirPods have a different MAC address, you need to modify the `macAddress` variable in the `extension.js` file:

```javascript
let macAddress = "YOUR_AIRPODS_MAC_ADDRESS";
```

## Development

### Prerequisites

- GNOME Shell
- GNOME Shell Extension Tools

### Steps

1. Navigate to the GNOME Shell extensions directory:

   ```sh
   cd ~/.local/share/gnome-shell/extensions/airpods.quick.connect@ahmad244.com
   ```

2. Edit the extension files:

   - `metadata.json` for extension metadata.
   - `extension.js` for the main extension logic.

3. Reload GNOME Shell (Alt+F2, then type `r` and press Enter) to apply changes.

## Logging

To view the extension logs, use the following command:

```sh
journalctl /usr/bin/gnome-shell -f
```

## License

This project is licensed under the GNU General Public License v2.0 or later. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Acknowledgements

This extension was inspired by the need for a simple and quick way to connect AirPods to a Linux system.

## Author

Ahmad244

Feel free to reach out for any questions or suggestions.