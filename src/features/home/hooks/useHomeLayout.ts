"use client";

import { useState } from "react";

export function useHomeLayout() {
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return {
    favoritesOpen,
    filtersOpen,
    aboutOpen,
    setFavoritesOpen,
    setFiltersOpen,
    setAboutOpen,
  };
}

