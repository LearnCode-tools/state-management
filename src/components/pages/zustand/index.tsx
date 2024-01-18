import "../style.scss";
import { CardBox } from "./cardBox";
import { IssueForm } from "./issueForm";

export const ZustandExample = () => {
  return (
    <div>
      <h2>zustand</h2>
      <IssueForm />
      <CardBox />
    </div>
  );
};
