# Weather app

A web application that shows user weather in his city.
To detect location uses two variants, standard browser API, and as fallback https://ipinfo.io.
https://openweathermap.org - API that gives application current weather.

Future plans:

- Rewrite legacy moment.js to date-fns
- Add recommit and prepush hooks
- Rewrite CSS to styled-components
- Rewrite application to TypeScript
- Adjust test coverage up to 80+%
- Add new features, like the forecast for the current city with different selectors
- Add the ability to change the main city
- Add the ability to search cities and add them to the page

Technologies/Tools

- React - as main JS rendering library
- Next.js - as fast, modern, almost zero config build system
- Jest/Enzyme - for testing
- SCSS - for styling, came from the initial version of this project, will be changed to styled-components

Install node_modules via

```bash
npm install
# or
yarn
```

Then you could run project

```bash
npm run dev
# or
yarn dev
```

Or create a build via

```bash
npm run build
# or
yarn build
```
