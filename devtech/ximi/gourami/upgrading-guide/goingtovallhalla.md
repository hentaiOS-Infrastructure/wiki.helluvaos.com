---
sidebar_label: Vallhalla
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrading to Vallhalla (VA11 HALL-A, September Security Rollups)

## Upgrading recovery and boot images

1. **Enter Fastboot mode,** make sure your phone turned off. Press and hold the Power and Volume buttons for 3 seconds until the phone turns on. You will be in Fasboot mode.

   ![Fastboot](/img/install-assets/fastboot.svg)

2. Once your phone is in Fastboot mode, connect your phone to a computer using a USB Cable.
3. Once you connected your phone to a computer using a USB Cable, check your phone connection to the computer by executing `fastboot devices`
4. Once the device showed up in fastboot devices, continue with Sideloading the boot image with the following commands:

<Tabs
    defaultValue="alioth"
    values={[
        {label: 'A-Only Devices', value: 'a-devices'},
        {label: 'POCO F3 (alioth)', value: 'alioth'},
        {label: 'POCO F4 (munch)', value: 'munch'}
    ]}>
<TabItem value="a-devices">

``` bash
fastboot flash dtbo dtbo_gourami.img
fastboot flash recovery recovery_DEVICENAME.img
```

</TabItem>
<TabItem value="alioth">

``` bash
fastboot flash dtbo dtbo_gourami.img
fastboot flash boot boot_alioth.img
fastboot flash vendor_boot vendor_boot_alioth.img
```

</TabItem>
<TabItem value="munch">

``` bash
fastboot flash dtbo dtbo_gourami.img
fastboot flash boot boot_munch.img
fastboot flash vendor_boot vendor_boot_munch.img
```

</TabItem>
</Tabs>

## Sideloading

1. **Enter Recovery mode** by pressing and holding the Power and Volume up buttons for 3 seconds until the phone turns on. You will be in Recovery mode.
2. Once your phone is in Recovery mode and shows “No Command”, hit Power button, while holding it, hit Volume + (Up) button.

    ![KeyCombination](/img/install-assets/key-combination.svg)

3. Use the volume buttons to move through the menu options, when “Install update through ADB” is highlighted, press the Power button.
4. Flash the ROM through recovery with adb sideload command from your Mac/PC.

    ![ADBSideloadWindow](/img/install-assets/adb-sideload-window.svg)

5. Use the volume buttons to move through the menu options, when “Reboot to System” is highlighted, press the Power button.
