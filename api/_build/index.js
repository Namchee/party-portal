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
var style_default = "/build/_assets/style-HJSK6QNZ.css";

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
    name: "getTotalParty",
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
var bytecode = "0x60806040526200004f6040518060400160405280601681526020017f50617274792072756e6e696e272e20506f6767657273000000000000000000008152506200007860201b620006e41760201c565b6103e84442620000609190620001c5565b6200006c919062000266565b6004819055506200030d565b62000118816040516024016200008f919062000185565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200011b60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200015182620001a9565b6200015d8185620001b4565b93506200016f81856020860162000230565b6200017a81620002fc565b840191505092915050565b60006020820190508181036000830152620001a1818462000144565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000620001d28262000226565b9150620001df8362000226565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156200021b576200021a6200029e565b5b828202905092915050565b6000819050919050565b60005b838110156200025057808201518184015260208101905062000233565b8381111562000260576000848401525b50505050565b6000620002738262000226565b9150620002808362000226565b925082620002935762000292620002cd565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b611120806200031d6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80636d5ab6d714610051578063a8311aa81461006f578063ad0f2e061461008d578063ba4b3cb2146100ab575b600080fd5b6100596100c7565b6040516100669190610ca5565b60405180910390f35b6100776100d3565b6040516100849190610bd1565b60405180910390f35b610095610224565b6040516100a29190610bb6565b60405180910390f35b6100c560048036038101906100c0919061094d565b61024e565b005b60008080549050905090565b60606000805480602002602001604051908101604052809291908181526020016000905b8282101561021b57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461018090610ee5565b80601f01602080910402602001604051908101604052809291908181526020018280546101ac90610ee5565b80156101f95780601f106101ce576101008083540402835291602001916101f9565b820191906000526020600020905b8154815290600101906020018083116101dc57829003601f168201915b50505050508152602001600282015481525050815260200190600101906100f7565b50505050905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b426104b0600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461029c9190610db7565b106102dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d390610c45565b60405180910390fd5b42600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600060405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906103df929190610842565b5060408201518160020155505060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461043b9190610db7565b9250508190555060016000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054111561052c5733600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b6103e8444261053b9190610e0d565b6105459190610f48565b600481905550604560045411610691576105946040518060400160405280600781526020017f25732c20776f6e000000000000000000000000000000000000000000000000008152503361077d565b60006509184e72a0009050478111156105e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d990610c85565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161060890610ba1565b60006040518083038185875af1925050503d8060008114610645576040519150601f19603f3d011682016040523d82523d6000602084013e61064a565b606091505b505090508061068e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068590610c65565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167ff9a6af53c5fc98f326a94053644fe1b3e1a9fe5d82a650606b585aeb9584f32042836040516106d9929190610cc0565b60405180910390a250565b61077a816040516024016106f89190610bf3565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610819565b50565b6108158282604051602401610793929190610c15565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610819565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461084e90610ee5565b90600052602060002090601f01602090048101928261087057600085556108b7565b82601f1061088957805160ff19168380011785556108b7565b828001600101855582156108b7579182015b828111156108b657825182559160200191906001019061089b565b5b5090506108c491906108c8565b5090565b5b808211156108e15760008160009055506001016108c9565b5090565b60006108f86108f384610d15565b610cf0565b90508281526020810184848401111561091057600080fd5b61091b848285610ea3565b509392505050565b600082601f83011261093457600080fd5b81356109448482602086016108e5565b91505092915050565b60006020828403121561095f57600080fd5b600082013567ffffffffffffffff81111561097957600080fd5b61098584828501610923565b91505092915050565b600061099a8383610b33565b905092915050565b6109ab81610e67565b82525050565b6109ba81610e67565b82525050565b60006109cb82610d56565b6109d58185610d79565b9350836020820285016109e785610d46565b8060005b85811015610a235784840389528151610a04858261098e565b9450610a0f83610d6c565b925060208a019950506001810190506109eb565b50829750879550505050505092915050565b6000610a4082610d61565b610a4a8185610d95565b9350610a5a818560208601610eb2565b610a6381611035565b840191505092915050565b6000610a7982610d61565b610a838185610da6565b9350610a93818560208601610eb2565b610a9c81611035565b840191505092915050565b6000610ab4601c83610da6565b9150610abf82611046565b602082019050919050565b6000610ad7602883610da6565b9150610ae28261106f565b604082019050919050565b6000610afa601383610da6565b9150610b05826110be565b602082019050919050565b6000610b1d600083610d8a565b9150610b28826110e7565b600082019050919050565b6000606083016000830151610b4b60008601826109a2565b5060208301518482036020860152610b638282610a35565b9150506040830151610b786040860182610b83565b508091505092915050565b610b8c81610e99565b82525050565b610b9b81610e99565b82525050565b6000610bac82610b10565b9150819050919050565b6000602082019050610bcb60008301846109b1565b92915050565b60006020820190508181036000830152610beb81846109c0565b905092915050565b60006020820190508181036000830152610c0d8184610a6e565b905092915050565b60006040820190508181036000830152610c2f8185610a6e565b9050610c3e60208301846109b1565b9392505050565b60006020820190508181036000830152610c5e81610aa7565b9050919050565b60006020820190508181036000830152610c7e81610aca565b9050919050565b60006020820190508181036000830152610c9e81610aed565b9050919050565b6000602082019050610cba6000830184610b92565b92915050565b6000604082019050610cd56000830185610b92565b8181036020830152610ce78184610a6e565b90509392505050565b6000610cfa610d0b565b9050610d068282610f17565b919050565b6000604051905090565b600067ffffffffffffffff821115610d3057610d2f611006565b5b610d3982611035565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610dc282610e99565b9150610dcd83610e99565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e0257610e01610f79565b5b828201905092915050565b6000610e1882610e99565b9150610e2383610e99565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610e5c57610e5b610f79565b5b828202905092915050565b6000610e7282610e79565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610ed0578082015181840152602081019050610eb5565b83811115610edf576000848401525b50505050565b60006002820490506001821680610efd57607f821691505b60208210811415610f1157610f10610fd7565b5b50919050565b610f2082611035565b810181811067ffffffffffffffff82111715610f3f57610f3e611006565b5b80604052505050565b6000610f5382610e99565b9150610f5e83610e99565b925082610f6e57610f6d610fa8565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f57686f612c20736c6f7720646f776e207468657265206368616d702100000000600082015250565b7f4661696c656420746f207769746864726177206574686572732066726f6d206360008201527f6f6e74726163742e000000000000000000000000000000000000000000000000602082015250565b7f57652063616e2774206c6f616e2c206475682100000000000000000000000000600082015250565b5056fea26469706673582212209269b7cf7236b5ab7e12e67fdc6e9c00fbefb08ca338f2406e0d95c2783d1b9864736f6c63430008040033";
var deployedBytecode = "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80636d5ab6d714610051578063a8311aa81461006f578063ad0f2e061461008d578063ba4b3cb2146100ab575b600080fd5b6100596100c7565b6040516100669190610ca5565b60405180910390f35b6100776100d3565b6040516100849190610bd1565b60405180910390f35b610095610224565b6040516100a29190610bb6565b60405180910390f35b6100c560048036038101906100c0919061094d565b61024e565b005b60008080549050905090565b60606000805480602002602001604051908101604052809291908181526020016000905b8282101561021b57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461018090610ee5565b80601f01602080910402602001604051908101604052809291908181526020018280546101ac90610ee5565b80156101f95780601f106101ce576101008083540402835291602001916101f9565b820191906000526020600020905b8154815290600101906020018083116101dc57829003601f168201915b50505050508152602001600282015481525050815260200190600101906100f7565b50505050905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b426104b0600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461029c9190610db7565b106102dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d390610c45565b60405180910390fd5b42600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600060405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906103df929190610842565b5060408201518160020155505060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461043b9190610db7565b9250508190555060016000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054111561052c5733600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b6103e8444261053b9190610e0d565b6105459190610f48565b600481905550604560045411610691576105946040518060400160405280600781526020017f25732c20776f6e000000000000000000000000000000000000000000000000008152503361077d565b60006509184e72a0009050478111156105e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d990610c85565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161060890610ba1565b60006040518083038185875af1925050503d8060008114610645576040519150601f19603f3d011682016040523d82523d6000602084013e61064a565b606091505b505090508061068e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068590610c65565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167ff9a6af53c5fc98f326a94053644fe1b3e1a9fe5d82a650606b585aeb9584f32042836040516106d9929190610cc0565b60405180910390a250565b61077a816040516024016106f89190610bf3565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610819565b50565b6108158282604051602401610793929190610c15565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610819565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461084e90610ee5565b90600052602060002090601f01602090048101928261087057600085556108b7565b82601f1061088957805160ff19168380011785556108b7565b828001600101855582156108b7579182015b828111156108b657825182559160200191906001019061089b565b5b5090506108c491906108c8565b5090565b5b808211156108e15760008160009055506001016108c9565b5090565b60006108f86108f384610d15565b610cf0565b90508281526020810184848401111561091057600080fd5b61091b848285610ea3565b509392505050565b600082601f83011261093457600080fd5b81356109448482602086016108e5565b91505092915050565b60006020828403121561095f57600080fd5b600082013567ffffffffffffffff81111561097957600080fd5b61098584828501610923565b91505092915050565b600061099a8383610b33565b905092915050565b6109ab81610e67565b82525050565b6109ba81610e67565b82525050565b60006109cb82610d56565b6109d58185610d79565b9350836020820285016109e785610d46565b8060005b85811015610a235784840389528151610a04858261098e565b9450610a0f83610d6c565b925060208a019950506001810190506109eb565b50829750879550505050505092915050565b6000610a4082610d61565b610a4a8185610d95565b9350610a5a818560208601610eb2565b610a6381611035565b840191505092915050565b6000610a7982610d61565b610a838185610da6565b9350610a93818560208601610eb2565b610a9c81611035565b840191505092915050565b6000610ab4601c83610da6565b9150610abf82611046565b602082019050919050565b6000610ad7602883610da6565b9150610ae28261106f565b604082019050919050565b6000610afa601383610da6565b9150610b05826110be565b602082019050919050565b6000610b1d600083610d8a565b9150610b28826110e7565b600082019050919050565b6000606083016000830151610b4b60008601826109a2565b5060208301518482036020860152610b638282610a35565b9150506040830151610b786040860182610b83565b508091505092915050565b610b8c81610e99565b82525050565b610b9b81610e99565b82525050565b6000610bac82610b10565b9150819050919050565b6000602082019050610bcb60008301846109b1565b92915050565b60006020820190508181036000830152610beb81846109c0565b905092915050565b60006020820190508181036000830152610c0d8184610a6e565b905092915050565b60006040820190508181036000830152610c2f8185610a6e565b9050610c3e60208301846109b1565b9392505050565b60006020820190508181036000830152610c5e81610aa7565b9050919050565b60006020820190508181036000830152610c7e81610aca565b9050919050565b60006020820190508181036000830152610c9e81610aed565b9050919050565b6000602082019050610cba6000830184610b92565b92915050565b6000604082019050610cd56000830185610b92565b8181036020830152610ce78184610a6e565b90509392505050565b6000610cfa610d0b565b9050610d068282610f17565b919050565b6000604051905090565b600067ffffffffffffffff821115610d3057610d2f611006565b5b610d3982611035565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610dc282610e99565b9150610dcd83610e99565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e0257610e01610f79565b5b828201905092915050565b6000610e1882610e99565b9150610e2383610e99565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610e5c57610e5b610f79565b5b828202905092915050565b6000610e7282610e79565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610ed0578082015181840152602081019050610eb5565b83811115610edf576000848401525b50505050565b60006002820490506001821680610efd57607f821691505b60208210811415610f1157610f10610fd7565b5b50919050565b610f2082611035565b810181811067ffffffffffffffff82111715610f3f57610f3e611006565b5b80604052505050565b6000610f5382610e99565b9150610f5e83610e99565b925082610f6e57610f6d610fa8565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f57686f612c20736c6f7720646f776e207468657265206368616d702100000000600082015250565b7f4661696c656420746f207769746864726177206574686572732066726f6d206360008201527f6f6e74726163742e000000000000000000000000000000000000000000000000602082015250565b7f57652063616e2774206c6f616e2c206475682100000000000000000000000000600082015250565b5056fea26469706673582212209269b7cf7236b5ab7e12e67fdc6e9c00fbefb08ca338f2406e0d95c2783d1b9864736f6c63430008040033";
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
var CONTRACT_ADDRESS = "0xE9cB06338a623EE15400Ab3Ffd20bc3E7676E5c4";

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

