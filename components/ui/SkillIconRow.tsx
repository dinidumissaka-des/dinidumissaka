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
      { label: 'Claude', src: '/images/claude.webp' },
      { label: 'Google AI', src: '/images/gemini.webp' },
      { label: 'ChatGPT', src: '/images/openai.webp' },
      { label: 'Figma AI', src: '/images/figma-ai.webp' },
      { label: 'Magnific AI', src: '/images/magnific.webp' },
    ],
  },
  {
    label: 'Design Tools',
    icons: [
      { label: 'Figma', src: '/images/figma.webp' },
      { label: 'Adobe Creative Suite', src: '/images/adobe-creative.webp' },
      { label: 'Claude Design', src: '/images/claude-design.webp' },
    ],
  },
  {
    label: 'Methodologies',
    icons: [
      { label: 'Design Thinking', src: '/images/design-thinking.webp' },
      { label: 'User Research', src: '/images/user-research.webp' },
      { label: 'Design Sprints', src: '/images/design-sprint.webp' },
    ],
  },
  {
    label: 'Build Tools',
    icons: [
      { label: 'Webflow', src: '/images/webflow.webp' },
      { label: 'Claude Code', src: '/images/claude-code.webp' },
      { label: 'Cursor', src: '/images/cursor.webp' },
      { label: 'VS Code', src: '/images/vscode.webp' },
      { label: 'Vercel', src: '/images/vercel.webp' },
    ],
  },
  {
    label: 'Visual Design',
    icons: [
      { label: 'Brand Identity', src: '/images/branding.webp' },
      { label: 'Typography', src: '/images/typography.webp' },
      { label: 'Illustration', src: '/images/illustration.webp' },
      { label: 'Visual Systems', src: '/images/visual-system.webp' },
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
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {skillGroups.map((group) => (
          <div
            key={group.label}
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-manrope), sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--color-muted)',
                whiteSpace: 'nowrap',
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
              {group.icons.map((icon, i) => (
                <div key={icon.label} style={{ marginLeft: i === 0 ? 0 : '2px', zIndex: group.icons.length - i }}>
                  <SkillIcon icon={icon} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TooltipProvider>
  );
}
