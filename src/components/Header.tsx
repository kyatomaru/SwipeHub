"use client";

import Link from "next/link";
import { Heart, Filter, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  onFavoritesClick: () => void;
  onFiltersClick: () => void;
  onAboutClick: () => void;
}

export default function Header({
  onFavoritesClick,
  onFiltersClick,
  onAboutClick,
}: HeaderProps) {
  return (
    <header className="fixed top-0 z-10 bg-background border-b border-border shadow-sm w-full h-16">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/home" className="text-xl font-semibold text-foreground">
              SwipeHub
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="items-center gap-2">
              <Button
                onClick={onAboutClick}
                variant="ghost"
                size="icon"
                aria-label="SwipeHubとは？"
                className="hidden md:block"
              >
                SwipeHubとは？
              </Button>
              <Button
                onClick={onFavoritesClick}
                variant="ghost"
                size="icon"
                aria-label="お気に入り"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                onClick={onFiltersClick}
                variant="ghost"
                size="icon"
                aria-label="絞り込み"
              >
                <Filter className="h-5 w-5" />
              </Button>
            </div>
            {/* モバイル表示 */}
            <div className="md:hidden">
              <MobileMenu onAboutClick={onAboutClick} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