// route-module:D:\Projects\sol\app\routes\index.tsx
function Index() {
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
      const partyCount2 = await contract.getTotalParty();
      const parties = await contract.getParties();
      const userParties = parties.filter((p) => p.host === account).length;
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
      return;
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
        const partyTrx = await contract.throwParty(punchline);
        console.log("Throwing party...", partyTrx.hash);
        await partyTrx.wait();
        console.log("Party Thrown...", partyTrx.hash);
        setIsMining(false);
        setPunchline("");
        await refreshPartyCount();
        return;
      }
      throw new Error("Ethereum wallet does not exist!");
    } catch (err) {
      const error2 = err;
      setError(error2.message);
    }
  };
  const partyButtonClass = () => {
    return `mx-auto
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
  const partyForm = () => {
    return account ? /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("input", {
      type: "text",
      className: punchlineInputClass(),
      disabled: isMining,
      value: punchline,
      onChange: (e) => setPunchline(e.target.value),
      placeholder: "Your party punchline"
    }), /* @__PURE__ */ React3.createElement("button", {
      onClick: party,
      className: partyButtonClass(),
      disabled: isMining
    }, isMining ? /* @__PURE__ */ React3.createElement(LoadingIcon_default, null) : "Throw Party!")) : /* @__PURE__ */ React3.createElement("button", {
      className: "bg-indigo-500\r\n        mx-auto\r\n        grid place-items-center\r\n        text-lg\r\n        font-medium\r\n        py-4 px-6\r\n        w-72\r\n        rounded-md\r\n        transition-all\r\n        hover:bg-indigo-600\r\n        focus:bg-indigo-600\r\n        focus:ring-4\r\n        focus:ring-indigo-400\r\n        focus:ring-opacity-40\r\n        focus:outline-none",
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
  return /* @__PURE__ */ React3.createElement("div", {
    className: "flex flex-col\r\n      min-h-screen\r\n      w-full mx-auto max-w-5xl\r\n      pt-32"
  }, /* @__PURE__ */ React3.createElement("section", {
    className: "flex-1"
  }, /* @__PURE__ */ React3.createElement("h1", {
    className: "text-center\r\n        text-5xl tracking-tight font-bold\r\n        leading-relaxed"
  }, "Be the life of the party overnight"), /* @__PURE__ */ React3.createElement("h2", {
    className: "text-center\r\n        text-xl max-w-xl mx-auto\r\n        text-gray-400\r\n        leading-relaxed\r\n        mt-2"
  }, "PartyPopper is a service that throw wild parties for you over the world of metaverse. Throw parties with us and grab a chance to win some ethers!"), /* @__PURE__ */ React3.createElement("div", {
    className: "flex\r\n        w-full max-w-xl mx-auto\r\n        space-x-4\r\n        mt-12"
  }, partyForm()), error && /* @__PURE__ */ React3.createElement("p", {
    className: "text-red-500 text-center mt-2"
  }, error), account && /* @__PURE__ */ React3.createElement("div", {
    className: "flex flex-col items-center my-32 space-y-16"
  }, /* @__PURE__ */ React3.createElement("p", {
    className: "text-center text-3xl font-bold tracking-tight"
  }, "Leaderboard"), /* @__PURE__ */ React3.createElement("div", {
    className: "inline-grid grid-cols-2 grid-flow-row gap-12"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "text-center\r\n            text-5xl\r\n            font-bold"
  }, /* @__PURE__ */ React3.createElement("p", {
    className: "uppercase\r\n              text-sm \r\n              text-gray-400\r\n              tracking-wider\r\n              mb-4"
  }, "Parties thrown"), /* @__PURE__ */ React3.createElement("p", null, partyCount)), /* @__PURE__ */ React3.createElement("div", {
    className: "text-center\r\n            text-5xl\r\n            font-bold"
  }, /* @__PURE__ */ React3.createElement("p", {
    className: "uppercase\r\n              text-sm \r\n              text-gray-400\r\n              tracking-wider\r\n              mb-4"
  }, "Your Parties"), /* @__PURE__ */ React3.createElement("p", null, myPartyCount)), /* @__PURE__ */ React3.createElement("div", {
    className: "text-center\r\n            text-5xl\r\n            font-bold\r\n            col-span-2"
  }, /* @__PURE__ */ React3.createElement("p", {
    className: "uppercase\r\n              text-sm \r\n              text-gray-400\r\n              tracking-wider\r\n              mb-4"
  }, "The Party Animal"), /* @__PURE__ */ React3.createElement("p", {
    className: "font-mono"
  }, best && `${best.slice(0, 4)}...${best.slice(best.length - 3)}`))))), /* @__PURE__ */ React3.createElement("footer", {
    className: "text-gray-400 text-center py-8"
  }, "Made in 2022 by", " ", /* @__PURE__ */ React3.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-indigo-400\r\n            transition-colors\r\n            hover:text-indigo-300\r\n            active:text-indigo-300\r\n            focus:text-indigo-300\r\n            focus:outline-none",
    href: "https://www.github.com/Namchee"
  }, "Namchee"), " ", "with guidance from", " ", /* @__PURE__ */ React3.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-indigo-400\r\n            transition-colors\r\n            hover:text-indigo-300\r\n            active:text-indigo-300\r\n            focus:text-indigo-300\r\n            focus:outline-none",
    href: "https://buildspace.so/"
  }, "buildspace")));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkQ6XFxQcm9qZWN0c1xcc29sXFxhcHBcXHJvb3QudHN4IiwgInJvdXRlLW1vZHVsZTpEOlxcUHJvamVjdHNcXHNvbFxcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICIuLi8uLi9hcHAvY29uc3RhbnQvZXRoLnRzIiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL0ljb24vTG9hZGluZ0ljb24udHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxzb2xcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcc29sXFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxzb2xcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxyXG59IGZyb20gJ3JlbWl4JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uLCBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4geyB0aXRsZTogJ1BhcnR5UG9ydGFsJyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2Zhdmljb24ucG5nJywgc2l6ZXM6ICczMngzMicgfSxcclxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9LFxyXG4gICAgeyByZWw6ICdwcmVjb25uZWN0JywgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20nIH0sXHJcbiAgICB7IHJlbDogJ3ByZWNvbm5lY3QnLCBocmVmOiAnaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbScsIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyB9LFxyXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcgfSxcclxuICBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgPGhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPE1ldGEgLz5cclxuICAgICAgICA8TGlua3MgLz5cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJhbnRpYWxpYXNlZFxyXG4gICAgICAgIG1pbi1oLXNjcmVlblxyXG4gICAgICAgIGJnLWdyYXktODAwIHRleHQtd2hpdGVcIj5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuaW1wb3J0IEFCSSBmcm9tIFwifi9jb25zdGFudC9jb250cmFjdC5qc29uXCI7XHJcbmltcG9ydCB7IENPTlRSQUNUX0FERFJFU1MgfSBmcm9tIFwifi9jb25zdGFudC9ldGhcIjtcclxuaW1wb3J0IFNwaW5uZXJJY29uIGZyb20gXCJ+L2NvbXBvbmVudHMvSWNvbi9Mb2FkaW5nSWNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzQXV0aG9yaXppbmcsIHNldElzQXV0aG9yaXppbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbcGFydHlDb3VudCwgc2V0UGFydHlDb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbXlQYXJ0eUNvdW50LCBzZXRNeVBhcnR5Q291bnRdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Jlc3QsIHNldEJlc3RdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtpc01pbmluZywgc2V0SXNNaW5pbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbcHVuY2hsaW5lLCBzZXRQdW5jaGxpbmVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHJlZnJlc2hQYXJ0eUNvdW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xyXG5cclxuICAgIGlmIChldGhlcmV1bSkge1xyXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSk7XHJcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoQ09OVFJBQ1RfQUREUkVTUywgQUJJLmFiaSwgc2lnbmVyKTtcclxuXHJcbiAgICAgIGNvbnN0IHBhcnR5Q291bnQgPSBhd2FpdCBjb250cmFjdC5nZXRUb3RhbFBhcnR5KCk7XHJcbiAgICAgIGNvbnN0IHBhcnRpZXMgPSBhd2FpdCBjb250cmFjdC5nZXRQYXJ0aWVzKCk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyUGFydGllcyA9IHBhcnRpZXMuZmlsdGVyKFxyXG4gICAgICAgIChwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiBwLmhvc3QgPT09IGFjY291bnRcclxuICAgICAgKS5sZW5ndGg7XHJcblxyXG4gICAgICBjb25zdCBiZXN0SG9zdDogc3RyaW5nID0gYXdhaXQgY29udHJhY3QuZ2V0QmVzdEhvc3QoKTtcclxuXHJcbiAgICAgIHNldFBhcnR5Q291bnQocGFydHlDb3VudC50b051bWJlcigpKTtcclxuICAgICAgc2V0TXlQYXJ0eUNvdW50KHVzZXJQYXJ0aWVzKTtcclxuICAgICAgc2V0QmVzdChiZXN0SG9zdCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tXYWxsZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XHJcbiAgICBpZiAoIWV0aGVyZXVtKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiV2FsbGV0IGlzIG5vdCBjb25uZWN0ZWQhXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJXYWxsZXQgaXMgY29ubmVjdGVkIVwiKTtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiB9KTtcclxuXHJcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcclxuICAgICAgY29uc29sZS5sb2coYEZvdW5kIGFuIGF1dGhvcml6ZWQgYWNjb3VudDogJHthY2NvdW50fWApO1xyXG4gICAgICBzZXRBY2NvdW50KGFjY291bnQpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGF1dGhvcml6ZVdhbGxldCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcclxuXHJcbiAgICBpZiAoIWV0aGVyZXVtKSB7XHJcbiAgICAgIGFsZXJ0KFwiTWV0YU1hc2sgaXMgbm90IGluc3RhbGxlZCFcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJc0F1dGhvcml6aW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhgQ29ubmVjdGVkIHdpdGg6ICR7YWNjb3VudHNbMF19YCk7XHJcblxyXG4gICAgc2V0SXNBdXRob3JpemluZyhmYWxzZSk7XHJcbiAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYXJ0eSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghcHVuY2hsaW5lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXJ0eSBwdW5jaGxpbmUgaXMgcmVxdWlyZWQhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcclxuXHJcbiAgICAgIGlmIChldGhlcmV1bSAmJiBwdW5jaGxpbmUpIHtcclxuICAgICAgICBzZXRJc01pbmluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0pO1xyXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChDT05UUkFDVF9BRERSRVNTLCBBQkkuYWJpLCBzaWduZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBwYXJ0eVRyeCA9IGF3YWl0IGNvbnRyYWN0LnRocm93UGFydHkocHVuY2hsaW5lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRocm93aW5nIHBhcnR5Li4uXCIsIHBhcnR5VHJ4Lmhhc2gpO1xyXG5cclxuICAgICAgICBhd2FpdCBwYXJ0eVRyeC53YWl0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQYXJ0eSBUaHJvd24uLi5cIiwgcGFydHlUcnguaGFzaCk7XHJcblxyXG4gICAgICAgIHNldElzTWluaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRQdW5jaGxpbmUoXCJcIik7XHJcbiAgICAgICAgYXdhaXQgcmVmcmVzaFBhcnR5Q291bnQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V0aGVyZXVtIHdhbGxldCBkb2VzIG5vdCBleGlzdCEnKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zdCBlcnJvciA9IGVyciBhcyBFcnJvcjtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFydHlCdXR0b25DbGFzcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBgbXgtYXV0b1xyXG4gICAgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXJcclxuICAgIHctNDAgaC1mdWxsXHJcbiAgICBweS00IHB4LTZcclxuICAgIHJvdW5kZWQtbWRcclxuICAgIHRleHQtbGdcclxuICAgIGZvbnQtbWVkaXVtXHJcbiAgICB0cmFuc2l0aW9uLWFsbFxyXG4gICAgJHshaXNNaW5pbmcgJiYgXCJob3ZlcjpiZy1pbmRpZ28tNjAwXCJ9XHJcbiAgICBmb2N1czpiZy1pbmRpZ28tNjAwXHJcbiAgICBmb2N1czpyaW5nLTRcclxuICAgIGZvY3VzOnJpbmctaW5kaWdvLTQwMFxyXG4gICAgZm9jdXM6cmluZy1vcGFjaXR5LTQwXHJcbiAgICBmb2N1czpvdXRsaW5lLW5vbmVcclxuICAgICR7aXNNaW5pbmcgPyBcImJnLWluZGlnby01MDBcIiA6IFwiYmctaW5kaWdvLTYwMFwifVxyXG4gICAgJHtpc01pbmluZyAmJiBcImN1cnNvci1ub3QtYWxsb3dlZFwifWA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHVuY2hsaW5lSW5wdXRDbGFzcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBgbXgtYXV0b1xyXG4gICAgICBweC02IHB5LTRcclxuICAgICAgYmctZ3JheS03MDBcclxuICAgICAgdGV4dC14bFxyXG4gICAgICBmbGV4LTFcclxuICAgICAgcm91bmRlZC1tZFxyXG4gICAgICB0cmFuc2l0aW9uLWFsbFxyXG4gICAgICBmb2N1czpyaW5nLTRcclxuICAgICAgZm9jdXM6cmluZy1pbmRpZ28tNTAwXHJcbiAgICAgIGZvY3VzOnJpbmctb3BhY2l0eS03MFxyXG4gICAgICBmb2N1czpvdXRsaW5lLW5vbmVcclxuICAgICAgJHtpc01pbmluZyAmJiBcImN1cnNvci1ub3QtYWxsb3dlZFwifVxyXG4gICAgICAke2lzTWluaW5nICYmIFwiYmctZ3JheS02MDBcIn1gO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhcnR5Rm9ybSA9ICgpID0+IHtcclxuICAgIHJldHVybiBhY2NvdW50ID8gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtwdW5jaGxpbmVJbnB1dENsYXNzKCl9XHJcbiAgICAgICAgICBkaXNhYmxlZD17aXNNaW5pbmd9XHJcbiAgICAgICAgICB2YWx1ZT17cHVuY2hsaW5lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQdW5jaGxpbmUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIHBhcnR5IHB1bmNobGluZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtwYXJ0eX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17cGFydHlCdXR0b25DbGFzcygpfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTWluaW5nfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc01pbmluZyA/IDxTcGlubmVySWNvbiAvPiA6IFwiVGhyb3cgUGFydHkhXCJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvPlxyXG4gICAgKSA6IChcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWluZGlnby01MDBcclxuICAgICAgICBteC1hdXRvXHJcbiAgICAgICAgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXJcclxuICAgICAgICB0ZXh0LWxnXHJcbiAgICAgICAgZm9udC1tZWRpdW1cclxuICAgICAgICBweS00IHB4LTZcclxuICAgICAgICB3LTcyXHJcbiAgICAgICAgcm91bmRlZC1tZFxyXG4gICAgICAgIHRyYW5zaXRpb24tYWxsXHJcbiAgICAgICAgaG92ZXI6YmctaW5kaWdvLTYwMFxyXG4gICAgICAgIGZvY3VzOmJnLWluZGlnby02MDBcclxuICAgICAgICBmb2N1czpyaW5nLTRcclxuICAgICAgICBmb2N1czpyaW5nLWluZGlnby00MDBcclxuICAgICAgICBmb2N1czpyaW5nLW9wYWNpdHktNDBcclxuICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2F1dGhvcml6ZVdhbGxldH1cclxuICAgICAgICBkaXNhYmxlZD17aXNBdXRob3JpemluZ31cclxuICAgICAgPlxyXG4gICAgICAgIHtpc0F1dGhvcml6aW5nID8gPFNwaW5uZXJJY29uIC8+IDogXCJDb25uZWN0IEV0aGVyZXVtIFdhbGxldFwifVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrV2FsbGV0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjY291bnQpIHtcclxuICAgICAgcmVmcmVzaFBhcnR5Q291bnQoKTtcclxuICAgIH1cclxuICB9LCBbYWNjb3VudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXHJcbiAgICAgIG1pbi1oLXNjcmVlblxyXG4gICAgICB3LWZ1bGwgbXgtYXV0byBtYXgtdy01eGxcclxuICAgICAgcHQtMzJcIlxyXG4gICAgPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICA8aDFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXHJcbiAgICAgICAgdGV4dC01eGwgdHJhY2tpbmctdGlnaHQgZm9udC1ib2xkXHJcbiAgICAgICAgbGVhZGluZy1yZWxheGVkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBCZSB0aGUgbGlmZSBvZiB0aGUgcGFydHkgb3Zlcm5pZ2h0XHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPGgyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclxyXG4gICAgICAgIHRleHQteGwgbWF4LXcteGwgbXgtYXV0b1xyXG4gICAgICAgIHRleHQtZ3JheS00MDBcclxuICAgICAgICBsZWFkaW5nLXJlbGF4ZWRcclxuICAgICAgICBtdC0yXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBQYXJ0eVBvcHBlciBpcyBhIHNlcnZpY2UgdGhhdCB0aHJvdyB3aWxkIHBhcnRpZXMgZm9yIHlvdSBvdmVyIHRoZVxyXG4gICAgICAgICAgd29ybGQgb2YgbWV0YXZlcnNlLiBUaHJvdyBwYXJ0aWVzIHdpdGggdXMgYW5kIGdyYWIgYSBjaGFuY2UgdG8gd2luXHJcbiAgICAgICAgICBzb21lIGV0aGVycyFcclxuICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4XHJcbiAgICAgICAgdy1mdWxsIG1heC13LXhsIG14LWF1dG9cclxuICAgICAgICBzcGFjZS14LTRcclxuICAgICAgICBtdC0xMlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3BhcnR5Rm9ybSgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7ZXJyb3IgJiZcclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCB0ZXh0LWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgICAgIHtlcnJvcn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHthY2NvdW50ICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbXktMzIgc3BhY2UteS0xNlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRcIj5cclxuICAgICAgICAgICAgICBMZWFkZXJib2FyZFxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ncmlkIGdyaWQtY29scy0yIGdyaWQtZmxvdy1yb3cgZ2FwLTEyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcclxuICAgICAgICAgICAgdGV4dC01eGxcclxuICAgICAgICAgICAgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2VcclxuICAgICAgICAgICAgICB0ZXh0LXNtIFxyXG4gICAgICAgICAgICAgIHRleHQtZ3JheS00MDBcclxuICAgICAgICAgICAgICB0cmFja2luZy13aWRlclxyXG4gICAgICAgICAgICAgIG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBQYXJ0aWVzIHRocm93blxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e3BhcnR5Q291bnR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclxyXG4gICAgICAgICAgICB0ZXh0LTV4bFxyXG4gICAgICAgICAgICBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwcGVyY2FzZVxyXG4gICAgICAgICAgICAgIHRleHQtc20gXHJcbiAgICAgICAgICAgICAgdGV4dC1ncmF5LTQwMFxyXG4gICAgICAgICAgICAgIHRyYWNraW5nLXdpZGVyXHJcbiAgICAgICAgICAgICAgbWItNFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFlvdXIgUGFydGllc1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e215UGFydHlDb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXHJcbiAgICAgICAgICAgIHRleHQtNXhsXHJcbiAgICAgICAgICAgIGZvbnQtYm9sZFxyXG4gICAgICAgICAgICBjb2wtc3Bhbi0yXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2VcclxuICAgICAgICAgICAgICB0ZXh0LXNtIFxyXG4gICAgICAgICAgICAgIHRleHQtZ3JheS00MDBcclxuICAgICAgICAgICAgICB0cmFja2luZy13aWRlclxyXG4gICAgICAgICAgICAgIG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBUaGUgUGFydHkgQW5pbWFsXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1vbm9cIj5cclxuICAgICAgICAgICAgICAgICAge2Jlc3QgJiYgYCR7YmVzdC5zbGljZSgwLCA0KX0uLi4ke2Jlc3Quc2xpY2UoYmVzdC5sZW5ndGggLSAzKX1gfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LWNlbnRlciBweS04XCI+XHJcbiAgICAgICAgTWFkZSBpbiAyMDIyIGJ5e1wiIFwifVxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby00MDBcclxuICAgICAgICAgICAgdHJhbnNpdGlvbi1jb2xvcnNcclxuICAgICAgICAgICAgaG92ZXI6dGV4dC1pbmRpZ28tMzAwXHJcbiAgICAgICAgICAgIGFjdGl2ZTp0ZXh0LWluZGlnby0zMDBcclxuICAgICAgICAgICAgZm9jdXM6dGV4dC1pbmRpZ28tMzAwXHJcbiAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9OYW1jaGVlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBOYW1jaGVlXHJcbiAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICB3aXRoIGd1aWRhbmNlIGZyb217XCIgXCJ9XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTQwMFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWNvbG9yc1xyXG4gICAgICAgICAgICBob3Zlcjp0ZXh0LWluZGlnby0zMDBcclxuICAgICAgICAgICAgYWN0aXZlOnRleHQtaW5kaWdvLTMwMFxyXG4gICAgICAgICAgICBmb2N1czp0ZXh0LWluZGlnby0zMDBcclxuICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2J1aWxkc3BhY2Uuc28vXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBidWlsZHNwYWNlXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImV4cG9ydCBjb25zdCBDT05UUkFDVF9BRERSRVNTPScweEU5Y0IwNjMzOGE2MjNFRTE1NDAwQWIzRmZkMjBiYzNFNzY3NkU1YzQnO1xyXG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLyoqXHJcbiAqIFNwaW5uZXIgaWNvbiBTVkcgY29tcG9uZW50LiBVc2VkIHRvIGluZGljYXRlIGxvYWRpbmcgc3RhdGUuXHJcbiAqXHJcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSBzcGlubmVyIGljb24gc3ZnIGNvbXBvbmV0blxyXG4gKi9cclxuZnVuY3Rpb24gU3Bpbm5lckljb24oKTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgYW5pbWF0ZS1zcGluXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICA+XHJcbiAgICAgIDxjaXJjbGVcclxuICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTI1XCJcclxuICAgICAgICBjeD1cIjEyXCJcclxuICAgICAgICBjeT1cIjEyXCJcclxuICAgICAgICByPVwiMTBcIlxyXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCI0XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTc1XCJcclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxyXG4gICAgICAgIGQ9XCJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6bTIgNS4yOTFBNy45NjIgNy45NjIgMCAwMTQgMTJIMGMwIDMuMDQyIDEuMTM1IDUuODI0IDMgNy45MzhsMy0yLjY0N3pcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lckljb247XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxD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
