const fixURL = (name: string) => {
  const link = `/${name}`;

  history.pushState("", "", link);
};

type Url_Handler = {
  [type: string]: () => void;
};
export const URL_HANDLER: Url_Handler = {
  home: () => fixURL(""),
  redux: () => fixURL("redux"),
  reactQuery: () => fixURL("reactQuery"),
  recoil: () => fixURL("recoil"),
  zustand: () => fixURL("zustand"),
};
