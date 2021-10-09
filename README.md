
# Mach Eight technical test

## Project

The project is to write a function that searches through NBA player heights
based on user input. The raw data is taken from
[here](https://www.openintro.org/data/index.php?data=nba_heights).  The data is
served in json format by the endpoint
[here](https://mach-eight.uc.r.appspot.com/).

The task is to create an application that takes a single integer input. The
application will download the raw data from the website above
(https://mach-eight.uc.r.appspot.com) and print a list of all pairs of players
whose height in inches adds up to the integer input to the application. If no
matches are found, the application will print "No matches found"

Sample output is as follows:
```
> app 139

- Brevin Knight         Nate Robinson
- Nate Robinson         Mike Wilks
```

## Install and use
* The test should be performed on a system with [node.js](https://nodejs.org/es/) installed.

Clone the repository in your local machine:

```shell
$ git clone https://github.com/cjcruzrivera/Mach_technical_test.git
$ cd Mach_technical_test/
```

Install the dependecies

```shell
$ npm install
```

Execute the application:

```shell
$ node main.js n
```
* n should be a valid integer




