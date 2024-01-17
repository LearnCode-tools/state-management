import { useSetRecoilState } from "recoil";
import { issueState } from "./atom";

export const useSetIssueState = () => {
  const setState = useSetRecoilState(issueState);

  return setState;
};
