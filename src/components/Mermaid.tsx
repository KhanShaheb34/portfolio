'use client';

import mermaid from 'mermaid';
import { useEffect, useRef } from 'react';

const MERMAID_ID_PREFIX = 'mermaid-';
const MERMAID_ID_RADIX = 36;
const MERMAID_ID_SLICE_START = 2;
const MERMAID_ID_SLICE_END = 9;

const MERMAID_THEME_CONFIG = {
  startOnLoad: true,
  theme: 'base',
  securityLevel: 'strict',
  themeVariables: {
    background: 'transparent',
    primaryColor: '#1e1b16',
    primaryTextColor: '#efefef',
    primaryBorderColor: '#ffe0c2',
    secondaryColor: '#25221c',
    secondaryTextColor: '#efefef',
    secondaryBorderColor: '#ffe0c2',
    tertiaryColor: '#2d2921',
    tertiaryTextColor: '#efefef',
    tertiaryBorderColor: '#ffe0c2',
    lineColor: '#ffe0c2',
    textColor: '#efefef',
    nodeTextColor: '#efefef',
    mainBkg: '#1e1b16',
    fontFamily: 'var(--font-fira-mono), monospace',
    edgeLabelBackground: '#1e1b16',
    clusterBkg: '#1e1b16',
    clusterBorder: '#ffe0c2',
    er__entityFill: '#1e1b16',
    er__entityStroke: '#ffe0c2',
    er__entityTextColor: '#efefef',
    er__attributeFill: '#25221c',
    er__attributeStroke: '#ffe0c2',
    er__attributeTextColor: '#efefef',
    erEntityFill: '#1e1b16',
    erEntityStroke: '#ffe0c2',
    erEntityTextColor: '#efefef',
    erAttributeFill: '#25221c',
    erAttributeStroke: '#ffe0c2',
    erAttributeTextColor: '#efefef',
    erAttributeFillEven: '#1e1b16',
    erAttributeFillOdd: '#25221c',
    colorScale: [
      '#f59e0b',
      '#22d3ee',
      '#a855f7',
      '#22c55e',
      '#f472b6',
      '#facc15',
      '#ef4444',
    ],
    pie1: '#f59e0b',
    pie2: '#22d3ee',
    pie3: '#a855f7',
    pie4: '#22c55e',
    pie5: '#f472b6',
    pie6: '#facc15',
    pie7: '#ef4444',
    git0: '#f59e0b',
    git1: '#22d3ee',
    git2: '#a855f7',
    git3: '#22c55e',
    gitBranchLabelColor: '#efefef',
    gitBranchLabelBackground: '#1e1b16',
    gitInv0: '#1e1b16',
    gitLabelColor: '#efefef',
  },
  themeCSS: `
    .er-diagram rect.er-entityBox,
    .er-diagram rect.er-entityLabel,
    .er-diagram rect.er-entityAttribute,
    .er-diagram rect.er-relationshipLabel {
      fill: #1e1b16 !important;
      stroke: #ffe0c2 !important;
    }
    .er-diagram g.entity > g path[stroke="none"],
    .er-diagram g.entity rect.er-entityAttribute,
    .er-diagram g.entity rect.er-entityAttributeLabel,
    .er-diagram g.entity rect[class*="row-rect"] {
      fill: #25221c !important;
    }
    .er-diagram g.entity > g:first-of-type path[stroke="none"],
    .er-diagram g.entity > g:first-of-type rect {
      fill: #1e1b16 !important;
    }
    .er-diagram text {
      fill: #efefef !important;
    }
    .er-diagram line,
    .er-diagram path {
      stroke: #ffe0c2 !important;
    }
    .pieTitle,
    .pieLabel,
    .label text,
    .slice text {
      fill: #efefef !important;
    }
    .pieSection path {
      stroke: #1e1b16;
      stroke-width: 2px;
    }
    .gitLabel text,
    .commitLabel {
      fill: #efefef !important;
    }
    .gitLabel rect {
      fill: #1e1b16;
      stroke: #ffe0c2;
    }
  `,
} as const;

type MermaidProps = {
  chart: string;
  className?: string;
};

const Mermaid = ({ chart, className = '' }: MermaidProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize(MERMAID_THEME_CONFIG);
  }, []);

  useEffect(() => {
    let cancelled = false;

    if (ref.current) {
      const randomValue = Math.random().toString(MERMAID_ID_RADIX);
      const randomSegment = randomValue.slice(
        MERMAID_ID_SLICE_START,
        MERMAID_ID_SLICE_END
      );
      const id = `${MERMAID_ID_PREFIX}${randomSegment}`;
      ref.current.innerHTML = '';

      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          if (ref.current && !cancelled) {
            ref.current.innerHTML = svg;
          }
        })
        .catch((error) => {
          if (ref.current && !cancelled) {
            ref.current.innerHTML = '';
            const errorElement = document.createElement('pre');
            errorElement.textContent = `Error rendering diagram: ${error.message}`;
            errorElement.style.color = 'red';
            ref.current.appendChild(errorElement);
          }
        });
    }

    return () => {
      cancelled = true;
    };
  }, [chart]);

  return (
    <div
      className={`mermaid-container my-8 flex justify-center ${className}`}
      ref={ref}
    />
  );
};

export default Mermaid;
