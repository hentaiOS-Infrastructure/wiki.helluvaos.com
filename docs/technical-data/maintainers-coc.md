---
sidebar_position: 2
---

# Maintaining Device

## Code Of Conduct

### You (as Maintainer)

1. [C-0-0] MUST Upload All device sources are used for building the image on the hentaiOS-Devices Organization. these should be fully buildable. Using external repositories isn't allowed unless it's coming from LineageOS or Sony Open Devices Project (SODP).

2. [C-0-1] MUST Upload Changelogs for each build. These RECOMMENDED be user-friendly. simplifying the changelog for the average user who doesn't know technical jargon like SafetyNet, but still illustrates what changes have been made since the last update.

3. [C-0-2] MUST have conducted internal tests before pushing OTA Updates to users. Each build has to be thoroughly checked by the maintainer and all hardware and software functionality MUST be tested before the build is pushed to production.

4. [C-0-3] MUST maintain authorship of Git commits that are pushed. These are mandatory requirements for ALL repositories, Force-pushes are acceptable.

5. [C-0-4] In the event of any disagreements between maintainers, sort them via Direct Messages, don't take any of that into chats or threads, approach the Internal Boards if you want something sorted out quickly.

6. [C-0-5] MUST NOT add any of the following:
    > Any features in their device-specific packages, e.g XiaomiParts, KCAL, Camera API2 Enforcement, etcetera, in an exception if that feature is available on stock firmware, e.g Alert Slider and Offscreen Gestures for OnePlus Devices, Fingerprint Gestures, Dirac Sound, or any Audio Enhancer that's part of stock firmware (with exception of any Dolby products), otherwise, it can't be shipped.

7. [C-0-6] You MUST NOT ship TWRP prebuilt, it MUST ship AOSP Recovery.

8. [C-0-7] You MUST NOT including proprietary dependencies into Public Tree except if it distributed as a BLOB (Binary Large OBject).

9. [C-0-8] You MUST have checked that your device tree does not include any BLOB with Copyright, for example, Megvii.

**If any of these rules are violated, The Management Board will take direct action against the maintainer with or without prior warning.**

## Maintainers Requirements

Before you apply to add your device into Official Devices

If you were unable to follow any of these following requirements, you're unfit for the maintainer status. No question, and You (as Maintainer):

1. [C-0-0] MUST own the device. Blind and untested builds is not allowed. Devices that have minimal hardware difference are allowed to be maintained, as long you still maintaining the root device.

2. [C-0-1] MUST have a good knowledge of Git and Repo.

3. [C-0-2] STRONGLY RECOMMENDED have your device sources public.

4. [C-0-3] MUST have your device sources commits properly authorshipped.

5. [C-SR] STRONGLY RECOMMENDED to include BUG ticket for changes if available.

6. [C-0-4] MUST amending the former requirement, the source of the device you have to publish is the one the Real one that's used to build the image.

7. [C-0-5] MUST following the [Device Requirements](device-requirements).

After applying and your application is accepted, you'll receive an E-mail or Direct Message from the recruitment and device board committee about the acceptance of your application.

## Design Requirements

For unifying the user experience across devices, You (as Maintainer):

### Optionals

  1. [C-SR] STRONGLY RECOMMENDED to be able to work with Splash Screen.

  2. [C-0-0] MUST Following our branding guidelines for your publishing of production builds.

### Important

  1. [C-0-1] MUST NOT Modify any of our standardized design and branding guidelines.
