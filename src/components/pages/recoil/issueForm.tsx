import type { FormEvent, CreateIssue } from "../../..";
import { useSetRecoilState } from "recoil";
import { issueCreateSelector } from "../../../store/recoil/issue/atom";
import { issue_API } from "../../../api/issueAPI";

export const IssueForm = () => {
  const createIssue = useSetRecoilState(issueCreateSelector);

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target;
    const name = target[0].value;
    const content = target[1].value;

    const issue: CreateIssue = {
      name,
      content,
    };
    target[0].value = "";
    target[1].value = "";

    // possible try / catch
    const { data } = await issue_API.createIssue(issue);
    createIssue(data);
  };

  return (
    <form className="issue-form" onSubmit={onSubmitHandler}>
      <label htmlFor="name">이름</label>
      <input id="name" type="text" autoComplete="off" />
      <label htmlFor="content">내용</label>
      <input id="content" type="text" autoComplete="off" />
      <button type="submit">생성</button>
    </form>
  );
};
