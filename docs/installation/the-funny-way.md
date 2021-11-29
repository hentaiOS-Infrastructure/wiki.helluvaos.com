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

- Windows (7 or later)
- macOS (10.12 or later)
- Arch Linux
- Debian 10 (buster) or later

Make sure your operating system is up-to-date before proceeding.

## Opening Terminal and Nerding Away

These instructions use command-line tools. Launch the terminal as you would on any other application. On Windows, launch a regular non-adminstrator instance of the Terminal. Do not use the legacy Command Prompt or adminstrator variant of Terminal.

Use the same terminal for the whole installation process. If you close it, you'll need to start over.

On Windows, run the following command to remove PowerShell's legacy curl alias for the current shell to avoid needing to reference it as `curl.exe` instead of `curl`:

```shell
Remove-Item Alias:Curl
```

### Obtaining fastboot

You need an updated copy of the `fastboot` tool and the directory containing it needs to be included in the `PATH` environment variable. You can run `fastboot --version` to determine the current version. It must be at least `29.0.6`. You can use a distribution package for this, but most of them mistakenly package development snapshots of fastboot, clobber the standard version scheme for platform-tools (adb, fastboot, etc.) with their own scheme and don't keep it up-to-date despite that being crucial.

On Arch Linux, install `android-tools` and skip the section below on using the standalone release of platform-tools from Android:

```sh
sudo pacman -S android-tools
```

Debian do not have a usable package for fastboot. Their packages for these tools are both broken and many years out-of-date. Follow the instructions below for platforms without a proper package.

##### Using the standalone release of platform-tools from Android

To download and extract the standalone release of platform-tools from Debian, run the following commands:

<Tabs
    defaultValue="debian"
    values={[
        {label: 'Debian', value: 'debian'},
        {label: 'macOS', value: 'macos'},
        {label: 'Windows', value: 'windows'},
    ]}>

<TabItem value="debian">

    sudo apt install libarchive-tools
    curl -O https://dl.google.com/android/repository/platform-tools-latest-linux.zip
    bsdtar xvf platform-tools-latest-linux.zip

</TabItem>

<TabItem value="macos">

    curl -O https://dl.google.com/android/repository/platform-tools-latest-darwin.zip
    tar xvf platform-tools-latest-darwin.zip

</TabItem>

<TabItem value="windows">

    curl -O https://dl.google.com/android/repository/platform-tools-latest-windows.zip
    tar xvf platform-tools-latest-windows.zip

</TabItem>

</Tabs>

Next, add the directory containing the extracted files to the `PATH` environment variable:

On Debian and macOS, run the following command:

``` bash
export PATH=$PATH:$(pwd)/platform-tools
```

On Windows, run the following command:

``` shell
$env:PATH = $env:PATH + ";$(pwd)\platform-tools"
```

This only changes the `PATH` environment variable for the current shell.

### Checking fastboot version

Check the output of `fastboot --version` to make sure the version is at least `29.0.6`.

Example of the output of `fastboot --version` on Arch Linux:

``` shell
fastboot version 31.0.0p1-android-tools
Installed as /usr/bin/fastboot
```

### Flashing as non-root

On traditional Linux distributions, you may need to run fastboot as root to flash the device.
This is not necessary on macOS or Windows.

On Arch Linux, run the following command:

``` bash
sudo pacman -S android-udev
```

On Debian, run the following command:

``` bash
sudo apt install android-sdk-platform-tools-common
```

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
