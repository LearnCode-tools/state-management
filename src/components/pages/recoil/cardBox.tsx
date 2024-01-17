import { Card } from "./card";
import { useRecoilValueLoadable } from "recoil";
import { issueState } from "../../../store/recoil/issue/atom";

import type { Issue } from "../../..";

export const CardBox = () => {
  const { state, contents } = useRecoilValueLoadable<Issue[]>(issueState);

  switch (state) {
    // case "loading":
    //   return <div>loading...</div>;
    case "hasValue":
      return (
        <div className="card-box">
          {contents?.map((issue, index) => {
            return <Card key={index} issue={issue} />;
          })}
        </div>
      );
    case "hasError":
      return <div>Error</div>;
  }
};
