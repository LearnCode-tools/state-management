import { useQuery, useMutation, useQueryClient } from "react-query";
import { issue_API } from "../../api/issueAPI";
import type { Issue } from "../..";

export const ISSUES = "issues";

export const useGetIssues = () => {
  const { isLoading, error, data } = useQuery(ISSUES, issue_API.getAll);
  const result = {
    isLoading,
    error,
    data: data?.data as Issue[],
  };
  return result;
};

type MutationType = undefined | "update" | "delete";

/**
 *
 * @param mutationType null | "update" | "delete"
 * @returns mutarion
 */
export const useMutationIssue = (mutationType?: MutationType) => {
  const queryClient = useQueryClient();

  const createMutation = useMutation(issue_API.createIssue, {
    onSuccess: () => {
      queryClient.invalidateQueries(ISSUES);
    },
  });
  const updateMutation = useMutation(issue_API.updateOne, {
    onSuccess: () => {
      queryClient.invalidateQueries(ISSUES);
    },
  });
  const deleteMutation = useMutation(issue_API.deleteOne, {
    onSuccess: () => {
      queryClient.invalidateQueries(ISSUES);
    },
  });

  if (mutationType === "update") return updateMutation;
  if (mutationType === "delete") return deleteMutation;
  return createMutation;
};
