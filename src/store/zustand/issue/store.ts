import { StoreApi, useStore, createStore } from "zustand";
import type { Issue } from "../../..";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends StoreApi<object>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () =>
      useStore(_store, (s) => s[k as keyof typeof s]);
  }

  return store;
};

interface IssueState {
  issue: Issue[];
  getAll: (fetchData: Issue[]) => void;
  createIssue: (newIssue: Issue) => void;
  updateIssue: (updateData: Issue) => void;
  deleteIssue: (deleteId: string) => void;
}

const store = createStore<IssueState>((set) => ({
  issue: [],
  getAll: (fetchData) =>
    set(() => ({
      issue: fetchData,
    })),
  createIssue: (newIssue) =>
    set((state) => ({
      issue: state.issue.concat(newIssue),
    })),
  updateIssue: (updateData) =>
    set((state) => ({
      issue: state.issue.map((item) => {
        if (item.id === updateData.id) {
          return updateData;
        }
        return item;
      }),
    })),
  deleteIssue: (deleteId) =>
    set((state) => ({
      issue: state.issue.filter((item) => item.id !== deleteId),
    })),
}));

export const useIssueStore = createSelectors(store);
