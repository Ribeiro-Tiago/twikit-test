# Twikit Test

## How to run (dev mode)

- install dependencies > `yarn install`
- serve app > `yarn start`
- open browser and go to https://localhost:4200

## How to run in docker (prod-ish mode)

Needs some improvements

- build image > `docker build -t twikit-test .`
- run container > `docker run -d -p 8080:80 twikit` (or whichever port you wanna run it on)
- go to `localhost:8080/index.html`

## Subtask 5 (Do you see any UX improvements to make it more user-friendly? If so, which ones? Don’t implement these, just provide a list of improvements.)

- improve animations in the list (adding when it's sorted descending and when change sorting)
- implement another UI (don't really have a designer bone, so designs that I come up with are usually very poor)
