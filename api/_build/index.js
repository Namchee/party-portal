var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:D:\Projects\sol\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/style.css
var style_default = "/build/_assets/style-MHCCWVBK.css";

// route-module:D:\Projects\sol\app\root.tsx
var meta = () => {
  return { title: "PartyPortal" };
};
var links = () => {
  return [
    { rel: "icon", href: "/favicon.png", sizes: "32x32" },
    { rel: "stylesheet", href: style_default },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "antialiased\r\n        min-h-screen\r\n        bg-gray-800 text-white"
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route-module:D:\Projects\sol\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var React3 = __toModule(require("react"));
var import_ethers = __toModule(require("ethers"));

// app/components/Icon/LoadingIcon.tsx
init_react();
var React2 = __toModule(require("react"));
function SpinnerIcon() {
  return /* @__PURE__ */ React2.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    className: "w-6 h-6 animate-spin",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React2.createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /* @__PURE__ */ React2.createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
}
var LoadingIcon_default = SpinnerIcon;

// app/constant/contract.json
var _format = "hh-sol-artifact-1";
var contractName = "PartyPortal";
var sourceName = "contracts/PartyPortal.sol";
var abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      }
    ],
    name: "NewLeader",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string"
      }
    ],
    name: "NewParty",
    type: "event"
  },
  {
    inputs: [],
    name: "getBestHost",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getParties",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "host",
            type: "address"
          },
          {
            internalType: "string",
            name: "message",
            type: "string"
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256"
          }
        ],
        internalType: "struct PartyPortal.Party[]",
        name: "",
        type: "tuple[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPartyCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_message",
        type: "string"
      }
    ],
    name: "throwParty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var bytecode = "0x60806040526200004f6040518060400160405280601681526020017f50617274792072756e6e696e272e20506f6767657273000000000000000000008152506200007860201b620007491760201c565b6103e84442620000609190620001c5565b6200006c919062000266565b6004819055506200030d565b62000118816040516024016200008f919062000185565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200011b60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200015182620001a9565b6200015d8185620001b4565b93506200016f81856020860162000230565b6200017a81620002fc565b840191505092915050565b60006020820190508181036000830152620001a1818462000144565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000620001d28262000226565b9150620001df8362000226565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156200021b576200021a6200029e565b5b828202905092915050565b6000819050919050565b60005b838110156200025057808201518184015260208101905062000233565b8381111562000260576000848401525b50505050565b6000620002738262000226565b9150620002808362000226565b925082620002935762000292620002cd565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b611185806200031d6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806360b960e514610051578063a8311aa81461006f578063ad0f2e061461008d578063ba4b3cb2146100ab575b600080fd5b6100596100c7565b6040516100669190610d0a565b60405180910390f35b6100776100d3565b6040516100849190610c36565b60405180910390f35b610095610224565b6040516100a29190610c1b565b60405180910390f35b6100c560048036038101906100c091906109b2565b61024e565b005b60008080549050905090565b60606000805480602002602001604051908101604052809291908181526020016000905b8282101561021b57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461018090610f4a565b80601f01602080910402602001604051908101604052809291908181526020018280546101ac90610f4a565b80156101f95780601f106101ce576101008083540402835291602001916101f9565b820191906000526020600020905b8154815290600101906020018083116101dc57829003601f168201915b50505050508152602001600282015481525050815260200190600101906100f7565b50505050905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b426104b0600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461029c9190610e1c565b106102dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d390610caa565b60405180910390fd5b42600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600060405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906103df9291906108a7565b5060408201518160020155505060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461043b9190610e1c565b9250508190555060016000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411156105915733600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fd5c441678016e6395cfedd432cb8681c9e7bad1e08184bc4c3a463610afbed1660405160405180910390a25b6103e844426105a09190610e72565b6105aa9190610fad565b6004819055506045600454116106f6576105f96040518060400160405280600781526020017f25732c20776f6e00000000000000000000000000000000000000000000000000815250336107e2565b60006509184e72a000905047811115610647576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063e90610cea565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161066d90610c06565b60006040518083038185875af1925050503d80600081146106aa576040519150601f19603f3d011682016040523d82523d6000602084013e6106af565b606091505b50509050806106f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ea90610cca565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167ff9a6af53c5fc98f326a94053644fe1b3e1a9fe5d82a650606b585aeb9584f320428360405161073e929190610d25565b60405180910390a250565b6107df8160405160240161075d9190610c58565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061087e565b50565b61087a82826040516024016107f8929190610c7a565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061087e565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546108b390610f4a565b90600052602060002090601f0160209004810192826108d5576000855561091c565b82601f106108ee57805160ff191683800117855561091c565b8280016001018555821561091c579182015b8281111561091b578251825591602001919060010190610900565b5b509050610929919061092d565b5090565b5b8082111561094657600081600090555060010161092e565b5090565b600061095d61095884610d7a565b610d55565b90508281526020810184848401111561097557600080fd5b610980848285610f08565b509392505050565b600082601f83011261099957600080fd5b81356109a984826020860161094a565b91505092915050565b6000602082840312156109c457600080fd5b600082013567ffffffffffffffff8111156109de57600080fd5b6109ea84828501610988565b91505092915050565b60006109ff8383610b98565b905092915050565b610a1081610ecc565b82525050565b610a1f81610ecc565b82525050565b6000610a3082610dbb565b610a3a8185610dde565b935083602082028501610a4c85610dab565b8060005b85811015610a885784840389528151610a6985826109f3565b9450610a7483610dd1565b925060208a01995050600181019050610a50565b50829750879550505050505092915050565b6000610aa582610dc6565b610aaf8185610dfa565b9350610abf818560208601610f17565b610ac88161109a565b840191505092915050565b6000610ade82610dc6565b610ae88185610e0b565b9350610af8818560208601610f17565b610b018161109a565b840191505092915050565b6000610b19601c83610e0b565b9150610b24826110ab565b602082019050919050565b6000610b3c602883610e0b565b9150610b47826110d4565b604082019050919050565b6000610b5f601383610e0b565b9150610b6a82611123565b602082019050919050565b6000610b82600083610def565b9150610b8d8261114c565b600082019050919050565b6000606083016000830151610bb06000860182610a07565b5060208301518482036020860152610bc88282610a9a565b9150506040830151610bdd6040860182610be8565b508091505092915050565b610bf181610efe565b82525050565b610c0081610efe565b82525050565b6000610c1182610b75565b9150819050919050565b6000602082019050610c306000830184610a16565b92915050565b60006020820190508181036000830152610c508184610a25565b905092915050565b60006020820190508181036000830152610c728184610ad3565b905092915050565b60006040820190508181036000830152610c948185610ad3565b9050610ca36020830184610a16565b9392505050565b60006020820190508181036000830152610cc381610b0c565b9050919050565b60006020820190508181036000830152610ce381610b2f565b9050919050565b60006020820190508181036000830152610d0381610b52565b9050919050565b6000602082019050610d1f6000830184610bf7565b92915050565b6000604082019050610d3a6000830185610bf7565b8181036020830152610d4c8184610ad3565b90509392505050565b6000610d5f610d70565b9050610d6b8282610f7c565b919050565b6000604051905090565b600067ffffffffffffffff821115610d9557610d9461106b565b5b610d9e8261109a565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610e2782610efe565b9150610e3283610efe565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e6757610e66610fde565b5b828201905092915050565b6000610e7d82610efe565b9150610e8883610efe565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610ec157610ec0610fde565b5b828202905092915050565b6000610ed782610ede565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610f35578082015181840152602081019050610f1a565b83811115610f44576000848401525b50505050565b60006002820490506001821680610f6257607f821691505b60208210811415610f7657610f7561103c565b5b50919050565b610f858261109a565b810181811067ffffffffffffffff82111715610fa457610fa361106b565b5b80604052505050565b6000610fb882610efe565b9150610fc383610efe565b925082610fd357610fd261100d565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f57686f612c20736c6f7720646f776e207468657265206368616d702100000000600082015250565b7f4661696c656420746f207769746864726177206574686572732066726f6d206360008201527f6f6e74726163742e000000000000000000000000000000000000000000000000602082015250565b7f57652063616e2774206c6f616e2c206475682100000000000000000000000000600082015250565b5056fea26469706673582212202f082956b7f2311cef9b273305460d45891c3bfa0e5315fcc9ad076de50be5c264736f6c63430008040033";
