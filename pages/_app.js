// import App from 'next/app'
import Head from "next/head"

import "tailwindcss/tailwind.css"
import "../app.css"
import "../styles.css"

import Link from "next/link"
import { useRouter } from "next/router"

import * as Icons from "../components/icons"

import {data} from "../data"

function MyApp({ Component, pageProps }) {
  let router = useRouter()
  if(!router.isReady) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Discord Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='flex text-gray-100 h-screen'>
        <div className="hidden md:block bg-gray-900 p-3 space-y-2 overflow-y-scroll">
          <NavLink href='/'>
            <Icons.Discord className="h-5 w-7"/>
          </NavLink>

          <hr className="border-t-white/[.06] border-t-2 rounded mx-2"/>

          {data.map(server => (
            <NavLink href={`/servers/${server.id}/channels/${server.categories[0].channels[0].id}`} active={+router.query.sid === +server.id} key={server.id}>
             <img src={`/servers/${server.img}`} alt="server 1"/>
            </NavLink>
          ))}
          
        </div>
        
        <Component {...pageProps} />
      </div>
      
    </>
  );
}

export default MyApp;

function DiscordIcon(props) {
  return (
    <svg
      viewBox="0 -28.5 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M216.856 16.597A208.502 208.502 0 00164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 00-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0079.735 175.3a136.413 136.413 0 01-21.846-10.632 108.636 108.636 0 005.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 005.355 4.237 136.07 136.07 0 01-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36zM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18z"
      />
    </svg>
  )
}

function NavLink({ href, active, children }) {
  let router = useRouter();
  active ||= router.asPath === href

  return (
    <Link href={href}>
      <a className="relative block group">
        <div className="flex absolute h-full items-center -left-3">
          <div className={`${
            active
              ? "h-10" 
              : "h-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100"
        } w-1 bg-white rounded-r transition-all duration-200 origin-left`}></div>
        </div>

        <div className="group-active:translate-y-px">
          <div className={`${
            active
              ? "rounded-2xl bg-brand text-white"
              : "group-hover:bg-brand group-hover:text-white group-hover:rounded-2xl text-gray-100 bg-gray-700 rounded-3xl"
            }  w-12 h-12 flex items-center justify-center duration-200 transition-all overflow-hidden`}
            >
            {children}
          </div>
        </div>
      </a>
    </Link>
  )
}
