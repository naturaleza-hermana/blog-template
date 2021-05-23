import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
        <link rel="stylesheet" href="https://tailwindcomponents.com/css/component.nature.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300;900&display=swap" rel="stylesheet" /> 
      </Head>
      
      {children}
      
    </div>
  );
}
