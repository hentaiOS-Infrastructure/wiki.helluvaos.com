# Frequently Asked Questions

1. **The command isn’t working?** Make sure you have fastboot binary in the same folder or installed systemwide and the ZIP is properly downloaded and moved to the same folder

2. **USB not detected during sideload?** Try unplugging your USB port and plug it in again, and it should be detected.

3. **Why I can't flash builds before VA-11 HALL-A?** Due to filesystem changes (ext4 to EroFS), new DTBO, recovery, boot images, and vendor boot are required to install, and we don't keep old images to reserve space within our storage. Current images that we distributed only can usable starting with VA-11 HALL-A (September).
