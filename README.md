# MTABuddy

Comp 426 final project from team Spicy10.js

## Development

### Frontend

- `npm start` starts the Webpack dev server
- `npm run build` builds the site and outputs the result to `dist/`

### Backend

See instructions in [the backend's README](https://github.com/andrea-3000/mta-vis).

### Basic Project Structure

- `server/` contains a modified version of the basic 426 backend server

- `frontend/` is a series of html, css, and javascript files compiled with webpack

- `dist/` is the output destination for the compiled webpack results (and where the site is hosted from).

### To Do List

- [ ] Figure out ProtoBuf implementation that will let us parse [GTFS feeds](https://developers.google.com/transit/gtfs-realtime/) from the MTA

- [ ] Implement map-driven visualization to see the train locations in realtime

- [ ] Implement login / user data stores

- [ ] Implement social features like finding other users, watching friends on the map
