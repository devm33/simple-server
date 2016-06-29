# [simple-server](https://soundcloud.com/theshins/simple-song)

A simple node.js file server. PUT a file, GET a file.

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

### Port

Port for server to listen on. Default 8080

```
./index.js --port 8080
```

### Root

Absolute path to save files on server. Default directory root under current

```
./index.js --root /opt/files
```

### Url

Base url for GET requests. Default root

```
./index.js --url root
```
