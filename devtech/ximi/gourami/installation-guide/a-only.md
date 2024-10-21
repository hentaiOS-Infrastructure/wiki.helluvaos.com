---
sidebar_label: A-Only
title: Xiaomi Gourami A-Only Installation Guide
description: Installation Guide for installing hentaiOS to Xiaomi Gourami (Kona) A-Only devices
keywords:
    - install guide
    - xiaomi
    - gourami
    - apollo
    - xiaomi mi 10t
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# A-Only Installation Guide

## Before you start

1. **Keep a backup of your data.** Make sure to keep a backup of your files as the installaton will wipe your data.

2. **You must come from MIUI.** Make sure you come from MIUI and not using other ROM before installation. If you come from other ROM, flash MIUI and boot it once before continuing installation.

3. To obtain the required platform-tools, [Read here.](/docs/installation/installing-requirements)

4. You can download the latest required installkit [here.](https://get.hentaios.com/download?id=344db749b407c9f5&rv=2)

## Connect your device

1. **Enter Fastboot mode,** make sure your phone turned off. Press and hold the Power and Volume buttons for 3 seconds until the phone turns on. You will be in Fasboot mode.

   ![Fastboot](/img/install-assets/fastboot.svg)

2. Once your phone is in Fastboot mode, connect your phone to a computer using a USB Cable.
3. Once you connected your phone to a computer using a USB Cable, check your phone connection to the computer by executing `fastboot devices`
4. Once the device showed up in fastboot devices, continue with Sideloading the boot image with the following commands:

<Tabs
    defaultValue="lmi"
    values={[
        {label: 'POCO F2 Pro (lmi)', value: 'lmi'},
        {label: 'Mi 10T Pro (apollo)', value: 'apollo'}
    ]}>
<TabItem value="lmi">

``` bash
cd {directory where you extracted the installkit files}/lmi
fastboot flash dtbo dtbo.img
fastboot flash recovery recovery.img
```

</TabItem>
<TabItem value="apollo">

``` bash
cd {directory where you extracted the installkit files}/apollo
fastboot flash dtbo dtbo.img
fastboot flash recovery recovery.img
```

</TabItem>
</Tabs>

## Install from MIUI

1. **Enter Recovery mode** by pressing and holding the Power and Volume up buttons for 3 seconds until the phone turns on. You will be in Recovery mode.
2. Once your phone is in Recovery mode and shows “No Command”, hit Power button, while holding it, hit Volume + (Up) button.

    ![KeyCombination](/img/install-assets/key-combination.svg)

3. **Do a Factory Reset.** Use the volume buttons to move through the menu options, when “Factory Reset” is highlighted, press the Power button.

    ![WipeData](/img/install-assets/wipe-data.svg)

4. Use the volume buttons to move through the menu options, when “Install update through ADB” is highlighted, press the Power button.

    ![ADBInstall](/img/install-assets/adb-install.svg)

5. Flash the ROM through recovery with adb sideload command from your Mac/PC.

    ![ADBSideloadWindow](/img/install-assets/adb-sideload-window.svg)

6. Use the volume buttons to move through the menu options, when “Reboot to System” is highlighted, press the Power button.

    ![Reboot to System](/img/install-assets/reboot-system.svg)

# Sideloading Updates

1. **Enter Recovery mode** by pressing and holding the Power and Volume up buttons for 3 seconds until the phone turns on. You will be in Recovery mode.
2. Once your phone is in Recovery mode and shows “No Command”, hit Power button, while holding it, hit Volume + (Up) button.

    ![KeyCombination](/img/install-assets/key-combination.svg)

3. Use the volume buttons to move through the menu options, when “Install update through ADB” is highlighted, press the Power button.
4. Flash the ROM through recovery with adb sideload command from your Mac/PC.

    ![ADBSideloadWindow](/img/install-assets/adb-sideload-window.svg)
5. Use the volume buttons to move through the menu options, when “Reboot to System” is highlighted, press the Power button.
