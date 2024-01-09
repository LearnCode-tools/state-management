import { store } from "../store/redux/store";
import { Provider } from "react-redux";
import { ReduxExample } from "../components/pages/redux";

export const ReduxEX = () => {
  return (
    <Provider store={store}>
      <ReduxExample />
    </Provider>
  );
};
