'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/animate-ui/components/animate/tooltip';

type SkillIcon = {
  label: string;
  src: string;
};

type SkillGroup = {
  label: string;
  icons: SkillIcon[];
};

const skillGroups: SkillGroup[] = [
  {
    label: 'AI Tools',
    icons: [
      { label: 'Claude', src: '/images/claude.png' },
      { label: 'Google AI', src: '/images/gemini.png' },
      { label: 'ChatGPT', src: '/images/openai.png' },
      { label: 'Figma AI', src: '/images/figma-ai.png' },
      { label: 'Magnific AI', src: '/images/magnific.png' },
    ],
  },
  {
    label: 'Design Tools',
    icons: [
      { label: 'Figma', src: '/images/figma.png' },
      { label: 'Adobe Creative Suite', src: '/images/adobe-creative.png' },
      { label: 'Claude Design', src: '/images/claude-design.png' },
    ],
  },
  {
    label: 'Methodologies',
    icons: [
      { label: 'Design Thinking', src: '/images/design-thinking.png' },
      { label: 'User Research', src: '/images/user research.png' },
      { label: 'Design Sprints', src: '/images/design-sprint.png' },
    ],
  },
  {
    label: 'Build Tools',
    icons: [
      { label: 'Webflow', src: '/images/webflow.png' },
      { label: 'Claude Code', src: '/images/claude-code.png' },
      { label: 'Cursor', src: '/images/cursor.png' },
      { label: 'VS Code', src: '/images/vscode.png' },
      { label: 'Vercel', src: '/images/vercel.png' },
    ],
  },
  {
    label: 'Visual Design',
    icons: [
      { label: 'Brand Identity', src: '/images/branding.png' },
      { label: 'Typography', src: '/images/typogrphy.png' },
      { label: 'Illustration', src: '/images/illustration.png' },
      { label: 'Visual Systems', src: '/images/visual-system.png' },
    ],
  },
];

function SkillIcon({ icon }: { icon: SkillIcon }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            overflow: 'hidden',
            cursor: 'default',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid var(--bg-subtle)',
          }}
        >
          <Image
            src={icon.src}
            alt={icon.label}
            width={24}
            height={24}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>{icon.label}</TooltipContent>
    </Tooltip>
  );
}

export function SkillIconRow() {
  return (
    <TooltipProvider>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {skillGroups.map((group) => (
          <div
            key={group.label}
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-manrope), sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--color-fg)',
                minWidth: '120px',
                flexShrink: 0,
              }}
            >
              {group.label}
            </span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'var(--bg-subtle)',
                borderRadius: '9999px',
                padding: '3px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '2px' }}>
                {group.icons.map((icon, i) => (
                  <div key={icon.label} style={{ marginLeft: i === 0 ? 0 : '2px', zIndex: group.icons.length - i }}>
                    <SkillIcon icon={icon} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </TooltipProvider>
  );
}
