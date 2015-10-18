# Example Weather App for [Ugh, Code](http://www.ughco.de)

This repository is for the example application which is used in http://ughco.de

## Installation

Note: This application requires Node JS!

1. Clone the repository:

  In your terminal type the following:

  ```Bash
  $ git clone https://github.com/ughcode/weather_app.git
  ```

  This will copy to your computer all the files in this repository.

2. Install the application's dependencies:

  In your terminal:

  ```Bash
  $ npm install
  ```

## From the Command Line (terminal)

```Bash
$ node weather_cli <REPLACE WITH ZIP CODES>
```

## From the Browser

Open weather.html from your browser!

Note that in order for the application to get your current position, it will
need to either run from FireFox or externally with running a local server.

To run a local server (at least on Mac):

```Bash
$ python -m SimpleHTTPServer
```

And then you can access your file in `http://localhost:8000` (the port may
vary, look at your server's logs!)

Or run it with FireFox ;-)
