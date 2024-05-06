---
sidebar_label: Reporting Issues
---

# Reporting issues

## Reporting Etiquette

1. Try to be as descriptive as possible.
2. Describe how to reproduce the issue.
3. Attach bug report with the issues.

## "DO NOT REPORT" list

1. Issues from unofficial builds
2. Asking for installation help
3. Feature requests

## Reporting Guidelines

1. Any modifications (For example, Magisk, Xposed, or Third-Party Modifications affecting device behaviors) are not eligible for support from our team and should NOT be reported to any of our Team members in any circumstances.
2. Issues specific to an app that affect the device (For example, a particular overclocking app) should NOT be reported to our team but to the respective app's developer.

## Capturing bugreport

A bug report contains device logs, stack traces, and other diagnostic information to help you find and fix bugs in your app. To capture a bug report from your device, use the Take bug report developer option on the device, or the `adb bugreport` command on your development machine.

:::info
To take a bug report, you must have Developer options enabled on your device to access the Take bug report option.
:::

### Capturing bugreport directly from a device

1. Go to Developer Options.
2. In Developer options, tap Take bug report.
3. Select the type of bug report you want and tap Report.
4. After a moment, you get a notification that the bug report is ready, attach that to the issue ticket you filed.

To share the bug report, tap the notification.

### Capturing bugreport with `adb`

If you have only one device connected, do

```shell
adb bugreport {bugreport output path}
```

If you don't specify a path for the bug report, it is saved to the local directory.

If you have multiple devices connected, you must specify the device with the `-s` option. Run the following `adb` commands to get the device serial number and generate the bug report:

```shell
$ adb devices
List of devices attached
emulator-5554      device
8XV7N15C31003476   device

$ adb -s 8XV7N15C31003476 bugreport
```

## Reporting it

### Distribution issues

Report them to the Support Chat or directly at our [GitLab](https://gitlab.hentaios.com/hentaios/issue-trackers/distribution), we prefer Support Chat as it's a lot more flexible for us to queue.
