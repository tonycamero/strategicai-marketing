import type { ReactNode } from "react";
import { Navbar } from "../Navbar";

type Founding100FunnelChromeProps = {
  context: string;
  children: ReactNode;
};

export function Founding100FunnelChrome({ context, children }: Founding100FunnelChromeProps) {
  return (
    <div className="f100-funnel-page">
      <Navbar />
      <div className="f100-funnel-contextbar" aria-label="Founding 100 context">
        <span>Founding 100</span>
        <span aria-hidden="true">/</span>
        <span>{context}</span>
      </div>
      {children}
      <footer className="f100-funnel-footer">
        <a className="f100-funnel-wordmark" href="/" aria-label="StrategicAI home">
          <span>Strategic</span>AI
        </a>
        <p>Operational Intelligence built from Operational Reality.</p>
      </footer>
    </div>
  );
}
