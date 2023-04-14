---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installing Requirements

These instructions use command-line tools. Launch the terminal as you would on any other application. On Windows, launch a regular non-adminstrator instance of the Terminal. Do not use the legacy Command Prompt or adminstrator variant of Terminal.

Use the same terminal for the whole installation process. If you close it, you'll need to start over.

## Obtaining Platform Tools

You need an updated copy of the `fastboot` and `adb` tool and the directory containing it needs to be included in the `PATH` environment variable. You can run `fastboot --version` to determine the current version. It must be at least `29.0.6`. You can use a distribution package for this, but most of them mistakenly package development snapshots of fastboot, clobber the standard version scheme for platform-tools (adb, fastboot, etc.) with their own scheme and don't keep it up-to-date despite that being crucial.

<Tabs
    defaultValue="arch"
    values={[
        {label: 'Arch Linux', value: 'arch'},
        {label: 'macOS', value: 'macos'},
        {label: 'Windows', value: 'windows'},
    ]}>

<TabItem value="arch">

```sh
sudo pacman -S android-tools
```

</TabItem>

<TabItem value="windows">

```
winget install Google.PlatformTools
```

</TabItem>

<TabItem value="macos">

```
brew install android-platform-tools
```

</TabItem>

</Tabs>

### Using the standalone release of Platform Tools from Google

To download and extract the standalone release of platform-tools, run the following commands:

<Tabs
    defaultValue="debian"
    values={[
        {label: 'Debian', value: 'debian'},
        {label: 'macOS', value: 'macos'},
        {label: 'Windows', value: 'windows'},
    ]}>

<TabItem value="debian">

```
sudo apt install libarchive-tools
curl -O https://dl.google.com/android/repository/platform-tools-latest-linux.zip
bsdtar xvf platform-tools-latest-linux.zip
```

</TabItem>

<TabItem value="macos">

```
curl -O https://dl.google.com/android/repository/platform-tools-latest-darwin.zip
tar xvf platform-tools-latest-darwin.zip
```

</TabItem>

<TabItem value="windows">

Run the following command to remove PowerShell's legacy curl alias for the current shell to avoid needing to reference it as `curl.exe` instead of `curl`:

```shell
Remove-Item Alias:Curl
```

```
curl -O https://dl.google.com/android/repository/platform-tools-latest-windows.zip
tar xvf platform-tools-latest-windows.zip
```

</TabItem>

</Tabs>

Next, add the directory containing the extracted files to the `PATH` environment variable:

<Tabs
    defaultValue="debian"
    values={[
        {label: 'Debian', value: 'debian'},
        {label: 'macOS', value: 'macos'},
        {label: 'Windows', value: 'windows'},
    ]}>

<TabItem value="debian">

```
export PATH=$PATH:$(pwd)/platform-tools
```

</TabItem>

<TabItem value="macos">

```
export PATH=$PATH:$(pwd)/platform-tools
```

</TabItem>

<TabItem value="windows">

```
$env:PATH = $env:PATH + ";$(pwd)\platform-tools"
```

</TabItem>

</Tabs>

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