var deployedBytecode = "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806360b960e514610051578063a8311aa81461006f578063ad0f2e061461008d578063ba4b3cb2146100ab575b600080fd5b6100596100c7565b6040516100669190610d0a565b60405180910390f35b6100776100d3565b6040516100849190610c36565b60405180910390f35b610095610224565b6040516100a29190610c1b565b60405180910390f35b6100c560048036038101906100c091906109b2565b61024e565b005b60008080549050905090565b60606000805480602002602001604051908101604052809291908181526020016000905b8282101561021b57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461018090610f4a565b80601f01602080910402602001604051908101604052809291908181526020018280546101ac90610f4a565b80156101f95780601f106101ce576101008083540402835291602001916101f9565b820191906000526020600020905b8154815290600101906020018083116101dc57829003601f168201915b50505050508152602001600282015481525050815260200190600101906100f7565b50505050905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b426104b0600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461029c9190610e1c565b106102dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d390610caa565b60405180910390fd5b42600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600060405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906103df9291906108a7565b5060408201518160020155505060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461043b9190610e1c565b9250508190555060016000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411156105915733600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fd5c441678016e6395cfedd432cb8681c9e7bad1e08184bc4c3a463610afbed1660405160405180910390a25b6103e844426105a09190610e72565b6105aa9190610fad565b6004819055506045600454116106f6576105f96040518060400160405280600781526020017f25732c20776f6e00000000000000000000000000000000000000000000000000815250336107e2565b60006509184e72a000905047811115610647576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063e90610cea565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161066d90610c06565b60006040518083038185875af1925050503d80600081146106aa576040519150601f19603f3d011682016040523d82523d6000602084013e6106af565b606091505b50509050806106f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ea90610cca565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167ff9a6af53c5fc98f326a94053644fe1b3e1a9fe5d82a650606b585aeb9584f320428360405161073e929190610d25565b60405180910390a250565b6107df8160405160240161075d9190610c58565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061087e565b50565b61087a82826040516024016107f8929190610c7a565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061087e565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546108b390610f4a565b90600052602060002090601f0160209004810192826108d5576000855561091c565b82601f106108ee57805160ff191683800117855561091c565b8280016001018555821561091c579182015b8281111561091b578251825591602001919060010190610900565b5b509050610929919061092d565b5090565b5b8082111561094657600081600090555060010161092e565b5090565b600061095d61095884610d7a565b610d55565b90508281526020810184848401111561097557600080fd5b610980848285610f08565b509392505050565b600082601f83011261099957600080fd5b81356109a984826020860161094a565b91505092915050565b6000602082840312156109c457600080fd5b600082013567ffffffffffffffff8111156109de57600080fd5b6109ea84828501610988565b91505092915050565b60006109ff8383610b98565b905092915050565b610a1081610ecc565b82525050565b610a1f81610ecc565b82525050565b6000610a3082610dbb565b610a3a8185610dde565b935083602082028501610a4c85610dab565b8060005b85811015610a885784840389528151610a6985826109f3565b9450610a7483610dd1565b925060208a01995050600181019050610a50565b50829750879550505050505092915050565b6000610aa582610dc6565b610aaf8185610dfa565b9350610abf818560208601610f17565b610ac88161109a565b840191505092915050565b6000610ade82610dc6565b610ae88185610e0b565b9350610af8818560208601610f17565b610b018161109a565b840191505092915050565b6000610b19601c83610e0b565b9150610b24826110ab565b602082019050919050565b6000610b3c602883610e0b565b9150610b47826110d4565b604082019050919050565b6000610b5f601383610e0b565b9150610b6a82611123565b602082019050919050565b6000610b82600083610def565b9150610b8d8261114c565b600082019050919050565b6000606083016000830151610bb06000860182610a07565b5060208301518482036020860152610bc88282610a9a565b9150506040830151610bdd6040860182610be8565b508091505092915050565b610bf181610efe565b82525050565b610c0081610efe565b82525050565b6000610c1182610b75565b9150819050919050565b6000602082019050610c306000830184610a16565b92915050565b60006020820190508181036000830152610c508184610a25565b905092915050565b60006020820190508181036000830152610c728184610ad3565b905092915050565b60006040820190508181036000830152610c948185610ad3565b9050610ca36020830184610a16565b9392505050565b60006020820190508181036000830152610cc381610b0c565b9050919050565b60006020820190508181036000830152610ce381610b2f565b9050919050565b60006020820190508181036000830152610d0381610b52565b9050919050565b6000602082019050610d1f6000830184610bf7565b92915050565b6000604082019050610d3a6000830185610bf7565b8181036020830152610d4c8184610ad3565b90509392505050565b6000610d5f610d70565b9050610d6b8282610f7c565b919050565b6000604051905090565b600067ffffffffffffffff821115610d9557610d9461106b565b5b610d9e8261109a565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610e2782610efe565b9150610e3283610efe565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e6757610e66610fde565b5b828201905092915050565b6000610e7d82610efe565b9150610e8883610efe565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610ec157610ec0610fde565b5b828202905092915050565b6000610ed782610ede565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610f35578082015181840152602081019050610f1a565b83811115610f44576000848401525b50505050565b60006002820490506001821680610f6257607f821691505b60208210811415610f7657610f7561103c565b5b50919050565b610f858261109a565b810181811067ffffffffffffffff82111715610fa457610fa361106b565b5b80604052505050565b6000610fb882610efe565b9150610fc383610efe565b925082610fd357610fd261100d565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f57686f612c20736c6f7720646f776e207468657265206368616d702100000000600082015250565b7f4661696c656420746f207769746864726177206574686572732066726f6d206360008201527f6f6e74726163742e000000000000000000000000000000000000000000000000602082015250565b7f57652063616e2774206c6f616e2c206475682100000000000000000000000000600082015250565b5056fea26469706673582212202f082956b7f2311cef9b273305460d45891c3bfa0e5315fcc9ad076de50be5c264736f6c63430008040033";
var linkReferences = {};
var deployedLinkReferences = {};
var contract_default = {
  _format,
  contractName,
  sourceName,
  abi,
  bytecode,
  deployedBytecode,
  linkReferences,
  deployedLinkReferences
};

