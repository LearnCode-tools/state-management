import { Card } from "./card";
import { useGetIssues } from "../../../store/react-query/issue/hooks";

export const CardBox = () => {
  const { data } = useGetIssues();

  return (
    <div className="card-box">
      {data?.map((issue, index) => {
        return <Card key={index} issue={issue} />;
      })}
    </div>
  );
};
