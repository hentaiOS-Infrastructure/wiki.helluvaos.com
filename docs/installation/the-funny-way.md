---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manual installation

This is a guide for installing helluvaOS using the command line.

:::caution May not reflect all devices
This documentation is generically written and may not include specific guides for your specific device, refer to your device documentation for more information.
:::

## Prerequisites

You should have a USB Cable for attaching the device to a laptop or desktop. Whenever possible, use the high quality standards-compliant USB Type-C cable that comes with your device. If your computer doesn't have any USB Type-C ports, you'll need a high quality USB Type-A to USB Type-C cable.

:::caution About USB Hubs
You should generally avoid using USB Hubs such as the front panel USB hub on a desktop computer case. Connect directly to a rear port on a desktop or the ports on the side of a laptop.
:::

Supported Operating Systems for install:

- Arch Linux
- Debian 10 (buster) or later
- Windows (7 or later)
- macOS (10.12 or later)

Make sure your operating system is up-to-date before proceeding.

### Booting to bootloader mode

You need to boot your phone into the bootloader mode. To do this, hold down the volume down button on the device while the device is booting until you see a red warning sign or green Android robot.

The easiest approach is to reboot the phone and begin holding the volume down button until it boots up into the bootloader mode.

## Obtaining factory images

Extract the downloaded factory image package then navigate to the newly created directory by typing `cd` and drag the folder onto the terminal.

### Flashing factory images

For Windows, run the following command:

``` shell
flash-all.bat
```

For macOS and Linux, run the following command:

``` sh
./flash-all.sh
```

Don't touch, unplug, or remove the device until the installation is complete.
Your phone will restart several times during the installation process and you'll need to wait for it to finish. It will boot into the OS once the installation is complete.
