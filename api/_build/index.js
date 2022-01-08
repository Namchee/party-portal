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
var style_default = "/build/_assets/style-WAUGNPWW.css";

// route-module:D:\Projects\sol\app\root.tsx
var meta = () => {
  const description = "Throw parties on metaverse and win some ethers!";
  return {
    title: "PartyPortal",
    description,
    keywords: "Remix,Web3,Metamask,buildspace",
    "og:title": "PartyPortal",
    "og:description": description,
    "og:image": "/og-banner.png",
    "og:url": "https://sol-three.vercel.app",
    "og:type": "website",
    "twitter:title": "PartyPortal",
    "twitter:description": description,
    "twitter:card": "summary_large_image",
    "twitter:size": "@lakban_hitam",
    "twitter:creator": "@lakban_hitam"
  };
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
      const totalParties = await contract.getPartyCount();
      const parties = await contract.getParties();
      const userParties = parties.filter((p) => {
        return p.host.toUpperCase() === account.toUpperCase();
      }).length;
      const bestHost = await contract.getBestHost();
      setPartyCount(totalParties.toNumber());
      setMyPartyCount(userParties);
      setBest(bestHost);
    }
  };
  const checkWallet = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      setHasMetamask(false);
      return;
    }
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
      const error2 = err;
      if (error2.message.startsWith("transaction")) {
        setError("Slow down! You've thrown too many parties at once!");
      } else {
        setError(error2.message);
      }
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
    ${isMining ? "bg-indigo-400" : "bg-indigo-500"}
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
    if (!hasMetamask) {
      return /* @__PURE__ */ React3.createElement("p", {
        className: "text-gray-300 text-2xl text-center leading-relaxed"
      }, "To use this awesome portal, install", " ", /* @__PURE__ */ React3.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-indigo-400\r\n            transition-colors\r\n            hover:text-indigo-300\r\n            active:text-indigo-300\r\n            focus:text-indigo-300\r\n            focus:outline-none",
        href: "https://metamask.io/"
      }, "Metamask"), " and refresh this page after installing");
    }
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
      setPartyCount((prev) => prev + 1);
      if (account.toUpperCase() === host.toUpperCase()) {
        setMyPartyCount((prev) => prev + 1);
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
  }, "PartyPortal is a service that throw wild parties for you over the world of metaverse. Throw parties with us and grab a chance to win some ethers!"), /* @__PURE__ */ React3.createElement("div", {
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
  }, "View", " ", /* @__PURE__ */ React3.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-indigo-400\r\n            transition-colors\r\n            hover:text-indigo-300\r\n            active:text-indigo-300\r\n            focus:text-indigo-300\r\n            focus:outline-none",
    href: "https://rinkeby.etherscan.io/tx/0xa25b64d329bd1736c62c287330370dc8e17bc97842ab7cc4fceac928381b67cf"
  }, "contract"), " ", "on", " ", /* @__PURE__ */ React3.createElement("a", {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxQcm9qZWN0c1xcc29sXFxhcHBcXHJvb3QudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcUHJvamVjdHNcXHNvbFxcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9JY29uL0xvYWRpbmdJY29uLnRzeCIsICIuLi8uLi9hcHAvY29uc3RhbnQvZXRoLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxzb2xcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcc29sXFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxzb2xcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxyXG59IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uLCBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICdUaHJvdyBwYXJ0aWVzIG9uIG1ldGF2ZXJzZSBhbmQgd2luIHNvbWUgZXRoZXJzISc7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZTogJ1BhcnR5UG9ydGFsJyxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAga2V5d29yZHM6ICdSZW1peCxXZWIzLE1ldGFtYXNrLGJ1aWxkc3BhY2UnLFxyXG4gICAgJ29nOnRpdGxlJzogJ1BhcnR5UG9ydGFsJyxcclxuICAgICdvZzpkZXNjcmlwdGlvbic6IGRlc2NyaXB0aW9uLFxyXG4gICAgJ29nOmltYWdlJzogJy9vZy1iYW5uZXIucG5nJyxcclxuICAgICdvZzp1cmwnOiAnaHR0cHM6Ly9zb2wtdGhyZWUudmVyY2VsLmFwcCcsXHJcbiAgICAnb2c6dHlwZSc6ICd3ZWJzaXRlJyxcclxuICAgICd0d2l0dGVyOnRpdGxlJzogJ1BhcnR5UG9ydGFsJyxcclxuICAgICd0d2l0dGVyOmRlc2NyaXB0aW9uJzogZGVzY3JpcHRpb24sXHJcbiAgICAndHdpdHRlcjpjYXJkJzogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxyXG4gICAgJ3R3aXR0ZXI6c2l6ZSc6ICdAbGFrYmFuX2hpdGFtJyxcclxuICAgICd0d2l0dGVyOmNyZWF0b3InOiAnQGxha2Jhbl9oaXRhbScsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gW1xyXG4gICAgeyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLnBuZycsIHNpemVzOiAnMzJ4MzInIH0sXHJcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfSxcclxuICAgIHsgcmVsOiAncHJlY29ubmVjdCcsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tJyB9LFxyXG4gICAgeyByZWw6ICdwcmVjb25uZWN0JywgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20nLCBjcm9zc09yaWdpbjogJ2Fub255bW91cycgfSxcclxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnIH0sXHJcbiAgXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgPExpbmtzIC8+XHJcbiAgICAgIDwvaGVhZD5cclxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiYW50aWFsaWFzZWRcclxuICAgICAgICBtaW4taC1zY3JlZW5cclxuICAgICAgICBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxyXG4gICAgICAgIDxTY3JpcHRzIC8+XHJcbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuXHJcbmltcG9ydCBTcGlubmVySWNvbiBmcm9tIFwifi9jb21wb25lbnRzL0ljb24vTG9hZGluZ0ljb25cIjtcclxuXHJcbmltcG9ydCBBQkkgZnJvbSBcIn4vY29uc3RhbnQvY29udHJhY3QuanNvblwiO1xyXG5pbXBvcnQgeyBDT05UUkFDVF9BRERSRVNTIH0gZnJvbSBcIn4vY29uc3RhbnQvZXRoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICBjb25zdCBbaGFzTWV0YW1hc2ssIHNldEhhc01ldGFtYXNrXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNBdXRob3JpemluZywgc2V0SXNBdXRob3JpemluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtwYXJ0eUNvdW50LCBzZXRQYXJ0eUNvdW50XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtteVBhcnR5Q291bnQsIHNldE15UGFydHlDb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYmVzdCwgc2V0QmVzdF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2lzTWluaW5nLCBzZXRJc01pbmluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtwdW5jaGxpbmUsIHNldFB1bmNobGluZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCByZWZyZXNoUGFydHlDb3VudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcclxuXHJcbiAgICBpZiAoZXRoZXJldW0pIHtcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pO1xyXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KENPTlRSQUNUX0FERFJFU1MsIEFCSS5hYmksIHNpZ25lcik7XHJcblxyXG4gICAgICBjb25zdCB0b3RhbFBhcnRpZXMgPSBhd2FpdCBjb250cmFjdC5nZXRQYXJ0eUNvdW50KCk7XHJcbiAgICAgIGNvbnN0IHBhcnRpZXMgPSBhd2FpdCBjb250cmFjdC5nZXRQYXJ0aWVzKCk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyUGFydGllcyA9IHBhcnRpZXMuZmlsdGVyKChwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHAuaG9zdC50b1VwcGVyQ2FzZSgpID09PSBhY2NvdW50LnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIH0pLmxlbmd0aDtcclxuXHJcbiAgICAgIGNvbnN0IGJlc3RIb3N0OiBzdHJpbmcgPSBhd2FpdCBjb250cmFjdC5nZXRCZXN0SG9zdCgpO1xyXG5cclxuICAgICAgc2V0UGFydHlDb3VudCh0b3RhbFBhcnRpZXMudG9OdW1iZXIoKSk7XHJcbiAgICAgIHNldE15UGFydHlDb3VudCh1c2VyUGFydGllcyk7XHJcbiAgICAgIHNldEJlc3QoYmVzdEhvc3QpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrV2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgIGlmICghZXRoZXJldW0pIHtcclxuICAgICAgc2V0SGFzTWV0YW1hc2soZmFsc2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiIH0pO1xyXG5cclxuICAgIGlmIChhY2NvdW50cy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgYWNjb3VudCA9IGFjY291bnRzWzBdO1xyXG4gICAgICBjb25zb2xlLmxvZyhgRm91bmQgYW4gYXV0aG9yaXplZCBhY2NvdW50OiAke2FjY291bnR9YCk7XHJcbiAgICAgIHNldEFjY291bnQoYWNjb3VudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXV0aG9yaXplV2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgIGlmICghZXRoZXJldW0pIHtcclxuICAgICAgYWxlcnQoXCJNZXRhTWFzayBpcyBub3QgaW5zdGFsbGVkIVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElzQXV0aG9yaXppbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcclxuICAgIGNvbnNvbGUubG9nKGBDb25uZWN0ZWQgd2l0aDogJHthY2NvdW50c1swXX1gKTtcclxuXHJcbiAgICBzZXRJc0F1dGhvcml6aW5nKGZhbHNlKTtcclxuICAgIHNldEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhcnR5ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCFwdW5jaGxpbmUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJ0eSBwdW5jaGxpbmUgaXMgcmVxdWlyZWQhXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgICBpZiAoZXRoZXJldW0gJiYgcHVuY2hsaW5lKSB7XHJcbiAgICAgICAgc2V0SXNNaW5pbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtKTtcclxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoQ09OVFJBQ1RfQUREUkVTUywgQUJJLmFiaSwgc2lnbmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgcGFydHlUcnggPSBhd2FpdCBjb250cmFjdC50aHJvd1BhcnR5KHB1bmNobGluZSwge1xyXG4gICAgICAgICAgZ2FzTGltaXQ6IDMwMDAwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcGFydHlUcngud2FpdCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFdGhlcmV1bSB3YWxsZXQgZG9lcyBub3QgZXhpc3QhXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHJcbiAgICAgIGNvbnN0IGVycm9yID0gZXJyIGFzIEVycm9yO1xyXG4gICAgICBpZiAoZXJyb3IubWVzc2FnZS5zdGFydHNXaXRoKFwidHJhbnNhY3Rpb25cIikpIHtcclxuICAgICAgICBzZXRFcnJvcihcIlNsb3cgZG93biEgWW91J3ZlIHRocm93biB0b28gbWFueSBwYXJ0aWVzIGF0IG9uY2UhXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc01pbmluZyhmYWxzZSk7XHJcbiAgICAgIHNldFB1bmNobGluZShcIlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwYXJ0eUJ1dHRvbkNsYXNzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGBteC1hdXRvXHJcbiAgICBzaGFkb3dcclxuICAgIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyXHJcbiAgICB3LTQwIGgtZnVsbFxyXG4gICAgcHktNCBweC02XHJcbiAgICByb3VuZGVkLW1kXHJcbiAgICB0ZXh0LWxnXHJcbiAgICBmb250LW1lZGl1bVxyXG4gICAgdHJhbnNpdGlvbi1hbGxcclxuICAgICR7IWlzTWluaW5nICYmIFwiaG92ZXI6YmctaW5kaWdvLTYwMFwifVxyXG4gICAgZm9jdXM6YmctaW5kaWdvLTYwMFxyXG4gICAgZm9jdXM6cmluZy00XHJcbiAgICBmb2N1czpyaW5nLWluZGlnby00MDBcclxuICAgIGZvY3VzOnJpbmctb3BhY2l0eS00MFxyXG4gICAgZm9jdXM6b3V0bGluZS1ub25lXHJcbiAgICAke2lzTWluaW5nID8gXCJiZy1pbmRpZ28tNDAwXCIgOiBcImJnLWluZGlnby01MDBcIn1cclxuICAgICR7aXNNaW5pbmcgJiYgXCJjdXJzb3Itbm90LWFsbG93ZWRcIn1gO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHB1bmNobGluZUlucHV0Q2xhc3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYG14LWF1dG9cclxuICAgICAgc2hhZG93XHJcbiAgICAgIHB4LTYgcHktNFxyXG4gICAgICBiZy1ncmF5LTcwMFxyXG4gICAgICB0ZXh0LXhsXHJcbiAgICAgIGZsZXgtMVxyXG4gICAgICByb3VuZGVkLW1kXHJcbiAgICAgIHRyYW5zaXRpb24tYWxsXHJcbiAgICAgIGZvY3VzOnJpbmctNFxyXG4gICAgICBmb2N1czpyaW5nLWluZGlnby01MDBcclxuICAgICAgZm9jdXM6cmluZy1vcGFjaXR5LTcwXHJcbiAgICAgIGZvY3VzOm91dGxpbmUtbm9uZVxyXG4gICAgICAke2lzTWluaW5nICYmIFwiY3Vyc29yLW5vdC1hbGxvd2VkXCJ9XHJcbiAgICAgICR7aXNNaW5pbmcgJiYgXCJiZy1ncmF5LTYwMFwifWA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUHVuY2hsaW5lID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRQdW5jaGxpbmUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0RXJyb3IoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFydHlGb3JtID0gKCkgPT4ge1xyXG4gICAgaWYgKCFoYXNNZXRhbWFzaykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIHRleHQtMnhsIHRleHQtY2VudGVyIGxlYWRpbmctcmVsYXhlZFwiPlxyXG4gICAgICAgICAgVG8gdXNlIHRoaXMgYXdlc29tZSBwb3J0YWwsIGluc3RhbGx7XCIgXCJ9XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNDAwXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tY29sb3JzXHJcbiAgICAgICAgICAgIGhvdmVyOnRleHQtaW5kaWdvLTMwMFxyXG4gICAgICAgICAgICBhY3RpdmU6dGV4dC1pbmRpZ28tMzAwXHJcbiAgICAgICAgICAgIGZvY3VzOnRleHQtaW5kaWdvLTMwMFxyXG4gICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tZXRhbWFzay5pby9cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBNZXRhbWFza1xyXG4gICAgICAgICAgPC9hPiBhbmQgcmVmcmVzaCB0aGlzIHBhZ2VcclxuICAgICAgICAgIGFmdGVyIGluc3RhbGxpbmdcclxuICAgICAgICA8L3A+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFjY291bnQgPyAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3B1bmNobGluZUlucHV0Q2xhc3MoKX1cclxuICAgICAgICAgIGRpc2FibGVkPXtpc01pbmluZ31cclxuICAgICAgICAgIHZhbHVlPXtwdW5jaGxpbmV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlUHVuY2hsaW5lfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIHBhcnR5IHB1bmNobGluZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtwYXJ0eX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17cGFydHlCdXR0b25DbGFzcygpfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTWluaW5nfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc01pbmluZyA/IDxTcGlubmVySWNvbiAvPiA6IFwiVGhyb3cgUGFydHkhXCJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvPlxyXG4gICAgKSA6IChcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17YGJnLWluZGlnby01MDBcclxuICAgICAgICBteC1hdXRvXHJcbiAgICAgICAgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXJcclxuICAgICAgICB0ZXh0LWxnXHJcbiAgICAgICAgZm9udC1tZWRpdW1cclxuICAgICAgICBweS00IHB4LTZcclxuICAgICAgICB3LTcyXHJcbiAgICAgICAgcm91bmRlZC1tZFxyXG4gICAgICAgIHRyYW5zaXRpb24tYWxsXHJcbiAgICAgICAgJHshaXNBdXRob3JpemluZyAmJiBcImhvdmVyOmJnLWluZGlnby02MDBcIn1cclxuICAgICAgICBmb2N1czpiZy1pbmRpZ28tNjAwXHJcbiAgICAgICAgZm9jdXM6cmluZy00XHJcbiAgICAgICAgZm9jdXM6cmluZy1pbmRpZ28tNDAwXHJcbiAgICAgICAgZm9jdXM6cmluZy1vcGFjaXR5LTQwXHJcbiAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lXHJcbiAgICAgICAgc2hhZG93XHJcbiAgICAgICAgJHtpc0F1dGhvcml6aW5nICYmIFwiY3Vyc29yLW5vdC1hbGxvd2VkXCJ9YH1cclxuICAgICAgICBvbkNsaWNrPXthdXRob3JpemVXYWxsZXR9XHJcbiAgICAgICAgZGlzYWJsZWQ9e2lzQXV0aG9yaXppbmd9XHJcbiAgICAgID5cclxuICAgICAgICB7aXNBdXRob3JpemluZyA/IDxTcGlubmVySWNvbiAvPiA6IFwiQ29ubmVjdCBFdGhlcmV1bSBXYWxsZXRcIn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGVja1dhbGxldCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY2NvdW50KSB7XHJcbiAgICAgIHJlZnJlc2hQYXJ0eUNvdW50KCk7XHJcbiAgICB9XHJcbiAgfSwgW2FjY291bnRdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG9uTmV3UGFydHkgPSAoaG9zdDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHNldFBhcnR5Q291bnQocHJldiA9PiBwcmV2ICsgMSk7XHJcblxyXG4gICAgICBpZiAoYWNjb3VudC50b1VwcGVyQ2FzZSgpID09PSBob3N0LnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICBzZXRNeVBhcnR5Q291bnQocHJldiA9PiBwcmV2ICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25OZXdMZWFkZXIgPSAoaG9zdDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHNldEJlc3QoaG9zdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBjb250cmFjdDogZXRoZXJzLkNvbnRyYWN0O1xyXG5cclxuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcclxuXHJcbiAgICBpZiAoZXRoZXJldW0pIHtcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pO1xyXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuXHJcbiAgICAgIGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChDT05UUkFDVF9BRERSRVNTLCBBQkkuYWJpLCBzaWduZXIpO1xyXG4gICAgICBjb250cmFjdC5vbihcIk5ld1BhcnR5XCIsIG9uTmV3UGFydHkpO1xyXG4gICAgICBjb250cmFjdC5vbihcIk5ld0xlYWRlclwiLCBvbk5ld0xlYWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKGNvbnRyYWN0KSB7XHJcbiAgICAgICAgY29udHJhY3Qub2ZmKFwiTmV3UGFydHlcIiwgb25OZXdQYXJ0eSk7XHJcbiAgICAgICAgY29udHJhY3Qub2ZmKFwiTmV3TGVhZGVyXCIsIG9uTmV3TGVhZGVyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcclxuICAgICAgbWluLWgtc2NyZWVuXHJcbiAgICAgIHctZnVsbCBteC1hdXRvIG1heC13LTV4bFxyXG4gICAgICBwdC0zMlwiXHJcbiAgICA+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgIDxoMVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcclxuICAgICAgICB0ZXh0LTV4bCB0cmFja2luZy10aWdodCBmb250LWJvbGRcclxuICAgICAgICBsZWFkaW5nLXJlbGF4ZWRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEJlIHRoZSBsaWZlIG9mIHRoZSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy0zMDBcIj5wYXJ0eTwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICBvdmVybmlnaHRcclxuICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICA8aDJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXHJcbiAgICAgICAgdGV4dC14bCBtYXgtdy14bCBteC1hdXRvXHJcbiAgICAgICAgdGV4dC1ncmF5LTQwMFxyXG4gICAgICAgIGxlYWRpbmctcmVsYXhlZFxyXG4gICAgICAgIG10LTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFBhcnR5UG9ydGFsIGlzIGEgc2VydmljZSB0aGF0IHRocm93IHdpbGQgcGFydGllcyBmb3IgeW91IG92ZXIgdGhlXHJcbiAgICAgICAgICB3b3JsZCBvZiBtZXRhdmVyc2UuIFRocm93IHBhcnRpZXMgd2l0aCB1cyBhbmQgZ3JhYiBhIGNoYW5jZSB0byB3aW5cclxuICAgICAgICAgIHNvbWUgZXRoZXJzIVxyXG4gICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXhcclxuICAgICAgICB3LWZ1bGwgbWF4LXcteGwgbXgtYXV0b1xyXG4gICAgICAgIHNwYWNlLXgtNFxyXG4gICAgICAgIG10LTEyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cGFydHlGb3JtKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1jZW50ZXIgbXQtMlwiPntlcnJvcn08L3A+fVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG10LTM2IHNwYWNlLXktMTJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodFwiPlxyXG4gICAgICAgICAgICBDdXJyZW50IExlYWRlcmJvYXJkXHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtMTZcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXHJcbiAgICAgICAgICAgIHRleHQtNXhsXHJcbiAgICAgICAgICAgIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBwZXJjYXNlXHJcbiAgICAgICAgICAgICAgdGV4dC1zbSBcclxuICAgICAgICAgICAgICB0ZXh0LWdyYXktNDAwXHJcbiAgICAgICAgICAgICAgdHJhY2tpbmctd2lkZXJcclxuICAgICAgICAgICAgICBtYi00XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBUb3RhbCBQYXJ0aWVzXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPntwYXJ0eUNvdW50fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7YWNjb3VudCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcclxuICAgICAgICAgICAgdGV4dC01eGxcclxuICAgICAgICAgICAgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2VcclxuICAgICAgICAgICAgICB0ZXh0LXNtIFxyXG4gICAgICAgICAgICAgIHRleHQtZ3JheS00MDBcclxuICAgICAgICAgICAgICB0cmFja2luZy13aWRlclxyXG4gICAgICAgICAgICAgIG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBZb3VyIFBhcnRpZXNcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPntteVBhcnR5Q291bnR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXHJcbiAgICAgICAgICAgICAgbXQtMTIgbWItMjhcclxuICAgICAgICAgICAgICBmb250LWJvbGRcclxuICAgICAgICAgICAgICBjb2wtc3Bhbi0yXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2VcclxuICAgICAgICAgICAgICB0ZXh0LXNtIFxyXG4gICAgICAgICAgICAgIHRleHQtZ3JheS00MDBcclxuICAgICAgICAgICAgICB0cmFja2luZy13aWRlclxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIG1iLTRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBUaGUgUGFydHkgQW5pbWFsXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICB7YmVzdCA/IChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtNXhsXCI+XHJcbiAgICAgICAgICAgICAge2Ake2Jlc3Quc2xpY2UoMCwgNCl9Li4uJHtiZXN0LnNsaWNlKGJlc3QubGVuZ3RoIC0gMyl9YH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5Ob25lIHlldC4gQmUgdGhlIGZpcnN0ITwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LWNlbnRlciBweS04IHNwYWNlLXktMlwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgTWFkZSBpbiAyMDIyIGJ5e1wiIFwifVxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTQwMFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWNvbG9yc1xyXG4gICAgICAgICAgICBob3Zlcjp0ZXh0LWluZGlnby0zMDBcclxuICAgICAgICAgICAgYWN0aXZlOnRleHQtaW5kaWdvLTMwMFxyXG4gICAgICAgICAgICBmb2N1czp0ZXh0LWluZGlnby0zMDBcclxuICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vTmFtY2hlZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE5hbWNoZWVcclxuICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICB3aXRoIGd1aWRhbmNlIGZyb217XCIgXCJ9XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNDAwXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tY29sb3JzXHJcbiAgICAgICAgICAgIGhvdmVyOnRleHQtaW5kaWdvLTMwMFxyXG4gICAgICAgICAgICBhY3RpdmU6dGV4dC1pbmRpZ28tMzAwXHJcbiAgICAgICAgICAgIGZvY3VzOnRleHQtaW5kaWdvLTMwMFxyXG4gICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9idWlsZHNwYWNlLnNvL1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGJ1aWxkc3BhY2VcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14c1wiPlxyXG4gICAgICAgICAgVmlld3tcIiBcIn1cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby00MDBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1jb2xvcnNcclxuICAgICAgICAgICAgaG92ZXI6dGV4dC1pbmRpZ28tMzAwXHJcbiAgICAgICAgICAgIGFjdGl2ZTp0ZXh0LWluZGlnby0zMDBcclxuICAgICAgICAgICAgZm9jdXM6dGV4dC1pbmRpZ28tMzAwXHJcbiAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3JpbmtlYnkuZXRoZXJzY2FuLmlvL3R4LzB4YTI1YjY0ZDMyOWJkMTczNmM2MmMyODczMzAzNzBkYzhlMTdiYzk3ODQyYWI3Y2M0ZmNlYWM5MjgzODFiNjdjZlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGNvbnRyYWN0XHJcbiAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgb257XCIgXCJ9XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNDAwXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tY29sb3JzXHJcbiAgICAgICAgICAgIGhvdmVyOnRleHQtaW5kaWdvLTMwMFxyXG4gICAgICAgICAgICBhY3RpdmU6dGV4dC1pbmRpZ28tMzAwXHJcbiAgICAgICAgICAgIGZvY3VzOnRleHQtaW5kaWdvLTMwMFxyXG4gICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ldGhlcnNjYW4uaW8vXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRXRoZXJzY2FuXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8qKlxyXG4gKiBTcGlubmVyIGljb24gU1ZHIGNvbXBvbmVudC4gVXNlZCB0byBpbmRpY2F0ZSBsb2FkaW5nIHN0YXRlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gc3Bpbm5lciBpY29uIHN2ZyBjb21wb25ldG5cclxuICovXHJcbmZ1bmN0aW9uIFNwaW5uZXJJY29uKCk6IEpTWC5FbGVtZW50IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IGFuaW1hdGUtc3BpblwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgPlxyXG4gICAgICA8Y2lyY2xlXHJcbiAgICAgICAgY2xhc3NOYW1lPVwib3BhY2l0eS0yNVwiXHJcbiAgICAgICAgY3g9XCIxMlwiXHJcbiAgICAgICAgY3k9XCIxMlwiXHJcbiAgICAgICAgcj1cIjEwXCJcclxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgIHN0cm9rZVdpZHRoPVwiNFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgY2xhc3NOYW1lPVwib3BhY2l0eS03NVwiXHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cclxuICAgICAgICBkPVwiTTQgMTJhOCA4IDAgMDE4LThWMEM1LjM3MyAwIDAgNS4zNzMgMCAxMmg0em0yIDUuMjkxQTcuOTYyIDcuOTYyIDAgMDE0IDEySDBjMCAzLjA0MiAxLjEzNSA1LjgyNCAzIDcuOTM4bDMtMi42NDd6XCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJJY29uO1xyXG4iLCAiZXhwb3J0IGNvbnN0IENPTlRSQUNUX0FERFJFU1M9JzB4MkMyMGY5RjgyZEM4QjBEN0JiODhFQjgwRjY4NUREMTRDMTIwZjRiMCc7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixL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
