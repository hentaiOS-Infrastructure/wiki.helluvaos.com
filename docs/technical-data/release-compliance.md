---
sidebar_position: 3
---

# Release Compliance
To make sure helluvaOS/hentaiOS have a standard for Quality Assurance for every build pushed, we have a set of Release Compliance Code of Conduct as follows:

## Release tagging

### Internal
The build is considered initial (e.g Under bringups) and requires a extensive testing.

### Internal Beta
Builds that's under initial stage and already stabilized enough with more or less than 5 known issues.

### Open Beta
Builds that's ready for Open Testing with more or less than 3 known issues.

### Golden Master
Builds that's ready for Production with no more than 1 known issues.

### Release
Build is ready for Production with no blocking known issues.

## Known Issue Definitions

### STOPSHIP
A feature that is known to be broken and can't be shipped temporairly.

### TEMPBLOCKSHIP
A feature or changes that will not be shipped temporairly for defined reasons.

### BLOCKSHIP
A feature or changes that will not be shipped.

### Non-Blocking Known Issues
Issues that wasn't arrived from helluvaOS/hentaiOS, this includes Upstream Issue that's unable to fixed from our side, Application-specific issues, known Hardware issues, and Unsupported modifications (e.g. Rooting, Magisk incl. Modules, Substratum)