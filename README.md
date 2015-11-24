# Example Weather App for [Ugh, Code](http://www.ughco.de)

This repository is for the Weather App used as an example throughout the book
[Ugh, Code](http://ughco.de)

You can see the application live [here](http://ughco.de/example/weather.html).

## Installation

1. Clone this repository:

  In your Terminal type the following:

  ```Bash
  $ git clone https://github.com/ughcode/weather_app.git
  ```

  This will copy to your computer all the files in this repository.

2. CD into the `final` directory:

  ```Bash
  $ cd final
  ```

3. Install the application's dependencies (listed in `package.json`):

  ```Bash
  $ npm install
  ```

### To run from the Command-Line (Terminal)

(Note: You will need [Node JS](https://nodejs.org) installed)

```Bash
$ node weather_cli <REPLACE WITH ZIP CODES>
```

### To run from the Browser

Open weather.html from your browser!

Note that in order for the application to get your current position, it will
need to either run from FireFox or externally with running a local server.

To run a local server (at least on Mac):

```Bash
$ python -m SimpleHTTPServer
```

And then you can access your file in `http://localhost:8000` (the port (8000)
may vary, look at your server's logs!)

Or run it with FireFox ;-)

