import { Home } from "../pages/home";
import { ReduxEX } from "../pages/reduxEX";
import { ReactQueryEX } from "../pages/reactQueryEX";
import { RecoilEX } from "../pages/recoilEX";
import { ZustandEX } from "../pages/zustandEX";

interface Props {
  routePath: string;
}
export const Router = ({ routePath }: Props) => {
  return (
    <>
      {routePath === "/" ? <Home /> : null}
      {routePath === "/redux" ? <ReduxEX /> : null}
      {routePath === "/reactQuery" ? <ReactQueryEX /> : null}
      {routePath === "/recoil" ? <RecoilEX /> : null}
      {routePath === "/zustand" ? <ZustandEX /> : null}
    </>
  );
};
