tessel-climate-fluent-logger
============================

Send climate sensor data from [Tessel](https://tessel.io/) to [fluentd](http://www.fluentd.org/).

## Setup

Connect [ClimateModule](https://tessel.io/modules#module-climate) to your Tessel port A.

```
# setup WiFi.
$ tessel wifi -n YOUR_WIFI_SSID -p YOUR_WIFI_PASSWORD
```

```
# setup this application.
$ git clone git@github.com:mia-0032/tessel-climate-fluent-logger.git
$ cd tessel-hygrothermograph-tweetbot
$ npm install
```

```
$ mv settings.sample.js settings.js
# configure your fluentd setting.
$ vi settings.js
```

## Test Run

```
$ tessel run index.js
```

## Stand-alone Run

```
$ tessel push index.js
```
