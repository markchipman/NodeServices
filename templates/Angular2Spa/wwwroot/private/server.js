module.exports=function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){module.exports=__webpack_require__(13)},function(module,exports){module.exports=require("angular2/core")},function(module,exports){module.exports=require("angular2/router")},function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(3>c?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(k,v):void 0},ng=__webpack_require__(1),router=__webpack_require__(2),nav_menu_1=__webpack_require__(7),home_1=__webpack_require__(6),fetch_data_1=__webpack_require__(5),counter_1=__webpack_require__(4),App=function(){function App(){}return App=__decorate([ng.Component({selector:"app"}),router.RouteConfig([{path:"/",component:home_1.Home,name:"Home"},{path:"/counter",component:counter_1.Counter,name:"Counter"},{path:"/fetch-data",component:fetch_data_1.FetchData,name:"FetchData"}]),ng.View({template:__webpack_require__(8),directives:[nav_menu_1.NavMenu,router.ROUTER_DIRECTIVES]}),__metadata("design:paramtypes",[])],App)}();exports.App=App},function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(3>c?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(k,v):void 0},ng=__webpack_require__(1),Counter=function(){function Counter(){this.currentCount=0}return Counter.prototype.incrementCounter=function(){this.currentCount++},Counter=__decorate([ng.Component({selector:"counter"}),ng.View({template:__webpack_require__(9)}),__metadata("design:paramtypes",[])],Counter)}();exports.Counter=Counter},function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(3>c?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(k,v):void 0},ng=__webpack_require__(1),http_1=__webpack_require__(18),FetchData=function(){function FetchData(http){var _this=this;http.get("/api/SampleData/WeatherForecasts").subscribe(function(result){_this.forecasts=result.json()})}return FetchData=__decorate([ng.Component({selector:"fetch-data"}),ng.View({template:__webpack_require__(10)}),__metadata("design:paramtypes",[http_1.Http])],FetchData)}();exports.FetchData=FetchData},function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(3>c?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(k,v):void 0},ng=__webpack_require__(1),Home=function(){function Home(){}return Home=__decorate([ng.Component({selector:"home"}),ng.View({template:__webpack_require__(11)}),__metadata("design:paramtypes",[])],Home)}();exports.Home=Home},function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(3>c?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(k,v):void 0},ng=__webpack_require__(1),router=__webpack_require__(2),NavMenu=function(){function NavMenu(){}return NavMenu=__decorate([ng.Component({selector:"nav-menu"}),ng.View({template:__webpack_require__(12),directives:[router.ROUTER_DIRECTIVES]}),__metadata("design:paramtypes",[])],NavMenu)}();exports.NavMenu=NavMenu},function(module,exports){module.exports="<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-3'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-9 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"},function(module,exports){module.exports='<h2>Counter</h2>\r\n\r\n<p>This is a simple example of an Angular 2 component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button (click)="incrementCounter()">Increment</button>\r\n'},function(module,exports){module.exports='<h1>Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf="!forecasts"><em>Loading...</em></p>\r\n\r\n<table class=\'table\' *ngIf="forecasts">\r\n    <thead>\r\n        <tr>\r\n            <th>Date</th>\r\n            <th>Temp. (C)</th>\r\n            <th>Temp. (F)</th>\r\n            <th>Summary</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor="#forecast of forecasts">\r\n            <td>{{ forecast.dateFormatted }}</td>\r\n            <td>{{ forecast.temperatureC }}</td>\r\n            <td>{{ forecast.temperatureF }}</td>\r\n            <td>{{ forecast.summary }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n'},function(module,exports){module.exports="<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n    <li><a href='https://angular.io/'>Angular 2</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n    <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\r\n    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n    <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n    <li><strong>Server-side prerendering</strong>. For faster initial loading and improved SEO, your Angular 2 app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.</li>\r\n    <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>\r\n    <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular 2 app will be rebuilt and a new instance injected is into the page.</li>\r\n    <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>\r\n</ul>\r\n"},function(module,exports){module.exports="<div class='main-nav'>\r\n        <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]=\"['/Home']\">WebApplicationBasic</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li>\r\n                    <a [routerLink]=\"['/Home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/Counter']\">\r\n                        <span class='glyphicon glyphicon-education'></span> Counter\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/FetchData']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"},function(module,exports,__webpack_require__){"use strict";function default_1(params){var serverBindings=[ngRouter.ROUTER_PROVIDERS,ngUniversal.HTTP_PROVIDERS,ngUniversal.SERVER_LOCATION_PROVIDERS,ngCore.provide(ngRouter.APP_BASE_HREF,{useValue:"/"}),ngCore.provide(node_http_1.BASE_URL,{useValue:params.absoluteUrl}),ngCore.provide(ngUniversal.REQUEST_URL,{useValue:params.url})];return ngUniversalRender.renderToString(app_1.App,serverBindings).then(function(html){return{html:html,globals:{jQuery:__webpack_require__(19)}}})}__webpack_require__(17);var ngCore=__webpack_require__(1),ngRouter=__webpack_require__(2),ngUniversal=__webpack_require__(14),node_http_1=__webpack_require__(15),ngUniversalRender=__webpack_require__(16),app_1=__webpack_require__(3);ngCore.enableProdMode(),Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=default_1},function(module,exports){module.exports=require("angular2-universal-preview")},function(module,exports){module.exports=require("angular2-universal-preview/dist/server/src/http/node_http")},function(module,exports){module.exports=require("angular2-universal-preview/dist/server/src/render")},function(module,exports){module.exports=require("angular2-universal-preview/dist/server/universal-polyfill.js")},function(module,exports){module.exports=require("angular2/http")},function(module,exports){module.exports=require("jquery")}]);