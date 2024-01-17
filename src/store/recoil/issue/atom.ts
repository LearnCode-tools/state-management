import { atom, selector } from "recoil";
import { issue_API } from "../../../api/issueAPI";
import type { Issue } from "../../..";

export const issueState = atom({
  key: "issueState",
  default: selector({
    key: "defaultIssueState",
    get: async () => {
      const { data } = await issue_API.getAll();

      return data;
    },
  }),
});

// recoil의 selector는 비동기 set을 지원하지 않는다.
export const issueCreateSelector = selector({
  key: "issueCreateSelector",
  get: async ({ get }) => {
    const currentList = await get(issueState);
    return currentList;
  },
  set: ({ set, get }, issueData) => {
    const prevState = get(issueState);
    const newState = [...prevState, issueData];
    set(issueState, newState);
  },
});

export const issueUpdateSelector = selector({
  key: "issueUpdateSelector",
  get: async ({ get }) => {
    const currentList = await get(issueState);
    return currentList;
  },
  set: ({ set, get }, issueData) => {
    const prevState = get(issueState);
    const newState: Issue[] = prevState.map((issue: Issue) => {
      if (issue.id === issueData.id) {
        return issueData;
      }
      return issue;
    });
    set(issueState, newState);
  },
});

export const issueDeleteSelector = selector({
  key: "issueDeleteSelector",
  get: async ({ get }) => {
    const currentList = await get(issueState);
    return currentList;
  },
  set: ({ set, get }, issueId) => {
    const prevState: Issue[] = get(issueState);
    const newState = prevState.filter((issue) => issue.id !== issueId);
    set(issueState, newState);
  },
});
