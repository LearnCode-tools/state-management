import { useAppSelector } from "../../../store/redux/hooks";
import { Card } from "./card";

export const CardBox = () => {
  const { issues } = useAppSelector((state) => state.issue);

  return (
    <div className="card-box">
      {issues.map((issue, index) => {
        return <Card key={index} issue={issue} />;
      })}
    </div>
  );
};
