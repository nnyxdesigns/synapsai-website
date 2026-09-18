'use client';

import Image from 'next/image';
import { BookOpen, FileText, Languages, Mic2 } from 'lucide-react';
import { useRef, useState } from 'react';

const studyTools = [
  {
    id: 'document',
    title: 'Work with a document',
    description: 'Bring source material into the study flow and use it as a place to begin.',
    image: '/media/generated/imaginai/study-document-concept.webp',
    alt: 'Concept ImaginAi phone mockup showing a document analysis interface.',
    icon: FileText,
  },
  {
    id: 'practice',
    title: 'Practise and revisit',
    description: 'Use exercises and corrections to identify what deserves another look.',
    image: '/media/generated/imaginai/study-practice-concept.webp',
    alt: 'Concept ImaginAi phone mockup showing a practice question and correction.',
    icon: BookOpen,
  },
  {
    id: 'voice',
    title: 'Use voice when it helps',
    description: 'Choose an interaction mode that fits the moment and the learner’s context.',
    image: '/media/generated/imaginai/study-voice-concept.webp',
    alt: 'Concept ImaginAi phone mockup showing a voice-learning interface.',
    icon: Mic2,
  },
  {
    id: 'translation',
    title: 'Move across languages',
    description: 'Access translation from the same mobile workspace as the other study tools.',
    image: '/media/generated/imaginai/study-translation-concept.webp',
    alt: 'Concept ImaginAi phone mockup showing a bilingual translation interface.',
    icon: Languages,
  },
] as const;

export function ImaginAiStudyTools() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeTool = studyTools[activeIndex];

  function moveFocus(index: number) {
    const nextIndex = (index + studyTools.length) % studyTools.length;
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const movement: Partial<Record<React.KeyboardEvent['key'], number>> = {
      ArrowRight: 1,
      ArrowLeft: -1,
      ArrowDown: 2,
      ArrowUp: -2,
    };
    if (event.key === 'Home') {
      event.preventDefault();
      moveFocus(0);
      return;
    }
    if (event.key === 'End') {
      event.preventDefault();
      moveFocus(studyTools.length - 1);
      return;
    }
    const offset = movement[event.key];
    if (offset) {
      event.preventDefault();
      moveFocus(index + offset);
    }
  }

  return (
    <div className="imaginai-study-layout">
      <div
        className="imaginai-study-stage"
        role="tabpanel"
        id={`study-panel-${activeTool.id}`}
        aria-labelledby={`study-tab-${activeTool.id}`}
      >
        {studyTools.map((tool, index) => (
          <Image
            key={tool.id}
            className={index === activeIndex ? 'is-active' : ''}
            src={tool.image}
            alt={index === activeIndex ? tool.alt : ''}
            fill
            sizes="(max-width: 850px) 100vw, 64vw"
          />
        ))}
        <span className="imaginai-study-concept-label">
          Concept visualization · {activeTool.title}
        </span>
      </div>
      <div className="imaginai-tool-grid" role="tablist" aria-label="ImaginAi study tools">
        {studyTools.map((tool, index) => {
          const Icon = tool.icon;
          const selected = index === activeIndex;
          return (
            <button
              key={tool.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`study-tab-${tool.id}`}
              aria-selected={selected}
              aria-controls={`study-panel-${tool.id}`}
              tabIndex={selected ? 0 : -1}
              className={selected ? 'is-active' : ''}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <Icon aria-hidden="true" />
              <span>
                <strong>{tool.title}</strong>
                <small>{tool.description}</small>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
