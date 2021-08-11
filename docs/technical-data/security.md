# Security

This section describes the security requirements for the device.

## Android Verified Boot

Verified Boot is the process of verifying the integrity of the Android operating system.
It typically starts with a read-only portion of the device firmware which loads
code and executes it only if the integrity of the device is verified.

### Integrating with Buildsystem

Refer to [Android Verified Boot 2.0 Build System Integration](https://android.googlesource.com/platform/external/avb/+/refs/tags/android-11.0.0_r39/README.md#build-system-integration) for details on how to integrate verified boot into your build system.

Before getting started, Our private keys are available in `private_keys` repository. Clone the repository to `vendor/hentai/build/target/product/security`.

AVB is enabled with `BOARD_AVB_ENABLE` variable.

```
BOARD_AVB_ENABLE := true
```

By default, the algorithm `SHA256_RSA4096` is used with keys from `vendor/hentai/build/target/product/security` directory.

```
BOARD_AVB_ALGORITHM := SHA256_RSA4096
BOARD_AVB_KEY_PATH := $(PROD_CERTS)/hentai_rsa4096.pem
```

Devices with `vbmeta` partitions should configured to use [chained partitions](https://android.googlesource.com/platform/external/avb/+/refs/tags/android-11.0.0_r39/README.md#chained-partitions):

```
BOARD_AVB_VBMETA_SYSTEM := system system_ext
BOARD_AVB_VBMETA_SYSTEM_KEY_PATH := $(PROD_CERTS)/hentai_rsa2048.pem
BOARD_AVB_VBMETA_SYSTEM_ALGORITHM := SHA256_RSA2048
BOARD_AVB_VBMETA_SYSTEM_ROLLBACK_INDEX_LOCATION := 1
```

To prevent rollback attacks, the rollback index location should be set to a value greater than 0 and increased on a regular basis (we sets our index as our Security Patch timestamp). The rollback index can be set with the `BOARD_AVB_VBMETA_ROLLBACK_INDEX` variable:

```
BOARD_AVB_VBMETA_SYSTEM_ROLLBACK_INDEX := $(PLATFORM_SECURITY_PATCH_TIMESTAMP)
```

Some devices support the end-user configuring the root of trust to use, in this case, see [End-User Root of Trust Configuration](#end-user-root-of-trust-configuration) for details.

## End-User Root of Trust Configuration

This section describes the end-user configuration of the root of trust.

### Normal Devices

On sane devices, the boot loader supports a virtual partition with the name `avb_custom_key`. Flashing and erasing this partition only works in the UNLOCKED state. Setting the custom key is done like this:

```
avbtool extract_public_key --key key.pem --output pkmd.bin
fastboot flash avb_custom_key pkmd.bin
```

Erasing the key is done by erasing the virtual partition:

```
fastboot erase avb_custom_key
```

When the custom key is set and the device is in the LOCKED state it will boot images signed with both the built-in key as well as the custom key. All other security features (including rollback-protection) are in effect, e.g. the only difference is the root of trust to use.

When booting an image signed with a custom key, a yellow screen will be shown as part of the boot process to remind the user that the custom key is in use.
