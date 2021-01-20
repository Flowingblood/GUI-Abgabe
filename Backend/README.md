# Swagger generated server

## Overview
This server uses the [Connexion](https://github.com/zalando/connexion) and [OpenAPI-Spec](https://github.com/swagger-api/swagger-core/wiki) library on top of Flask.

## Requirements
Python 3.7.0+

## Usage
To run the server, please execute the following from the root directory:

```
pip3 install -r requirements.txt
python3 -m seb-server.py
```

and open your browser to here:

```
http://localhost:5000/
```

You can check the Swagger definition here:

```
https://editor.swagger.io/
```
By copy and paste the content of the yml file.

## JavaScript, CSS, HTML

- HTML files should be saved in: 
```
  seb_server/templates/
```
- CSS files can be saved in: 
```
  seb_server/static/css/
```
- JavaScript files can be saved in: 
```
  seb_server/static/js/
```

## Potential Problems

- flask does not see change in .js or .css files !

Ultimately this is a frustrating browser cache issue, which can be solved by forcing the browser to do a "hard refresh", which is going to be a browser/OS dependent keystroke, but generally this works:
```
Windows: Ctrl+F5
Mac: Cmd+Shift+R
Linux: Ctrl+Shift+R
```