// app/constant/eth.ts
init_react();
var CONTRACT_ADDRESS = "0x2C20f9F82dC8B0D7Bb88EB80F685DD14C120f4b0";

// route-module:D:\Projects\sol\app\routes\index.tsx
function Index() {
  const [hasMetamask, setHasMetamask] = React3.useState(true);
  const [account, setAccount] = React3.useState("");
  const [isAuthorizing, setIsAuthorizing] = React3.useState(false);
  const [partyCount, setPartyCount] = React3.useState(0);
  const [myPartyCount, setMyPartyCount] = React3.useState(0);
  const [best, setBest] = React3.useState("");
  const [isMining, setIsMining] = React3.useState(false);
  const [punchline, setPunchline] = React3.useState("");
  const [error, setError] = React3.useState("");
  const refreshPartyCount = async () => {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new import_ethers.ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new import_ethers.ethers.Contract(CONTRACT_ADDRESS, contract_default.abi, signer);
      const partyCount2 = await contract.getPartyCount();
      const parties = await contract.getParties();
      const userParties = parties.filter((p) => {
        return p.host.toUpperCase() === account.toUpperCase();
      }).length;
      const bestHost = await contract.getBestHost();
      setPartyCount(partyCount2.toNumber());
      setMyPartyCount(userParties);
      setBest(bestHost);
    }
  };
  const checkWallet = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Wallet is not connected!");
      return;
    }
    console.log("Wallet is connected!");
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length) {
      const account2 = accounts[0];
      console.log(`Found an authorized account: ${account2}`);
      setAccount(account2);
    }
  };
  const authorizeWallet = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("MetaMask is not installed!");
      return;
    }
    setIsAuthorizing(true);
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    console.log(`Connected with: ${accounts[0]}`);
    setIsAuthorizing(false);
    setAccount(accounts[0]);
  };
  const party = async () => {
    try {
      if (!punchline) {
        throw new Error("Party punchline is required!");
      }
      const { ethereum } = window;
      if (ethereum && punchline) {
        setIsMining(true);
        const provider = new import_ethers.ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new import_ethers.ethers.Contract(CONTRACT_ADDRESS, contract_default.abi, signer);
        const partyTrx = await contract.throwParty(punchline, {
          gasLimit: 3e5
        });
        return await partyTrx.wait();
      }
      throw new Error("Ethereum wallet does not exist!");
    } catch (err) {
      console.error(err);
      setError("Slow down! You've thrown too many parties!");
    } finally {
      setIsMining(false);
      setPunchline("");
    }
  };
  const partyButtonClass = () => {
    return `mx-auto
    shadow
    grid place-items-center
    w-40 h-full
    py-4 px-6
    rounded-md
    text-lg
    font-medium
    transition-all
    ${!isMining && "hover:bg-indigo-600"}
    focus:bg-indigo-600
    focus:ring-4
    focus:ring-indigo-400
    focus:ring-opacity-40
    focus:outline-none
    ${isMining ? "bg-indigo-500" : "bg-indigo-600"}
    ${isMining && "cursor-not-allowed"}`;
  };
  const punchlineInputClass = () => {
    return `mx-auto
      shadow
      px-6 py-4
      bg-gray-700
      text-xl
      flex-1
      rounded-md
      transition-all
      focus:ring-4
      focus:ring-indigo-500
      focus:ring-opacity-70
      focus:outline-none
      ${isMining && "cursor-not-allowed"}
      ${isMining && "bg-gray-600"}`;
  };
  const updatePunchline = (e) => {
    setPunchline(e.target.value);
    setError("");
  };
  const partyForm = () => {
    return account ? /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("input", {
      type: "text",
      className: punchlineInputClass(),
      disabled: isMining,
      value: punchline,
      onChange: updatePunchline,
      placeholder: "Your party punchline"
    }), /* @__PURE__ */ React3.createElement("button", {
      onClick: party,
      className: partyButtonClass(),
      disabled: isMining
    }, isMining ? /* @__PURE__ */ React3.createElement(LoadingIcon_default, null) : "Throw Party!")) : /* @__PURE__ */ React3.createElement("button", {
      className: `bg-indigo-500
        mx-auto
        grid place-items-center
        text-lg
        font-medium
        py-4 px-6
        w-72
        rounded-md
        transition-all
        ${!isAuthorizing && "hover:bg-indigo-600"}
        focus:bg-indigo-600
        focus:ring-4
        focus:ring-indigo-400
        focus:ring-opacity-40
        focus:outline-none
        shadow
        ${isAuthorizing && "cursor-not-allowed"}`,
      onClick: authorizeWallet,
      disabled: isAuthorizing
    }, isAuthorizing ? /* @__PURE__ */ React3.createElement(LoadingIcon_default, null) : "Connect Ethereum Wallet");
  };
  React3.useEffect(() => {
    checkWallet();
  }, []);
  React3.useEffect(() => {
    if (account) {
      refreshPartyCount();
    }
  }, [account]);
  React3.useEffect(() => {
    const onNewParty = (host) => {
      setPartyCount(partyCount + 1);
      if (account.toUpperCase() === host.toUpperCase()) {
        setMyPartyCount(myPartyCount + 1);
      }
    };
    const onNewLeader = (host) => {
      setBest(host);
    };
    let contract;
    const { ethereum } = window;
    if (ethereum) {
      const provider = new import_ethers.ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      contract = new import_ethers.ethers.Contract(CONTRACT_ADDRESS, contract_default.abi, signer);
      contract.on("NewParty", onNewParty);
      contract.on("NewLeader", onNewLeader);
    }
    return () => {
      if (contract) {
        contract.off("NewParty", onNewParty);
        contract.off("NewLeader", onNewLeader);
      }
    };
  }, []);
  return /* @__PURE__ */ React3.createElement("div", {
    className: "flex flex-col\r\n      min-h-screen\r\n      w-full mx-auto max-w-5xl\r\n      pt-32"
  }, /* @__PURE__ */ React3.createElement("section", {
    className: "flex-1"
  }, /* @__PURE__ */ React3.createElement("h1", {
    className: "text-center\r\n        text-5xl tracking-tight font-bold\r\n        leading-relaxed"
  }, "Be the life of the ", /* @__PURE__ */ React3.createElement("span", {
    className: "text-yellow-300"
  }, "party"), " ", "overnight"), /* @__PURE__ */ React3.createElement("h2", {
    className: "text-center\r\n        text-xl max-w-xl mx-auto\r\n        text-gray-400\r\n        leading-relaxed\r\n        mt-2"
  }, "PartyPopper is a service that throw wild parties for you over the world of metaverse. Throw parties with us and grab a chance to win some ethers!"), /* @__PURE__ */ React3.createElement("div", {
    className: "flex\r\n        w-full max-w-xl mx-auto\r\n        space-x-4\r\n        mt-12"
  }, partyForm()), error && /* @__PURE__ */ React3.createElement("p", {
    className: "text-red-500 text-center mt-2"
  }, error), /* @__PURE__ */ React3.createElement("div", {
    className: "flex flex-col items-center mt-36 space-y-12"
  }, /* @__PURE__ */ React3.createElement("p", {
    className: "text-center text-3xl font-bold tracking-tight"
  }, "Current Leaderboard"), /* @__PURE__ */ React3.createElement("div", {
    className: "flex justify-center space-x-16"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "text-center\r\n            text-5xl\r\n            font-bold"
  }, /* @__PURE__ */ React3.createElement("p", {
    className: "uppercase\r\n              text-sm \r\n              text-gray-400\r\n              tracking-wider\r\n              mb-4"
  }, "Total Parties"), /* @__PURE__ */ React3.createElement("p", null, partyCount)), account && /* @__PURE__ */ React3.createElement("div", {
    className: "text-center\r\n            text-5xl\r\n            font-bold"
  }, /* @__PURE__ */ React3.createElement("p", {
    className: "uppercase\r\n              text-sm \r\n              text-gray-400\r\n              tracking-wider\r\n              mb-4"
  }, "Your Parties"), /* @__PURE__ */ React3.createElement("p", null, myPartyCount)))), /* @__PURE__ */ React3.createElement("div", {
    className: "text-center\r\n              mt-12 mb-28\r\n              font-bold\r\n              col-span-2"
  }, /* @__PURE__ */ React3.createElement("p", {
    className: "uppercase\r\n              text-sm \r\n              text-gray-400\r\n              tracking-wider\r\n              \r\n              mb-4"
  }, "The Party Animal"), best ? /* @__PURE__ */ React3.createElement("p", {
    className: "font-mono text-5xl"
  }, `${best.slice(0, 4)}...${best.slice(best.length - 3)}`) : /* @__PURE__ */ React3.createElement("p", {
    className: "text-2xl"
  }, "None yet. Be the first!"))), /* @__PURE__ */ React3.createElement("footer", {
    className: "text-gray-400 text-center py-8 space-y-2"
  }, /* @__PURE__ */ React3.createElement("p", null, "Made in 2022 by", " ", /* @__PURE__ */ React3.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-indigo-400\r\n            transition-colors\r\n            hover:text-indigo-300\r\n            active:text-indigo-300\r\n            focus:text-indigo-300\r\n            focus:outline-none",
    href: "https://www.github.com/Namchee"
  }, "Namchee"), " ", "with guidance from", " ", /* @__PURE__ */ React3.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-indigo-400\r\n            transition-colors\r\n            hover:text-indigo-300\r\n            active:text-indigo-300\r\n            focus:text-indigo-300\r\n            focus:outline-none",
    href: "https://buildspace.so/"
  }, "buildspace")), /* @__PURE__ */ React3.createElement("p", {
    className: "text-xs"
  }, "View ", /* @__PURE__ */ React3.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-indigo-400\r\n            transition-colors\r\n            hover:text-indigo-300\r\n            active:text-indigo-300\r\n            focus:text-indigo-300\r\n            focus:outline-none",
    href: "https://rinkeby.etherscan.io/tx/0xa25b64d329bd1736c62c287330370dc8e17bc97842ab7cc4fceac928381b67cf"
  }, "contract"), " on ", /* @__PURE__ */ React3.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-indigo-400\r\n            transition-colors\r\n            hover:text-indigo-300\r\n            active:text-indigo-300\r\n            focus:text-indigo-300\r\n            focus:outline-none",
    href: "https://etherscan.io/"
  }, "Etherscan"))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxQcm9qZWN0c1xcc29sXFxhcHBcXHJvb3QudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcUHJvamVjdHNcXHNvbFxcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9JY29uL0xvYWRpbmdJY29uLnRzeCIsICIuLi8uLi9hcHAvY29uc3RhbnQvZXRoLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxzb2xcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcc29sXFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxzb2xcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxyXG59IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uLCBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4geyB0aXRsZTogJ1BhcnR5UG9ydGFsJyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2Zhdmljb24ucG5nJywgc2l6ZXM6ICczMngzMicgfSxcclxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxyXG4gICAgeyByZWw6ICdwcmVjb25uZWN0JywgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20nIH0sXHJcbiAgICB7IHJlbDogJ3ByZWNvbm5lY3QnLCBocmVmOiAnaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbScsIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyB9LFxyXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcgfSxcclxuICBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgPGhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPE1ldGEgLz5cclxuICAgICAgICA8TGlua3MgLz5cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJhbnRpYWxpYXNlZFxyXG4gICAgICAgIG1pbi1oLXNjcmVlblxyXG4gICAgICAgIGJnLWdyYXktODAwIHRleHQtd2hpdGVcIj5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuaW1wb3J0IFNwaW5uZXJJY29uIGZyb20gXCJ+L2NvbXBvbmVudHMvSWNvbi9Mb2FkaW5nSWNvblwiO1xyXG5cclxuaW1wb3J0IEFCSSBmcm9tIFwifi9jb25zdGFudC9jb250cmFjdC5qc29uXCI7XHJcbmltcG9ydCB7IENPTlRSQUNUX0FERFJFU1MgfSBmcm9tIFwifi9jb25zdGFudC9ldGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IFtoYXNNZXRhbWFzaywgc2V0SGFzTWV0YW1hc2tdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc0F1dGhvcml6aW5nLCBzZXRJc0F1dGhvcml6aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3BhcnR5Q291bnQsIHNldFBhcnR5Q291bnRdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW215UGFydHlDb3VudCwgc2V0TXlQYXJ0eUNvdW50XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtiZXN0LCBzZXRCZXN0XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbaXNNaW5pbmcsIHNldElzTWluaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3B1bmNobGluZSwgc2V0UHVuY2hsaW5lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHJlZnJlc2hQYXJ0eUNvdW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgIGlmIChldGhlcmV1bSkge1xyXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XHJcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoQ09OVFJBQ1RfQUREUkVTUywgQUJJLmFiaSwgc2lnbmVyKTtcclxuXHJcbiAgICAgIGNvbnN0IHBhcnR5Q291bnQgPSBhd2FpdCBjb250cmFjdC5nZXRQYXJ0eUNvdW50KCk7XHJcbiAgICAgIGNvbnN0IHBhcnRpZXMgPSBhd2FpdCBjb250cmFjdC5nZXRQYXJ0aWVzKCk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyUGFydGllcyA9IHBhcnRpZXMuZmlsdGVyKChwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHAuaG9zdC50b1VwcGVyQ2FzZSgpID09PSBhY2NvdW50LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIH0pLmxlbmd0aDtcclxuXHJcbiAgICAgIGNvbnN0IGJlc3RIb3N0OiBzdHJpbmcgPSBhd2FpdCBjb250cmFjdC5nZXRCZXN0SG9zdCgpO1xyXG5cclxuICAgICAgc2V0UGFydHlDb3VudChwYXJ0eUNvdW50LnRvTnVtYmVyKCkpO1xyXG4gICAgICBzZXRNeVBhcnR5Q291bnQodXNlclBhcnRpZXMpO1xyXG4gICAgICBzZXRCZXN0KGJlc3RIb3N0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja1dhbGxldCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcclxuXHJcbiAgICBpZiAoIWV0aGVyZXVtKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiV2FsbGV0IGlzIG5vdCBjb25uZWN0ZWQhXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJXYWxsZXQgaXMgY29ubmVjdGVkIVwiKTtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiB9KTtcclxuXHJcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcclxuICAgICAgY29uc29sZS5sb2coYEZvdW5kIGFuIGF1dGhvcml6ZWQgYWNjb3VudDogJHthY2NvdW50fWApO1xyXG4gICAgICBzZXRBY2NvdW50KGFjY291bnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGF1dGhvcml6ZVdhbGxldCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcclxuXHJcbiAgICBpZiAoIWV0aGVyZXVtKSB7XHJcbiAgICAgIGFsZXJ0KFwiTWV0YU1hc2sgaXMgbm90IGluc3RhbGxlZCFcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJc0F1dGhvcml6aW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhgQ29ubmVjdGVkIHdpdGg6ICR7YWNjb3VudHNbMF19YCk7XHJcblxyXG4gICAgc2V0SXNBdXRob3JpemluZyhmYWxzZSk7XHJcbiAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYXJ0eSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghcHVuY2hsaW5lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFydHkgcHVuY2hsaW5lIGlzIHJlcXVpcmVkIVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgICAgaWYgKGV0aGVyZXVtICYmIHB1bmNobGluZSkge1xyXG4gICAgICAgIHNldElzTWluaW5nKHRydWUpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XHJcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KENPTlRSQUNUX0FERFJFU1MsIEFCSS5hYmksIHNpZ25lcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcnR5VHJ4ID0gYXdhaXQgY29udHJhY3QudGhyb3dQYXJ0eShwdW5jaGxpbmUsIHtcclxuICAgICAgICAgIGdhc0xpbWl0OiAzMDAwMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHBhcnR5VHJ4LndhaXQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXRoZXJldW0gd2FsbGV0IGRvZXMgbm90IGV4aXN0IVwiKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHNldEVycm9yKFwiU2xvdyBkb3duISBZb3UndmUgdGhyb3duIHRvbyBtYW55IHBhcnRpZXMhXCIpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNNaW5pbmcoZmFsc2UpO1xyXG4gICAgICBzZXRQdW5jaGxpbmUoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFydHlCdXR0b25DbGFzcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBgbXgtYXV0b1xyXG4gICAgc2hhZG93XHJcbiAgICBncmlkIHBsYWNlLWl0ZW1zLWNlbnRlclxyXG4gICAgdy00MCBoLWZ1bGxcclxuICAgIHB5LTQgcHgtNlxyXG4gICAgcm91bmRlZC1tZFxyXG4gICAgdGV4dC1sZ1xyXG4gICAgZm9udC1tZWRpdW1cclxuICAgIHRyYW5zaXRpb24tYWxsXHJcbiAgICAkeyFpc01pbmluZyAmJiBcImhvdmVyOmJnLWluZGlnby02MDBcIn1cclxuICAgIGZvY3VzOmJnLWluZGlnby02MDBcclxuICAgIGZvY3VzOnJpbmctNFxyXG4gICAgZm9jdXM6cmluZy1pbmRpZ28tNDAwXHJcbiAgICBmb2N1czpyaW5nLW9wYWNpdHktNDBcclxuICAgIGZvY3VzOm91dGxpbmUtbm9uZVxyXG4gICAgJHtpc01pbmluZyA/IFwiYmctaW5kaWdvLTUwMFwiIDogXCJiZy1pbmRpZ28tNjAwXCJ9XHJcbiAgICAke2lzTWluaW5nICYmIFwiY3Vyc29yLW5vdC1hbGxvd2VkXCJ9YDtcclxuICB9O1xyXG5cclxuICBjb25zdCBwdW5jaGxpbmVJbnB1dENsYXNzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGBteC1hdXRvXHJcbiAgICAgIHNoYWRvd1xyXG4gICAgICBweC02IHB5LTRcclxuICAgICAgYmctZ3JheS03MDBcclxuICAgICAgdGV4dC14bFxyXG4gICAgICBmbGV4LTFcclxuICAgICAgcm91bmRlZC1tZFxyXG4gICAgICB0cmFuc2l0aW9uLWFsbFxyXG4gICAgICBmb2N1czpyaW5nLTRcclxuICAgICAgZm9jdXM6cmluZy1pbmRpZ28tNTAwXHJcbiAgICAgIGZvY3VzOnJpbmctb3BhY2l0eS03MFxyXG4gICAgICBmb2N1czpvdXRsaW5lLW5vbmVcclxuICAgICAgJHtpc01pbmluZyAmJiBcImN1cnNvci1ub3QtYWxsb3dlZFwifVxyXG4gICAgICAke2lzTWluaW5nICYmIFwiYmctZ3JheS02MDBcIn1gO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVB1bmNobGluZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0UHVuY2hsaW5lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldEVycm9yKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhcnR5Rm9ybSA9ICgpID0+IHtcclxuICAgIHJldHVybiBhY2NvdW50ID8gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtwdW5jaGxpbmVJbnB1dENsYXNzKCl9XHJcbiAgICAgICAgICBkaXNhYmxlZD17aXNNaW5pbmd9XHJcbiAgICAgICAgICB2YWx1ZT17cHVuY2hsaW5lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVB1bmNobGluZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBwYXJ0eSBwdW5jaGxpbmVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17cGFydHl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3BhcnR5QnV0dG9uQ2xhc3MoKX1cclxuICAgICAgICAgIGRpc2FibGVkPXtpc01pbmluZ31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNNaW5pbmcgPyA8U3Bpbm5lckljb24gLz4gOiBcIlRocm93IFBhcnR5IVwifVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8Lz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e2BiZy1pbmRpZ28tNTAwXHJcbiAgICAgICAgbXgtYXV0b1xyXG4gICAgICAgIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyXHJcbiAgICAgICAgdGV4dC1sZ1xyXG4gICAgICAgIGZvbnQtbWVkaXVtXHJcbiAgICAgICAgcHktNCBweC02XHJcbiAgICAgICAgdy03MlxyXG4gICAgICAgIHJvdW5kZWQtbWRcclxuICAgICAgICB0cmFuc2l0aW9uLWFsbFxyXG4gICAgICAgICR7IWlzQXV0aG9yaXppbmcgJiYgXCJob3ZlcjpiZy1pbmRpZ28tNjAwXCJ9XHJcbiAgICAgICAgZm9jdXM6YmctaW5kaWdvLTYwMFxyXG4gICAgICAgIGZvY3VzOnJpbmctNFxyXG4gICAgICAgIGZvY3VzOnJpbmctaW5kaWdvLTQwMFxyXG4gICAgICAgIGZvY3VzOnJpbmctb3BhY2l0eS00MFxyXG4gICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZVxyXG4gICAgICAgIHNoYWRvd1xyXG4gICAgICAgICR7aXNBdXRob3JpemluZyAmJiBcImN1cnNvci1ub3QtYWxsb3dlZFwifWB9XHJcbiAgICAgICAgb25DbGljaz17YXV0aG9yaXplV2FsbGV0fVxyXG4gICAgICAgIGRpc2FibGVkPXtpc0F1dGhvcml6aW5nfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lzQXV0aG9yaXppbmcgPyA8U3Bpbm5lckljb24gLz4gOiBcIkNvbm5lY3QgRXRoZXJldW0gV2FsbGV0XCJ9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hlY2tXYWxsZXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWNjb3VudCkge1xyXG4gICAgICByZWZyZXNoUGFydHlDb3VudCgpO1xyXG4gICAgfVxyXG4gIH0sIFthY2NvdW50XSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvbk5ld1BhcnR5ID0gKGhvc3Q6IHN0cmluZykgPT4ge1xyXG4gICAgICBzZXRQYXJ0eUNvdW50KHBhcnR5Q291bnQgKyAxKTtcclxuXHJcbiAgICAgIGlmIChhY2NvdW50LnRvVXBwZXJDYXNlKCkgPT09IGhvc3QudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgIHNldE15UGFydHlDb3VudChteVBhcnR5Q291bnQgKyAxKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbk5ld0xlYWRlciA9IChob3N0OiBzdHJpbmcpID0+IHtcclxuICAgICAgc2V0QmVzdChob3N0KTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGNvbnRyYWN0OiBldGhlcnMuQ29udHJhY3Q7XHJcblxyXG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgIGlmIChldGhlcmV1bSkge1xyXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XHJcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG5cclxuICAgICAgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KENPTlRSQUNUX0FERFJFU1MsIEFCSS5hYmksIHNpZ25lcik7XHJcbiAgICAgIGNvbnRyYWN0Lm9uKCdOZXdQYXJ0eScsIG9uTmV3UGFydHkpO1xyXG4gICAgICBjb250cmFjdC5vbignTmV3TGVhZGVyJywgb25OZXdMZWFkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmIChjb250cmFjdCkge1xyXG4gICAgICAgIGNvbnRyYWN0Lm9mZignTmV3UGFydHknLCBvbk5ld1BhcnR5KTtcclxuICAgICAgICBjb250cmFjdC5vZmYoJ05ld0xlYWRlcicsIG9uTmV3TGVhZGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFxyXG4gICAgICBtaW4taC1zY3JlZW5cclxuICAgICAgdy1mdWxsIG14LWF1dG8gbWF4LXctNXhsXHJcbiAgICAgIHB0LTMyXCJcclxuICAgID5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgPGgxXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclxyXG4gICAgICAgIHRleHQtNXhsIHRyYWNraW5nLXRpZ2h0IGZvbnQtYm9sZFxyXG4gICAgICAgIGxlYWRpbmctcmVsYXhlZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQmUgdGhlIGxpZmUgb2YgdGhlIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTMwMFwiPnBhcnR5PC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgIG92ZXJuaWdodFxyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIDxoMlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcclxuICAgICAgICB0ZXh0LXhsIG1heC13LXhsIG14LWF1dG9cclxuICAgICAgICB0ZXh0LWdyYXktNDAwXHJcbiAgICAgICAgbGVhZGluZy1yZWxheGVkXHJcbiAgICAgICAgbXQtMlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUGFydHlQb3BwZXIgaXMgYSBzZXJ2aWNlIHRoYXQgdGhyb3cgd2lsZCBwYXJ0aWVzIGZvciB5b3Ugb3ZlciB0aGVcclxuICAgICAgICAgIHdvcmxkIG9mIG1ldGF2ZXJzZS4gVGhyb3cgcGFydGllcyB3aXRoIHVzIGFuZCBncmFiIGEgY2hhbmNlIHRvIHdpblxyXG4gICAgICAgICAgc29tZSBldGhlcnMhXHJcbiAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleFxyXG4gICAgICAgIHctZnVsbCBtYXgtdy14bCBteC1hdXRvXHJcbiAgICAgICAgc3BhY2UteC00XHJcbiAgICAgICAgbXQtMTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwYXJ0eUZvcm0oKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LWNlbnRlciBtdC0yXCI+e2Vycm9yfTwvcD59XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXQtMzYgc3BhY2UteS0xMlwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICAgIEN1cnJlbnQgTGVhZGVyYm9hcmRcclxuICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC0xNlwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcclxuICAgICAgICAgICAgdGV4dC01eGxcclxuICAgICAgICAgICAgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2VcclxuICAgICAgICAgICAgICB0ZXh0LXNtIFxyXG4gICAgICAgICAgICAgIHRleHQtZ3JheS00MDBcclxuICAgICAgICAgICAgICB0cmFja2luZy13aWRlclxyXG4gICAgICAgICAgICAgIG1iLTRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFRvdGFsIFBhcnRpZXNcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+e3BhcnR5Q291bnR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHthY2NvdW50ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclxyXG4gICAgICAgICAgICB0ZXh0LTV4bFxyXG4gICAgICAgICAgICBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwcGVyY2FzZVxyXG4gICAgICAgICAgICAgIHRleHQtc20gXHJcbiAgICAgICAgICAgICAgdGV4dC1ncmF5LTQwMFxyXG4gICAgICAgICAgICAgIHRyYWNraW5nLXdpZGVyXHJcbiAgICAgICAgICAgICAgbWItNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFlvdXIgUGFydGllc1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e215UGFydHlDb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcclxuICAgICAgICAgICAgICBtdC0xMiBtYi0yOFxyXG4gICAgICAgICAgICAgIGZvbnQtYm9sZFxyXG4gICAgICAgICAgICAgIGNvbC1zcGFuLTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwcGVyY2FzZVxyXG4gICAgICAgICAgICAgIHRleHQtc20gXHJcbiAgICAgICAgICAgICAgdGV4dC1ncmF5LTQwMFxyXG4gICAgICAgICAgICAgIHRyYWNraW5nLXdpZGVyXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgbWItNFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFRoZSBQYXJ0eSBBbmltYWxcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIHtiZXN0ID8gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC01eGxcIj5cclxuICAgICAgICAgICAgICB7YCR7YmVzdC5zbGljZSgwLCA0KX0uLi4ke2Jlc3Quc2xpY2UoYmVzdC5sZW5ndGggLSAzKX1gfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPk5vbmUgeWV0LiBCZSB0aGUgZmlyc3QhPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQtY2VudGVyIHB5LTggc3BhY2UteS0yXCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBNYWRlIGluIDIwMjIgYnl7XCIgXCJ9XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNDAwXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tY29sb3JzXHJcbiAgICAgICAgICAgIGhvdmVyOnRleHQtaW5kaWdvLTMwMFxyXG4gICAgICAgICAgICBhY3RpdmU6dGV4dC1pbmRpZ28tMzAwXHJcbiAgICAgICAgICAgIGZvY3VzOnRleHQtaW5kaWdvLTMwMFxyXG4gICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9OYW1jaGVlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTmFtY2hlZVxyXG4gICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgIHdpdGggZ3VpZGFuY2UgZnJvbXtcIiBcIn1cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby00MDBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1jb2xvcnNcclxuICAgICAgICAgICAgaG92ZXI6dGV4dC1pbmRpZ28tMzAwXHJcbiAgICAgICAgICAgIGFjdGl2ZTp0ZXh0LWluZGlnby0zMDBcclxuICAgICAgICAgICAgZm9jdXM6dGV4dC1pbmRpZ28tMzAwXHJcbiAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2J1aWxkc3BhY2Uuc28vXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgYnVpbGRzcGFjZVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+XHJcbiAgICAgICAgICBWaWV3IDxhXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby00MDBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1jb2xvcnNcclxuICAgICAgICAgICAgaG92ZXI6dGV4dC1pbmRpZ28tMzAwXHJcbiAgICAgICAgICAgIGFjdGl2ZTp0ZXh0LWluZGlnby0zMDBcclxuICAgICAgICAgICAgZm9jdXM6dGV4dC1pbmRpZ28tMzAwXHJcbiAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3JpbmtlYnkuZXRoZXJzY2FuLmlvL3R4LzB4YTI1YjY0ZDMyOWJkMTczNmM2MmMyODczMzAzNzBkYzhlMTdiYzk3ODQyYWI3Y2M0ZmNlYWM5MjgzODFiNjdjZlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGNvbnRyYWN0XHJcbiAgICAgICAgICA8L2E+IG9uIDxhXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby00MDBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1jb2xvcnNcclxuICAgICAgICAgICAgaG92ZXI6dGV4dC1pbmRpZ28tMzAwXHJcbiAgICAgICAgICAgIGFjdGl2ZTp0ZXh0LWluZGlnby0zMDBcclxuICAgICAgICAgICAgZm9jdXM6dGV4dC1pbmRpZ28tMzAwXHJcbiAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2V0aGVyc2Nhbi5pby9cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBFdGhlcnNjYW5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLyoqXHJcbiAqIFNwaW5uZXIgaWNvbiBTVkcgY29tcG9uZW50LiBVc2VkIHRvIGluZGljYXRlIGxvYWRpbmcgc3RhdGUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBzcGlubmVyIGljb24gc3ZnIGNvbXBvbmV0blxyXG4gKi9cclxuZnVuY3Rpb24gU3Bpbm5lckljb24oKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgYW5pbWF0ZS1zcGluXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICA+XHJcbiAgICAgIDxjaXJjbGVcclxuICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTI1XCJcclxuICAgICAgICBjeD1cIjEyXCJcclxuICAgICAgICBjeT1cIjEyXCJcclxuICAgICAgICByPVwiMTBcIlxyXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCI0XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTc1XCJcclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxyXG4gICAgICAgIGQ9XCJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6bTIgNS4yOTFBNy45NjIgNy45NjIgMCAwMTQgMTJIMGMwIDMuMDQyIDEuMTM1IDUuODI0IDMgNy45MzhsMy0yLjY0N3pcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lckljb247XHJcbiIsICJleHBvcnQgY29uc3QgQ09OVFJBQ1RfQUREUkVTUz0nMHgyQzIwZjlGODJkQzhCMEQ3QmI4OEVCODBGNjg1REQxNEMxMjBmNGIwJztcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
