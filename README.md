# Hack for Refugees Showcase site

## Develop

```bash
npm install
gulp
```
Visit [localhost:3000](http://localhost:3000) in browser.

We need to auth to GitHub, and need login and password for a user. We use environment
variables for that in a separate `.env` file, like this:

```bash
GH_HOST=http://localhost:3000 # Note that atm both protocol and port is necessary for hackshots to load
GH_USER=<github username>
GH_PASS=<github password>
```
This is automatically injected into the app.

Gulp tasks:
```bash
gulp        # Defaults to gulp serve
gulp server # Start Express server on localhost:3000
gulp css    # Compile Scss to minified CSS
gulp watch  # Watch and compile Scss to CSS on change
gulp serve  # Runs server *and* watches Scss
```
Using the code for a different org? Don't forget to change the team GitHub ID hard coded in [winners.json](winners.json) and `OWNERS_ID` in [teams.js](lib/teams.js).

We take PRs!
