import type { FormEvent, CreateIssue } from "../../..";
import { useAppDispatch } from "../../../store/redux/hooks";
import { createIssue } from "../../../store/redux/slice/issue";

export const IssueForm = () => {
  const dispatch = useAppDispatch();

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
    dispatch(createIssue(data));
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
