// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dpgAG":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var films_1 = require("2cf0ea29912272d7");
// class Session {
//     constructor (public elements: NodeListOf<Element> | undefined) {}
//     // рендер мест в кинотеатре
//     renderSeats (container: Element | undefined): void {
//         for (let i = 1; i <= 20; i++) {
//             const seat = document.createElement('div');
//             seat.classList.add('seats__item');
//             seat.textContent = String(i);
//             container?.appendChild(seat);
//         }
//     }
//     //рендер кнопок   
//     renderButtons (container: Element | null): void {
//         const buttonsContainer = document.createElement('div');
//         buttonsContainer.classList.add('buttons__container');
//         const backButton = document.createElement('button');
//         backButton.classList.add('back__button', 'button');
//         backButton.textContent = 'Назад';
//         const bookButton = document.createElement('button');
//         bookButton.classList.add('book__button', 'button');
//         bookButton.textContent = 'Забранировать';
//         buttonsContainer.appendChild(backButton);
//         buttonsContainer.appendChild(bookButton);
//         container?.appendChild(buttonsContainer);
//     }
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.querySelector('.container');
//     const sessionContainer = container?.querySelector('.session__container');
//     const sessionItems = sessionContainer?.querySelectorAll('.session__item'); 
//     const session = new Session(sessionItems);
//     if (sessionItems) {
//         sessionItems.forEach((item) => {
//             item.addEventListener('click', () => {
//                 const seatsContainer = document.createElement('div');
//                 seatsContainer.classList.add('seats__container');
//                 if (container) {
//                     container.innerHTML = '';
//                     container.appendChild(seatsContainer);
//                 }
//                 session.renderSeats(seatsContainer);
//                 session.renderButtons(container);
//             });
//         });
//     }
// });
document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector(".container");
    if (container) {
        new Top(container);
        new Info(container);
        new Content(container, films_1.films, 21);
    }
});
// создание верхнего блока
var Top = /** @class */ function() {
    function Top(container) {
        this.container = container;
        this.initTop(container);
    }
    Top.prototype.initTop = function(container) {
        var topContainer = document.createElement("div");
        topContainer.classList.add("top");
        var topLink = document.createElement("a");
        topLink.classList.add("top__link");
        topLink.setAttribute("href", "index.html");
        var logo = document.createElement("img");
        logo.classList.add("logo");
        logo.src = "img/logo.png";
        logo.alt = "logo";
        topLink.appendChild(logo);
        topContainer.appendChild(topLink);
        container.appendChild(topContainer);
    };
    return Top;
}();
// Создание info блока
var Info = /** @class */ function() {
    function Info(container) {
        this.container = container;
        this.initInfo(container);
    }
    Info.prototype.initInfo = function(container) {
        var info = document.createElement("div");
        info.classList.add("info");
        var title = document.createElement("h2");
        title.classList.add("title");
        title.textContent = "Сейчас в кино";
        var search = document.createElement("div");
        search.classList.add("search");
        info.appendChild(title);
        info.appendChild(search);
        container.appendChild(info);
    };
    return Info;
}();
// создание блока content
var Content = /** @class */ function() {
    function Content(container, films, numberOfItems) {
        this.initContent(container, films, numberOfItems);
    }
    Content.prototype.initContent = function(container, films, numberOfItems) {
        for(var i = 1; i <= numberOfItems; i++){
            var content = document.createElement("div");
            content.classList.add("content");
            var contentLink = document.createElement("a");
            contentLink.classList.add("content__link");
            contentLink.href = "#";
            var contentItem = document.createElement("div");
            contentItem.classList.add("content__item");
            var contentImg = document.createElement("img");
            contentImg.classList.add("content__img");
            contentImg.src = "".concat(films[i].image);
            var contentTitle = document.createElement("h3");
            contentTitle.classList.add("content__title");
            contentTitle.textContent = "".concat(films[i].name);
            var contentSubtitle = document.createElement("h4");
            contentSubtitle.classList.add("content__subtitle");
            contentSubtitle.textContent = "".concat(films[i].genre);
            contentLink.appendChild(contentImg);
            contentLink.appendChild(contentTitle);
            contentLink.appendChild(contentSubtitle);
            contentItem.appendChild(contentLink);
            content.appendChild(contentItem);
            container.appendChild(content);
        }
    };
    return Content;
}(); // 1 пиздим названия фильмов, описание и фотки (мб трейлер)
 // 2 сделать мапу (объект с ключами, на ключах висят фильмы) с сеансами
 // написать рандомайзер, который рандомно вставляет фильмы
 // bootstrap, ts, webpack, rxjs
 // спиздить дизайн с кинотеатра
 // есть главная страница, в которой выводится список фильмов
 // есть страница детализации фильма (выбор даты, время сеанса, стоимость билета)
 // страница заказа
 // тестовая оплата 

},{"2cf0ea29912272d7":"bVYlh"}],"bVYlh":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
exports.films = void 0;
exports.films = {
    1: {
        name: "ОПЕРАЦИЯ \xabФОРТУНА\xbb: ИСКУССТВО ПОБЕЖДАТЬ",
        image: "img/films_img/1.webp",
        genre: "Боевик, комедия",
        description: "asdas"
    },
    2: {
        name: "ПРАВЕДНИК",
        image: "img/films_img/2.webp",
        genre: "Военный, драма",
        description: "asdas"
    },
    3: {
        name: "БЕСПРИНЦИПНЫЕ В ДЕРЕВНЕ",
        image: "img/films_img/3.webp",
        genre: "Комедия",
        description: "asdas"
    },
    4: {
        name: "ЧЕБУРАШКА",
        image: "img/films_img/4.webp",
        genre: "Детский, комедия",
        description: "asdas"
    },
    5: {
        name: "НЕПОСЛУШНАЯ",
        image: "img/films_img/5.webp",
        genre: "Драма, эротика",
        description: "asdas"
    },
    6: {
        name: "ПАПЫ ПРОТИВ МАМ",
        image: "img/films_img/6.webp",
        genre: "Комедия, семейный",
        description: "asdas"
    },
    7: {
        name: "ЧЕКАГО",
        image: "img/films_img/7.webp",
        genre: "Драма, криминал",
        description: "asdas"
    },
    8: {
        name: "БЕШЕНСТВО",
        image: "img/films_img/8.webp",
        genre: "Триллер",
        description: "asdas"
    },
    9: {
        name: "РОК ДОГ 3: БИТВА ЗА БИТ",
        image: "img/films_img/9.webp",
        genre: "Детский, комедия",
        description: "asdas"
    },
    10: {
        name: "МАРЛОУ",
        image: "img/films_img/10.webp",
        genre: "Триллер",
        description: "asdas"
    },
    11: {
        name: "СНЕЖНАЯ КОРОЛЕВА: РАЗМОРОЗКА",
        image: "img/films_img/11.webp",
        genre: "Детский, приключения",
        description: "asdas"
    },
    12: {
        name: "СЫН",
        image: "img/films_img/12.webp",
        genre: "Драма",
        description: "asdas"
    },
    13: {
        name: "ЗАКЛЯТЬЕ. ПЕРВОЕ ПРОБУЖДЕНИЕ",
        image: "img/films_img/13.webp",
        genre: "Ужасы",
        description: "asdas"
    },
    14: {
        name: "РЫЦАРЬ ТЕНЕЙ",
        image: "img/films_img/14.webp",
        genre: "Боевик, детский",
        description: "asdas"
    },
    15: {
        name: "СВОБОДНЫЕ ОТНОШЕНИЯ",
        image: "img/films_img/15.webp",
        genre: "Комедия, мелодрама",
        description: "asdas"
    },
    16: {
        name: "БЫТЬ",
        image: "img/films_img/16.webp",
        genre: "Комедия, приключения",
        description: "asdas"
    },
    17: {
        name: "МУЛЬТ В КИНО. ВЫПУСК № 153: НАСТОЯЩАЯ МУЛЬТВСЕЛЕННАЯ",
        image: "img/films_img/17.webp",
        genre: "Детский, короткометражный",
        description: "asdas"
    },
    18: {
        name: "О ЧЕМ ГОВОРЯТ МУЖЧИНЫ. ПРОСТЫЕ УДОВОЛЬСТВИЯ",
        image: "img/films_img/18.webp",
        genre: "Комедия, мелодрама",
        description: "asdas"
    },
    19: {
        name: "ВИННИ ПУХ: КРОВЬ И МЁД",
        image: "img/films_img/19.webp",
        genre: "Ужасы",
        description: "asdas"
    },
    20: {
        name: "МИРА",
        image: "img/films_img/20.webp",
        genre: "Драма, приключения",
        description: "asdas"
    },
    21: {
        name: "ИЗУМИТЕЛЬНЫЙ МОРИС",
        image: "img/films_img/21.webp",
        genre: "Детский, мультфильм",
        description: "asdas"
    }
};

},{}]},["dpgAG","6rimH"], "6rimH", "parcelRequire94c2")

//# sourceMappingURL=index.8cfc62b9.js.map
