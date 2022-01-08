import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import styles from './style.css';
import type { MetaFunction, LinksFunction } from 'remix';

export const meta: MetaFunction = () => {
  const description = 'Throw parties on metaverse and win some ethers!';

  return {
    title: 'PartyPortal',
    description,
    keywords: 'Remix,Web3,Metamask,buildspace',
    'og:title': 'PartyPortal',
    'og:description': description,
    'og:image': '/og-banner.png',
    'og:url': 'https://sol-three.vercel.app',
    'og:type': 'website',
    'twitter:title': 'PartyPortal',
    'twitter:description': description,
    'twitter:card': 'summary_large_image',
    'twitter:size': '@lakban_hitam',
    'twitter:creator': '@lakban_hitam',
  };
};

export const links: LinksFunction = () => {
  return [
    { rel: 'icon', href: '/favicon.png', sizes: '32x32' },
    { rel: 'stylesheet', href: styles },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap' },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="antialiased
        min-h-screen
        bg-gray-800 text-white">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
