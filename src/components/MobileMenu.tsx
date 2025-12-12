"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  onAboutClick: () => void;
}

export default function MobileMenu({ onAboutClick }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="メニュー">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>メニュー</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-4">
          <Button
            variant="ghost"
            className="justify-start px-0"
          >
            <Link target="_blank" href="/">
              SwipeHubとは？
            </Link>
          </Button>
          <div className="border-t border-border pt-4">
            <div className="flex flex-col gap-4 text-sm">
              <Link
                href="/terms"
                className="text-white hover:text-foreground transition-colors"
              >
                利用規約
              </Link>
              <Link
                href="/privacy"
                className="text-white hover:text-foreground transition-colors"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-foreground transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

