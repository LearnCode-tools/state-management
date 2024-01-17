import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import { RecoilExample } from "../components/pages/recoil";

export const RecoilEX = () => {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <RecoilExample />
      </Suspense>
    </RecoilRoot>
  );
};
