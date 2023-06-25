---
sidebar_label: Installing
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation Guide

## Before you start

1. **Keep a backup of your data.** Make sure to keep a backup of your files as the installaton will wipe your data.

2. **Use Google ADB Driver**! Make sure to install Google ADB Drivers before continuing.

3. To obtain the required platform-tools, [Read here.](/docs/installation/installing-requirements)

## Connect your device

1. **Enter Fastboot mode,** make sure your phone turned off. Press and hold the Power and Volume buttons for 3 seconds until the phone turns on. You will be in Fasboot mode.

   ![Fastboot](/img/pixel-install-assets/fastboot.svg)

2. Once your phone is in Fastboot mode, connect your phone to a computer using a USB Cable.
3. Once you connected your phone to a computer using a USB Cable, check your phone connection to the computer by executing `fastboot devices`
4. Once the device showed up in fastboot devices, continue with Sideloading the boot image with the following commands:

<Tabs
    defaultValue="brooklyn"
    values={[
        {label: 'Google Silicon 1 (gs101)', value: 'brooklyn'},
        {label: 'Google Silicon 2 (gs201)', value: 'chelsea'}
    ]}>
<TabItem value="brooklyn">

``` bash
cd {directory where you extracted the installkit files}/{devicename}
fastboot flash boot boot.img
fastboot flash dtbo dtbo.img
fastboot flash vendor_boot vendor_boot.img
```

</TabItem>
<TabItem value="chelsea">

``` bash
cd {directory where you extracted the installkit files}/{devicename}
fastboot flash boot boot.img
fastboot flash dtbo dtbo.img
fastboot flash init_boot init_boot.img
fastboot flash vendor_boot vendor_boot.img
fastboot flash vendor_kernel_boot vendor_kernel_boot.img
```

</TabItem>
</Tabs>

## Installing

1. **Enter Bootloader mode.** Press and hold the Volume Down button and Power button at the same time for 10-15 seconds.
2. Use the volume buttons to change the menu options until "Recovery Mode" is displayed on screen. To select, press the Power button once.

    ![Recovery Mode](/img/pixel-install-assets/recovery-mode.svg)

3. On your screen, “No command” is displayed. Press and hold the Power button. While you hold Power, press the Volume Up button and let go of both buttons quickly.

    ![No Command](/img/pixel-install-assets/key-combination.svg)

4. Android Recovery options should be displayed. With the volume buttons, scroll to "Wipe data/factory reset" and press the Power button.

     ![Factory Reset](/img/pixel-install-assets/factory-reset.svg)

5. With the volume buttons, scroll to "Factory data reset" and press the Power button.
6. Factory reset should start. At the bottom of your screen, when the reset is finished, "Data wipe complete" is displayed.
7. Use the volume buttons to move through the menu options, when “Apply update from ADB” is highlighted, press the Power button.

    ![Apply Update](/img/pixel-install-assets/apply-update.svg)

8. Flash the ROM through recovery with adb sideload command from your Mac/PC.

    ![ADBSideloadWindow](/img/install-assets/adb-sideload-window.svg)

9. With the volume buttons, scroll to "Reboot system now" and press the Power button.

    ![Reboot Now](/img/pixel-install-assets/reboot-now.svg)

# Sideloading Updates

1. **Enter Bootloader mode.** Press and hold the Volume Down button and Power button at the same time for 10-15 seconds.
2. Use the volume buttons to change the menu options until "Recovery Mode" is displayed on screen. To select, press the Power button once.

    ![Recovery Mode](/img/pixel-install-assets/recovery-mode.svg)

3. On your screen, “No command” is displayed. Press and hold the Power button. While you hold Power, press the Volume Up button and let go of both buttons quickly.

    ![No Command](/img/pixel-install-assets/key-combination.svg)

4. Use the volume buttons to move through the menu options, when “Apply update from ADB” is highlighted, press the Power button.

    ![Apply Update](/img/pixel-install-assets/apply-update.svg)

5. Flash the ROM through recovery with adb sideload command from your Mac/PC.

    ![ADBSideloadWindow](/img/install-assets/adb-sideload-window.svg)

6. With the volume buttons, scroll to "Reboot system now" and press the Power button.

    ![Reboot Now](/img/pixel-install-assets/reboot-now.svg)
