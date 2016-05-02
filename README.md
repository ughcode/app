# Example Weather App for [Ugh, Code](https://ughco.de)

This repository is for the Weather App used as an example throughout the book
[Ugh, Code](https://ughco.de)

You can see the final application live [here](https://ughco.de/app/index.html).

## Installation

1. Clone this repository:

  In your Terminal type the following:

  ```Bash
  $ git clone https://github.com/ughcode/weather_app.git
  ```

  This will copy to your computer all the files in this repository.

2. Change the `apiKey` in `final/cli/weather.js` and `final/web/weather.js` to
   the one you get from the [Open Weather Map
   site](https://home.openweathermap.org/users/sign_up) after signing up.

### To run from the Command-Line (Terminal)

1. Verify that you have [Node.js](https://nodejs.org) installed on your
   computer by typing the following in your Terminal:

  ```Bash
  $ node -e "console.log(1+1)"
  ```

  If you got the number 2 on the screen, then you're golden. If not, go to the
  link above and download and install Node.js.

2. CD into the `final/cli` directory and install our application's dependencies
   (listed inside `final/cli/package.json`):

  ```Bash
  $ cd final/cli
  $ npm install
  ```

2. Run the app:

```Bash
$ node final/cli/weather_cli <REPLACE WITH ZIP CODES>
```

### To run from the Browser

Just open `final/web/index.html` from your browser!

Note that in order for the application to get your current position, it will
need to either run on FireFox or externally with running a local server.

To run a local server (at least on Mac):

```Bash
$ python -m SimpleHTTPServer
```

And then you can access your file in `http://localhost:8000` (the port (8000)
may vary, look at your server's logs!)

