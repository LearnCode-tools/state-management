import { useState } from "react";
import type { Issue, FormEvent } from "../../..";
import { useMutationIssue } from "../../../store/react-query/hooks";

interface Props {
  issue: Issue;
}

export const Card = ({ issue: { id, name, content } }: Props) => {
  const updateMutation = useMutationIssue("update");
  const deleteMutation = useMutationIssue("delete");

  const [isEditable, setisEditable] = useState(false);

  const onEditorHandler = () => {
    setisEditable(!isEditable);
  };

  const onUpdateHandler = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      id,
      name,
      content: e.target[0].value as string,
    };
    updateMutation.mutate(data);
    setisEditable(false);
  };

  const onDeleteHandler = () => {
    if (window.confirm("삭제할까요?")) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span>
          id:{id} / 이름: {name}
        </span>
        <span>
          <button onClick={onEditorHandler}>
            {isEditable ? "취소" : "수정"}
          </button>
          <button onClick={onDeleteHandler}>삭제</button>
        </span>
      </div>
      <div className="card-body">
        {isEditable ? (
          <form onSubmit={onUpdateHandler}>
            <input type="text" defaultValue={content} />
            <button type="submit">수정하기</button>
          </form>
        ) : (
          <div className="content">{content}</div>
        )}
      </div>
    </div>
  );
};
