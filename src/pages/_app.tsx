import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppShell from "@/pages/components/layouts/AppShell";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </div>
  );
  
}
