# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2022-04-13
### Changed
- Added the `IDeckSummary` properties `name` and `color`

## [0.0.22] - 2022-03-31
### Added
- Added the `Health` and `Identification` Decks in `KnownSummaryIds`

## [0.0.21] - 2022-03-17
### Changed
- Added the `walletAddress` property inside the `IPaymentMethod`
- Fixed the `ISubscriptionPartial` `assigedTo` typo

## [0.0.20] - 2022-02-23
### Added
- Added the `File` property of the `AttachmentType`

## [0.0.18] - 2022-01-27
### Changed
- Replaced the `tag` field of the `ICard` interface
- Added the `tags` field inside the `IUserDocument` interface

## [0.0.17] - 2022-01-27
### Changed
- Replaced the `KnownSummaryIds` `vehicles` property with `rentals` and `agreements`

## [0.0.16] - 2022-01-27
### Changed
- Replaced the `ICard` `tag` property with `tags`

## [0.0.15] - 2022-01-26
### Added
- Added the enum for request type
- Added the new interface for requests

## [0.0.14] - 2022-01-26
### Changed
- Redesigned the `ICustomCardField` to be used to store the custom reminders inside the `ICard`
### Removed
- Removed the `otherReminder` and the `otherReminderRecurrence` fields from the `ICard` interface

## [0.0.13] - 2022-01-26
### Removed
- Removed the `INSPECTIONS`, `MAINTENANCES`, `PERMITS` and `RENTS` deck support

## [0.0.12] - 2021-12-10
### Changed
- Added the `adminShareWithUserIds` property inside the `ICardPartial`
- Added the `tag` property inside the `ICard`

## [0.0.11] - 2021-12-07
### Changed
- Added the new emnum value `INSPECTIONS` to the `KnownSummaryIds` enum

## [0.0.10] - 2021-11-24
### Changed
- Added the `writePermission` property to the `IShare` interface

## [0.0.9] - 2021-11-19
### Changed
- Adapted the `ICard` and `ICardPartial` interfaces to reflect the **V11** datastore model

## [0.0.8] - 2021-10-07
### Changed
- Fixed the `ICardPartial` and `ICard` interfaces

## [0.0.7] - 2021-10-07
### Changed
- Added the `createdTs` and the `updatedTs` fields the `ICardPartial` interface

## [0.0.6] - 2021-10-06
### Changed
- Fixed the `ICard` interface

## [0.0.5] - 2021-10-06
### Changed
- Add some fields to the `ICard`

## [0.0.4] - 2021-10-06
### Added
- Added new values to the `KnownCategoryIds` enum

## [0.0.3] - 2021-10-04
### Changed
- Added some fields to the `ICard` and the `ICardPartial` interfaces

## [0.0.2] - 2021-10-03
### Added
- Adapted the interfaces to the **V8** datastore model

## [0.0.1] - 2021-09-29
### Added
- Imported the interfaces and enums form the `@kaeo/firebase` project

## Links