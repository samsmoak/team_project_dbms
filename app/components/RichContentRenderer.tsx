'use client';

import Image from 'next/image';
import type { ContentBlock } from '../data/types';

function RenderBlock({ block, index }: { block: ContentBlock; index: number }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-base leading-relaxed text-black dark:text-slate-300 mb-4">
          {block.text}
        </p>
      );

    case 'heading':
      if (block.level === 3) {
        return (
          <h3 className="text-xl font-semibold text-black dark:text-slate-100 mt-8 mb-3">
            {block.text}
          </h3>
        );
      }
      return (
        <h4 className="text-lg font-semibold text-black dark:text-slate-200 mt-6 mb-2">
          {block.text}
        </h4>
      );

    case 'list':
      if (block.ordered) {
        return (
          <ol className="list-decimal list-outside ml-6 mb-4 space-y-2">
            {block.items.map((item, i) => (
              <li key={i} className="text-base leading-relaxed text-black dark:text-slate-300 pl-1">
                {item}
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul className="list-disc list-outside ml-6 mb-4 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="text-base leading-relaxed text-black dark:text-slate-300 pl-1">
              {item}
            </li>
          ))}
        </ul>
      );

    case 'table':
      return (
        <div className="mb-6">
          {block.caption && (
            <p className="text-sm font-semibold text-black dark:text-slate-400 mb-2 text-center">
              {block.caption}
            </p>
          )}
          <div className="overflow-x-auto rounded-lg border border-card-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-slate-800 border-b border-card-border">
                  {block.headers.map((header, i) => (
                    <th key={i} className="px-4 py-3 text-left font-semibold text-black dark:text-slate-100">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className={`border-b border-card-border last:border-b-0 ${i % 2 === 1 ? 'bg-gray-50/50 dark:bg-slate-800/30' : ''}`}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-black dark:text-slate-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case 'image':
      return (
        <figure className="mb-6">
          <div className="relative w-full overflow-hidden rounded-lg border border-card-border bg-gray-50 dark:bg-slate-800">
            <Image
              src={block.src}
              alt={block.alt}
              width={1200}
              height={700}
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
          {block.caption && (
            <figcaption className="text-sm text-black dark:text-slate-400 mt-2 text-center italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'image-grid':
      return (
        <div className="mb-6">
          <div className={`grid gap-4 ${
            block.columns === 2
              ? 'grid-cols-1 sm:grid-cols-2'
              : block.columns === 4
                ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                : 'grid-cols-2 sm:grid-cols-3'
          }`}>
            {block.images.map((img, i) => (
              <figure key={i} className="group">
                <div className="relative overflow-hidden rounded-lg border border-card-border bg-gray-50 dark:bg-slate-800 aspect-[9/19] transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                  />
                </div>
                <figcaption className="text-xs text-black dark:text-slate-400 mt-1.5 text-center">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          {block.caption && (
            <p className="text-sm text-black dark:text-slate-400 mt-3 text-center italic">
              {block.caption}
            </p>
          )}
        </div>
      );

    case 'code':
      return (
        <code className="inline-block bg-gray-100 dark:bg-slate-800 text-sm font-mono px-2 py-0.5 rounded text-black dark:text-slate-200 mb-4">
          {block.text}
        </code>
      );

    case 'callout':
      return (
        <div className="mb-4 pl-4 border-l-4 border-accent bg-blue-50/50 dark:bg-blue-950/20 rounded-r-lg py-3 pr-4">
          <span className="font-semibold text-black dark:text-slate-100">{block.label}: </span>
          <span className="text-black dark:text-slate-300">{block.text}</span>
        </div>
      );

    case 'divider':
      return <hr className="my-8 border-card-border" />;

    default:
      return null;
  }
}

export default function RichContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div>
      {blocks.map((block, i) => (
        <RenderBlock key={i} block={block} index={i} />
      ))}
    </div>
  );
}
