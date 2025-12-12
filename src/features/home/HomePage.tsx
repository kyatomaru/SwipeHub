"use client";

import { useHome } from "./hooks/useHome";
import { useHomeLayout } from "./hooks/useHomeLayout";
import SwipeMock from "./components/SwipeMock";
import FavoritesDialog from "./components/FavoritesDialog";
import FiltersDialog from "./components/FiltersDialog";
import AboutDialog from "./components/AboutDialog";
import AgeGateForm from "@/features/age-gate/components/AgeGateForm";

export default function HomePage() {
  const { isAdult, handleAccept, handleDeny, denyMessage } = useHome();
  const {
    favoritesOpen,
    filtersOpen,
    aboutOpen,
    setFavoritesOpen,
    setFiltersOpen,
    setAboutOpen,
  } = useHomeLayout();

  if (isAdult === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">読み込み中...</p>
      </div>
    );
  }

  // 18歳未満または年齢確認が未完了の場合、年齢ゲートを表示
  if (!isAdult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/50">
        <AgeGateForm
          denyMessage={denyMessage}
          onAccept={handleAccept}
          onDeny={handleDeny}
        />
      </div>
    );
  }

  return (
    <>
      <main className="px-2 flex flex-col items-center h-[calc(100vh-4rem)] pt-25 pb-4">
        <SwipeMock />
      </main>

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
    </>
  );
}

