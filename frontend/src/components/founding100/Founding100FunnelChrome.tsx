import type { ReactNode } from "react";

type Founding100FunnelChromeProps = {
  context: string;
  children: ReactNode;
};

export function Founding100FunnelChrome({ context, children }: Founding100FunnelChromeProps) {
  return (
    <div className="f100-funnel-page">
      <header className="f100-funnel-topbar">
        <a className="f100-funnel-wordmark" href="/" aria-label="StrategicAI home">
          <span>Strategic</span>AI
        </a>
        <p>
          Founding 100 <span aria-hidden="true">/</span> {context}
        </p>
      </header>
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
