import { useState } from "react";
import { issue_API } from "../../../api/issueAPI";
import { useIssueStore } from "../../../store/zustand/issue/store";
import type { Issue, FormEvent } from "../../..";

interface Props {
  issue: Issue;
}

export const Card = ({ issue: { id, name, content } }: Props) => {
  const [isEditable, setisEditable] = useState(false);

  const onEditorHandler = () => {
    setisEditable(!isEditable);
  };

  const onUpdateHandler = async (e: FormEvent) => {
    e.preventDefault();

    const updateData = {
      id,
      name,
      content: e.target[0].value,
    };

    const { data } = await issue_API.updateOne(updateData);
    useIssueStore.getState().updateIssue(data);

    setisEditable(false);
  };

  const onDeleteHandler = async () => {
    if (window.confirm("삭제할까요?")) {
      await issue_API.deleteOne(id);
      useIssueStore.getState().deleteIssue(id);
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
