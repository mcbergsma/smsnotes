# Notes from SMS Messages

## Overview
Hands-free note taking tool. 

Intended use: Save twilio number into your phone, and the use something like "Hey Siri" to send a text to that saved contact. Those notes are stored online, either in a DB, cloud doc, etc.

Works with Twilio account to receive sms messages and push them into MongoDB.

Messages can be viewed / deleted by appending the number you send them from in to the url (/sms/+##########).

Create a Twilio account with some credits, register a number, and set the messaging webhook to /api/addnote

Create a mongoDB server insance with mlab or other provider.

Created in response to the idea from Tiago Forte (@fortelabs) for hands-free note taking during audio books.

## Authors
Created by Mike Bergsma (@mcbergsma)
