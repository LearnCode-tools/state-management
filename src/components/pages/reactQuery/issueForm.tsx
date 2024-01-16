import type { FormEvent, CreateIssue } from "../../..";
import { useMutationIssue } from "../../../store/react-query/hooks";

export const IssueForm = () => {
  const createMutation = useMutationIssue();

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target;
    const name = target[0].value;
    const content = target[1].value;

    const data: CreateIssue = {
      name,
      content,
    };
    target[0].value = "";
    target[1].value = "";
    createMutation.mutate(data); // id 값은 mock server가 자동 생성
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
