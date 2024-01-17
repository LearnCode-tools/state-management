import "../style.scss";
import { CardBox } from "./cardBox";
import { IssueForm } from "./issueForm";

export const RecoilExample = () => {
  return (
    <div>
      <h2>recoil</h2>
      <IssueForm />
      <CardBox />
    </div>
  );
};
