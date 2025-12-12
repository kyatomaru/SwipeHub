"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import SimpleHeader from "@/components/SimpleHeader";
import FooterLinks from "@/components/FooterLinks";
import { useHomeLayout } from "@/features/home/hooks/useHomeLayout";
import FavoritesDialog from "@/features/home/components/FavoritesDialog";
import FiltersDialog from "@/features/home/components/FiltersDialog";
import AboutDialog from "@/features/home/components/AboutDialog";

export default function HomeLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAdult, setIsAdult] = useState<boolean | null>(null);
  const {
    favoritesOpen,
    filtersOpen,
    aboutOpen,
    setFavoritesOpen,
    setFiltersOpen,
    setAboutOpen,
  } = useHomeLayout();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkAdultStatus = () => {
        const adultStatus = localStorage.getItem("isAdult") === "true";
        setIsAdult(adultStatus);
      };

      // 初回チェック
      checkAdultStatus();

      // localStorageの変更を監視するためのカスタムイベント
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === "isAdult") {
          checkAdultStatus();
        }
      };

      // 同じウィンドウ内での変更を検知するためのカスタムイベント
      const handleCustomStorageChange = () => {
        checkAdultStatus();
      };

      window.addEventListener("storage", handleStorageChange);
      window.addEventListener("localStorageChange", handleCustomStorageChange);

      // 定期的にチェック（フォールバック）
      const interval = setInterval(checkAdultStatus, 100);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
        window.removeEventListener("localStorageChange", handleCustomStorageChange);
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-muted/50 relative">
      {/* 年齢確認が完了している場合はHeader、未完了の場合はSimpleHeaderを表示 */}
      {isAdult ? (
        <Header
          onFavoritesClick={() => setFavoritesOpen(true)}
          onFiltersClick={() => setFiltersOpen(true)}
          onAboutClick={() => setAboutOpen(true)}
        />
      ) : (
        <SimpleHeader />
      )}
      {children}
      {isAdult && <FooterLinks />}

      <FavoritesDialog
        open={favoritesOpen}
        onOpenChange={setFavoritesOpen}
      />

      <FiltersDialog
        open={filtersOpen}
        onOpenChange={setFiltersOpen}
      />

      <AboutDialog
        open={aboutOpen}
        onOpenChange={setAboutOpen}
      />
    </div>
  );
}

