# Notes from SMS Messages

## Overview
Hands-free note taking tool. 

Intended use: Save twilio number into your phone, and the use something like "Hey Siri" to send a text to that saved contact. Those notes are stored online, either in a DB, cloud doc, etc.

## Config

Works with Twilio account to receive sms messages and push them into MongoDB.

Messages can be viewed / deleted by appending the number you send them from in to the url (/sms/+##########).

Create a Twilio account with some credits, register a number, and set the messaging webhook to /api/addnote

Create a mongoDB server insance with mlab or other provider.

Built on Node 7.7.4. npm install should get it running. Defaults to port 4000.

Created in response to the idea from Tiago Forte (@fortelabs) for hands-free note taking during audio books.

## Deploy on NOW
NOW makes it easy to launch a scalable site without having to manage a server, permissions, security etc. They offer a free version, but it does make your source code and logs publicly available.
More info: https://zeit.co/now

Install now globally

  `npm install now -g`

Customize variables.env and rename to variables.env.now

Deploy to NOW by typing

  `now`

Follow the prompts to create an account and get your custom URL. The free version of now open-sources your code, so don't put anything security related in the code.

## Todo
- Add additional security to view notes
- Make notes more easily exported / sorted

## Authors
Created by Mike Bergsma (@mcbergsma)
