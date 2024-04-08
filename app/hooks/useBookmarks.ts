import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { BookMarkStore, TBookmark } from "../types/global";

const useBookmarkStore = create<BookMarkStore>()(
  persist(
    (set, _get) => ({
      bookmarks: [],
      addBookmark: (bookmark: TBookmark) =>
        set((state) => ({ bookmarks: [...state.bookmarks, bookmark] })),
    }),
    {
      name: "bookmark-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useBookmarkStore;
