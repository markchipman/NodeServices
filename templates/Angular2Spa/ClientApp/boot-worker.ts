import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';
import 'zone.js/dist/zone-microtask';
import 'zone.js/dist/long-stack-trace-zone';
import 'jquery';
import 'bootstrap';
import './styles/site.css';

import { platform, provide } from 'angular2/core';
import {
WebWorkerInstance,
WORKER_RENDER_APPLICATION,
WORKER_RENDER_PLATFORM,
WORKER_SCRIPT,
WORKER_RENDER_ROUTER
} from 'angular2/platform/worker_render';

const VENDOR_BUNDLE = "/dist/vendor.js";
const CLIENT_BUNDLE = "/dist/main.js";
const workerScriptUrl = URL.createObjectURL(new Blob([`
  var importScripts_ = this.importScripts;
  
  this.importScripts = function importScripts() {
    for (var i = 0, scripts = new Array(arguments.length); i < scripts.length; ++i) {       
      var script = arguments[i];
      
      if (script.indexOf('http:') !== 0 || script.indexOf('https:') !== 0) {
        script = '${window.location.origin}' + (script[0] === '/' ? script : '/' + script);
      }
      
      scripts[i] = script;
    }
    
    return importScripts_.apply(this, scripts);
  };

  importScripts('${VENDOR_BUNDLE}', '${CLIENT_BUNDLE}');
`], {
        type: 'text/javascript'
    }));

const appRef = platform(WORKER_RENDER_PLATFORM).application([
    WORKER_RENDER_APPLICATION,
    WORKER_RENDER_ROUTER,
    provide(WORKER_SCRIPT, { useValue: workerScriptUrl })
]);

const worker = appRef.injector.get(WebWorkerInstance).worker;

worker.addEventListener('message', function onAppReady(event) {
    if (event.data === 'APP_READY') {
        worker.removeEventListener('message', onAppReady, false);
        URL.revokeObjectURL(workerScriptUrl);
        setTimeout(() => document.dispatchEvent(new Event('BootstrapComplete')));
    }
}, false);
