import "./redux.scss";
import { useEffect } from "react";
import { useAppDispatch } from "../../../store/redux/hooks";
import { getAllIssue } from "../../../store/redux/slice/issue";
import { IssueForm } from "./issueForm";
import { CardBox } from "./cardBox";

export const ReduxExample = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllIssue());
  }, [dispatch]);

  return (
    <div>
      <h2>redux</h2>
      <IssueForm />
      <CardBox />
    </div>
  );
};
