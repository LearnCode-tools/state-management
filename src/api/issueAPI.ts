import { instance } from "./instance";
import type { Issue, CreateIssue } from "..";
const BASE_URL = "/issue";

export const issue_API = {
  createIssue: (issueData: CreateIssue) => instance.post(BASE_URL, issueData),
  getAll: () => instance.get(BASE_URL),
  getOne: (issueId: string) => instance.get(`${BASE_URL}/${issueId}`),
  updateOne: (issueData: Issue) =>
    instance.put(`${BASE_URL}/${issueData.id}`, issueData),
  deleteOne: (issueId: string) => instance.delete(`${BASE_URL}/${issueId}`),
};
