---
sidebar_position: 1
---

# Introduction

This technical data enumerates the requirements that must be met in order for devices to be "Official" and shipped under helluvaOS/hentaiOS Buildsystem.

The use of “**MUST**”, “**MUST NOT**”, “**REQUIRED**”, “**SHALL**”, “**SHALL NOT**”, “**SHOULD**”, “**SHOULD NOT**”, “**RECOMMENDED**”, “**MAY**”, and “**OPTIONAL**” is per the IETF standard defined in [RFC2119](http://www.ietf.org/rfc/rfc2119.txt).

As used in this technical data, a "device maintainer" or "maintainer" is a person or organization developing a software solution running helluvaOS/hentaiOS. A "firmware build" or "build" is the software solution so developed.

To be considered compatible with helluvaOS/hentaiOS, builds MUST meet the requirements presented in this Techincal Data.

It is the responsibility of the device maintainer to ensure compatibility with this Technical Data.

## Technical Data Structure

### Requirement ID

Requirement ID is assigned for MUST requirements

- The ID is assigned for MUST requirements only.
- STRONGLY RECOMMENDED requirements are marked as [SR] but ID is not assigned.
- The ID consist of : Device Type ID - Condiditon ID - Requirement ID (e.g. C-0-0).

Each ID is defined as below:

- Device Type ID
  - C : Core (Requirements that applied to any devices)
  - D : Device-specific
- Condition ID
  - When the requirement is unconditional, this ID is set as 0.
  - When the requirement is conditional, 1 is assigned for the 1st condition and the number increments by 1 within the same section and the same device type.
- Requirement ID
  - This ID starts from 0 and increments by 1 within the same section and the same condition.

### Requirement ID for Device-specific changes

The Requirement ID starts with the corresponding section ID that is followed by the Requirement ID described above.

- The ID consists of: Section URL / Device Type ID - Condition ID - Requirement ID (e.g. [Something](404)/C-0-1).

## Device Types

While helluvaOS/hentaiOS provides a software stack that can be used for variety of devices, there are a few device types that have a relatively better established application distribution ecosystem.

All builds that do not fit into any of the described device types MUST still meet all requirements in the other sections of this Techincal Data.

### Device Configurations

For the major differences in hardware configuration by device type, see the device-specific requirements that follow in this section.

### Handheld Requirements

An **Handheld device** refers to builds that is typically used by holding it in the hand, such as an Phone, or tablet.

The device are classified as Handheld if they meet all the following criteria:

- Have at least msm8998 (Snapdragon 835) SoC at minimum.
- Have a power source that provides mobility, such as a battery.
- Have a physical diagonal screen size in the range of 3.3 inches (or 2.5 inches for devices which launched on an API level earlier than API 30) to 8 inches.

The additional requirements in the rest of this section available on [Android CDD Section 2.2.1](https://source.android.com/compatibility/android-cdd#2_2_1_hardware).

### Why are Legacy SoC no longer supported?

helluvaOS aims to provide reasonably stable and performant ROM for a wide range of devices. It can't do that once device support for a SoC has been deprecated and no
longer maintaned. Even if the community is able to maintain a SoC, it will be very difficult to make it fit into helluvaOS/hentaiOS. Unlike many other platforms, helluvaOS/hentaiOS has a much higher minimum standard than simply having devices that fully functional, as they also need to provide the expected level of Performance.

helluvaOS also has a high standard for performance of the hardware, and this standards are regularly advancing. The rapid pace of improvements has been slowing down, but each hardware generation still brings major imporvements. Over time, the older hardware become a substantial liability and holds back the project.
