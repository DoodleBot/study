# Adobe Screens Session Video Notes

## Architecture

Can publish custom content based on location, etc

Can take data from multiple sources (SAP, Hybris) and can even generate images based on pricing data.

AEM Screens App has offline first methodology, meaning that it caches content so that it can display content even when it's offline

AEM Server => AEM Screens App (on a media player) => Digital Signage Display

## Recent/Future Improvements

- watch dogs for player interruptions
- interruption strategy
- self healing
- cloud updates
- cloud service
- channel wizard
- Editable Templates
- Bulk attribute changes
- tagging rule builder
- omni channel authoring

## OMNI Channel

Adobe's marketing goal is to bring all marketing campaigns under one roof (email, website, billboard, signage, social media)

## AEM => Player

### AEM

- Registration Service (registers devices)
- Device Service (ping, send config)
- DCC (screens UI)
- Bulk offline update services
- Screens monitoring email (notify if device not pinging)
- Content Sync

### Player

- Content iFrame/Webview (video, image, AEM component)
- Window IO
- Firmware
- Plugins

### Firmware Services

- Admin
- Cache
- Command
- Config
- DeviceInfo
- Firmware
- Filesystem
- Httpserver
- Log
- Network
- Packagemanager
- Platform
- Preferences
- Reboot
- Orchestrator
- Screenshot
- Statusinfo
- Storage
- Update

## Players Available to Download

download.macromedia.com/screens/index.html

go to chrome://extensions and upload the unzipped folder

go to chrome://apps

click on app, it will show failure

in config, set server to https://author-screensdemo.adobecqms.net

localhost:24502 shows content folder

## Project

- by default, no offline mode. must click "update offline content" to create cache for offline viewing

## Devices

- List of all players
- assign location to device

## Location

- Instance of screen
- click assign channel to add channel
- if multiple channels you can set channel priorities (higher number first)
- can set supported events to determine when to show the channel (initial load, idle, timer, user interaction, etc)

## Channel

- content to be shown on screen in location(s)
- can be created from display templates

Need to select Update Offline Content to get updates published to device if offline

### Pending Launches

Scheduled content updates

### Developer Mode

under Channel tab in a channel

can force channel to be online

updates would be uploaded to device immediately

**can provide a css class, not sure what that field is for**

not for production 

## Dashboard

Can access device information, can clear the cache and has many other tools for maintaining the device.

### Status

Shows if screen is active and connected

### Screenshots

Can take a screenshot of current state of display

### Logs

Can access log files

### Preferences

#### Admin UI

Can be toggled on/off in prefs

#### Activity UI

If toggled on it will display activity status in upper right corner

#### Channel Switcher

**Long press in bottom right corner will allow user to see all channel options to be displayed**

Can be toggled on/off in prefs

#### Auto Screenshot

automated screenshots. Can be used to observe device status

#### Pref settings

beyond some standard prefs, you can set a reboot schedule and log settings.

## Video 2 - Implementation Example

He's creating a global example

global => us => illinois => chicago => region => store(s)

Is creating a location and channel within each folder

Apparently there is supposed to be inheritance of channels from global down

Each store can have multiple displays within each

He's placing the channels within the locations folders because it's easier to sort them because they're one-to-one with the locations. If they were in the channels folder they would need unique names and it would be difficult to know what matched to specific locations.

He's setting priorities one higher at each level so the store will override the parent, and that will override its parent.

Rather than putting content into a channel, you can put another channel into it to inherit.

Having to assign channels from each location to the display.

Embedded sequence example shows channels being cycled in loop.

Can schedule when to activate content within embedded sequence

He had to refresh his browser to show the scheduled activation, but it did remove it after time was up.

### Future Publish

Creates a special channel that will publish at a certain time

Click on Create Launch

can specify a launch date

edit the channel

### Author to Publish

Click on Manage Publication under your project

If first time publishing, publish everything. Otherwise, only include modified pages.

## Session 2

search for featurepack-screens in packages to see if you have screens installed

### AEM Configuration Manager

can setup monitoring notifications to email out status

can configure analytics for screens. Screens saves analytics events when it is offline and will send them when able to.

#### Authoring Agents

##### Default Agent

Copy Default Agent to create instances

##### Reverse Replication Agent

Used by device to deliver content back to the server, like screenshots.

##### Screens Certification Agent

tests if replication is happening

#### Analytics

When running test instance, you can go into dev tools and look at Application tab. Under IndexedDB/ScreensDB/ScreensStore you can see analytics information. Network tab will show packets that start with `svc.ping.json?id=screens-` that are sent to the server at the interval specified in the config.

### Troubleshooting

- What to do if no channel is applied
- What to do if you publish and no content is displayed (likely start date is different time zone between server and device)
- May need to clear channel content or clear cache for new content to display on device
- Collect Logs and look at the log files to see what errors might be happening

### Locations of device files in CRX/DE

### ACL

Author permissions

There is a "Setting up ACLs" page on AEM docs that talks about different author types and what their permissions should be

### Screens Issues

Can raise tickets with Adobe if we run into issues we can't resolve.

## Session 3

Schedules folder is actually collections of channels

There are 3 replications agents

* default agent
* reverse agent
* screens agent

for building out SPAs, use AEM Sites Application to run on Adobe Screens
