import { Link } from "@tanstack/react-router";
import {
  Check,
  Copy,
  ArrowUpRight,
  Bookmark,
  Terminal,
  ArrowBigUp,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

// Zakładamy, że typ SkillRecord jest zaimportowany lub zdefiniowany wyżej
const SkillCard = ({
  id,
  title,
  slug,
  description,
  category,
  tags,
  installCommand,
  createdAt,
  authorClerkId,
  authorEmail,
}: SkillRecord) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const authorName = authorEmail ? authorEmail.split("@")[0] : "anonymous";

  return (
    <article className="relative group bg-[#0d0d0e] border border-[#1f1f23] rounded-xl overflow-hidden hover:border-[#323238] transition-all duration-200 flex flex-col h-[380px] w-full max-w-[400px]">
      {/* (Chrome Bar) */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#09090b] border-b border-[#1f1f23]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/80"></div>
        </div>
        <div className="text-[11px] font-mono text-zinc-600 tracking-wider">
          REGISTRY.SH
        </div>
        <div className="w-12"></div>{" "}
      </div>

      <div className="p-5 flex flex-col flex-grow no-underline focus:outline-none">
        <div className="flex items-center justify-between items-start mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden flex items-center justify-center text-xs text-zinc-400 font-medium">
              {authorName.substring(0, 2).toUpperCase()}
            </div>
            <div className="font-sans">
              <p className="text-xs font-semibold text-zinc-400 leading-none mb-0.5">
                {authorName}
              </p>
              <p className="text-[10px] text-zinc-600 leading-none">
                {createdAt
                  ? new Date(createdAt).toLocaleDateString("pl-PL", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })
                  : "No date"}
              </p>
            </div>
          </div>

          <span className="text-[10px] font-mono uppercase tracking-widest bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded font-medium">
            {category || "GENERAL"}
          </span>
        </div>

        <div className="flex-grow">
          <Link to={`/skills/${slug}`}>
            <h3 className="font-inter font-bold text-lg text-zinc-100 tracking-tight mb-2 group-hover:text-violet-400 transition-colors">
              {title}
            </h3>
          </Link>
          <p className="text-xs text-zinc-500 font-normal leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="relative mt-4 bg-[#050506] border border-[#1f1f23] rounded-lg p-3 font-mono text-xs text-zinc-400 flex items-center justify-between group/input hover:border-zinc-800 transition-colors">
          <div className="flex items-center gap-2 overflow-hidden mr-8">
            <Terminal
              size={14}
              className="text-violet-500 font-bold select-none"
            />
            <span className="truncate select-all">{installCommand}</span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="absolute right-2 p-1.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700 transition-all focus:outline-none"
            title="Copy install command"
          >
            {copied ? (
              <Check size={16} className="text-emerald-500" />
            ) : (
              <Copy size={16} />
            )}
          </button>
        </div>
      </div>

      <div className="mt-auto px-5 py-3 border-t border-[#121214] bg-[#09090b] flex items-center justify-between text-zinc-500 font-mono text-xs select-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 hover:text-zinc-300 cursor-pointer transition-colors">
            <ArrowBigUp size={16} fill="currentColor" />
            <span>{tags.length}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-zinc-300 cursor-pointer transition-colors">
            <MessageSquare size={16} />
            <span>{authorEmail ? 1 : 0}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={`/skills/${slug}`}
            className="flex items-center gap-1 hover:text-violet-400 transition-colors"
          >
            <span>Open</span>
            <ArrowUpRight size={14} />
          </Link>
          <button
            type="button"
            className="hover:text-zinc-300 transition-colors focus:outline-none"
          >
            <Bookmark size={14} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default SkillCard;
