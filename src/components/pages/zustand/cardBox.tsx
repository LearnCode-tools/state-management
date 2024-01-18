import { useEffect } from "react";
import { Card } from "./card";
import { useIssueStore } from "../../../store/zustand/issue/store";
import { issue_API } from "../../../api/issueAPI";

export const CardBox = () => {
  const issues = useIssueStore.use.issue();

  const getIssueData = async () => {
    const { data } = await issue_API.getAll();
    useIssueStore.getState().getAll(data);
  };

  useEffect(() => {
    getIssueData();
  }, []);

  return (
    <div className="card-box">
      {issues?.map((issue, index) => {
        return <Card key={index} issue={issue} />;
      })}
    </div>
  );
};
