"use client";

import Link from "next/link";

export default function SimpleHeader() {
  return (
    <header className="fixed top-0 z-10 bg-background border-b border-border shadow-sm w-full h-16">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/home" className="text-xl font-semibold text-foreground">
              SwipeHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
