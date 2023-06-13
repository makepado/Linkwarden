import {
  AccountSettings,
  CollectionIncludingMembers,
  LinkIncludingCollectionAndTags,
} from "@/types/global";
import { create } from "zustand";

type Modal =
  | {
      modal: "ACCOUNT";
      state: boolean;
      active: AccountSettings;
      defaultIndex?: number;
    }
  | {
      modal: "LINK";
      state: boolean;
      method: "CREATE";
      active?: LinkIncludingCollectionAndTags;
    }
  | {
      modal: "LINK";
      state: boolean;
      method: "UPDATE";
      active: LinkIncludingCollectionAndTags;
    }
  | {
      modal: "COLLECTION";
      state: boolean;
      method: "CREATE" | "UPDATE";
      active: CollectionIncludingMembers;
      defaultIndex?: number;
    }
  | null;

type ModalsStore = {
  modal: Modal;
  setModal: (modal: Modal) => void;
};

const useLocalSettingsStore = create<ModalsStore>((set) => ({
  modal: null,
  setModal: (modal: Modal) => {
    set({ modal });
  },
}));

export default useLocalSettingsStore;