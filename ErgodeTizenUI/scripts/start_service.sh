#!/usr/bin/env bash

sdb.exe forward tcp:8109 tcp:8109
tz.exe run ../ -p org.ergode.ErgodeTizenBridge -s emulator-26101
