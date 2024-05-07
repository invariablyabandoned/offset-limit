# Offset Limit Presentation

Intended to be run using https://github.com/cloudogu/reveal.js-docker as shown below

## Development (with hot reloading)

```sh
docker run --rm \
    -v ./docs/slides:/reveal/docs/slides \
    -v ./images:/reveal/images \
    -e TITLE='Offset Limit' \
    -p 8000:8000 -p 35729:35729 \
    cloudogu/reveal.js:dev
```

## Production (for actual presentation)

```sh
docker run --rm \
    -v ./docs/slides:/reveal/docs/slides \
    -v ./images:/reveal/images \
    -e TITLE='Offset Limit' \
    -p 8000:8000 \
    cloudogu/reveal.js
```
