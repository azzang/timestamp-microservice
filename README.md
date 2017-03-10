# Timestamp Microservice
## Functionality:
* checks whether parameter string contains either a unix timestamp or a natural language date (e.g. January 1, 2016)
* If so, both the Unix timestamp and the natural language form of the date are returned
* Else, null is returned for both properties

## URL Examples
``https://timestamp-ms.herokuapp.com/December%2015,%202015``

``https://timestamp-ms.herokuapp.com/1450137600``

_* Note: The service expects spaces in natural language dates to be percent encoded._

_** Note: The service assumes Greenwich Mean Time_

## Response Examples
{ "natural": "June 4, 1955", "unix": -460018800 }

{ "natural": null, "unix": null }
