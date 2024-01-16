export type FormEvent = React.FormEvent<HTMLFormElement>;
export type InputEvent = React.FormEvent<HTMLInputElement>;

export type CreateIssue = {
  name: string;
  content: string;
  [key: string]: string;
};

export type Issue = {
  id: string;
  name: string;
  content: string;
  [key: string]: string;
};
