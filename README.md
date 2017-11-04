# min-pwa
Minimal Progressive Web APp (PWA) that passes the Google Lighthouse audit.

## [master branch](https://github.com/csells/min-pwa/tree/master)
Minimal PWA without any frameworks.

## [bootstrap4 branch](https://github.com/csells/min-pwa/tree/bootstrap4)
Minimal PWA with a simple responsive menu using Boostrap 4 and very simple template-based routing.

## [bootstrap4-vue branch](https://github.com/csells/min-pwa/tree/bootstrap4-vue)
Minimal PWA with a simple responsive menu using Boostrap 4 Vue 2.x and very simple component-based routing.

## Routing
The solutions that contain routing assume a web server configured to route 404 errors to /index.html to allow for client-side routing.
For example, if you're using [local web server](https://github.com/lwsjs/local-web-server), then you'd start it like the following:

```
$ ws --spa index.html
```
