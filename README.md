# REACT-SKYWALK3R

SKYWALK3R uses React-Three/Fiber to render 3D elements while utilizing the helpers and abstractions of React-Three/Drei to give users the ability to tour our solar system in their browser. Free roam through our star scape in first person and click on any planet, moon, or even the Sun to view it's mass, density, and gravity - all pulled from the Solar System Opendata API. 

## Controls

This application provides no true "movement" or "zooming", rather first person view is controlled by the 'W' 'A' 'S' 'D' keys which dynamically re-position the camera on key press/ over duration of key press. Left-clicking the mouse will also "move" the user forward while right-clicking simultaneously will freeze the user in place for "view" mode. The mouse may also be used for changing view direction. Raytracing allows for click events to fire on three dimensional elements which SKYWALK3R takes advantage of. When clicking on the Sun, planets, or moons the most current data for the event target is displayed in the viewport. On the keypress of "Spacebar" this information will be removed.

<img width="1152" alt="Screen Shot 2021-10-13 at 9 27 54 PM" src="https://user-images.githubusercontent.com/72520699/137235197-df4bd510-1715-447a-9d64-1ca332979ccf.png">

<img width="1152" alt="Screen Shot 2021-10-13 at 9 27 11 PM" src="https://user-images.githubusercontent.com/72520699/137235202-57ad2478-7571-47cc-9377-acbb91e82fce.png">

<img width="1152" alt="Screen Shot 2021-10-13 at 9 26 17 PM" src="https://user-images.githubusercontent.com/72520699/137235208-94260371-c6c4-4056-8da9-d6af69cf064f.png">

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To start server on port 8080

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Open the file `dist/index.html` in your browser

