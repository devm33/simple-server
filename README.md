# simple-server

A simple node.js origin server

<https://soundcloud.com/theshins/simple-song>

## Running

```sh
npm install
./index.js
```

## Testing

Upload a test file

```
curl localhost:8080/some/path/file.json --upload-file package.json
```

Check to see it was written to disk

```
ls -R root
```

Then get it from <http://localhost:8080/root/some/path/file.json>

## Options

TODO
