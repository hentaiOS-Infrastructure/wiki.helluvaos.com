---
sidebar_position: 5
---

# Device Requirements

The Device: 

- [C-0-0] MUST built with [SELinux](https://source.android.com/security/selinux) Enforcing.

- [C-0-1] MUST capable of [FBE (File-Based Encryption)](https://source.android.com/security/encryption/file-based),

- [C-0-2] MUST have the same hardware compatibility following the stock firmware, i.e. if IR Blaster works in stock firmware, it has to work on helluvaOS/hentaiOS (Unless an exception has been granted by QA Board),

- [C-0-3] MUST pass SafetyNet OOB (Out-Of-Box) without any third-party modifications. Custom build fingerprints may be used as per our guidelines.

- [C-0-4] MUST not including any unused overlays and packages. This includes but is not limited to packages not being built, packages that didn't work, obsolete and deprecated packages, untested and placebo "tweaks" or any packages that introduced any unnecessary and/or unwanted features.

- [C-0-5] MUST NOT require a lot of patches, and if a patch has to be applied for it, it has to be under the following

    - Needed for building the image, boot, or having the device working properly (e.g Fingerprint-On-Display)
    - Proper authorship and commit message
    - Be as minimal and polished as possible
