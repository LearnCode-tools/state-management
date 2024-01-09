import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { issue_API } from "../../../api/issueAPI";
import type { Issue, CreateIssue } from "../../..";

export const createIssue = createAsyncThunk(
  "issue/create",
  async (payload: CreateIssue, thunkAPI) => {
    try {
      const { data } = await issue_API.createIssue(payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllIssue = createAsyncThunk(
  "issue/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await issue_API.getAll();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateIssue = createAsyncThunk(
  "issue/updateOne",
  async (issueData: Issue, thunkAPI) => {
    try {
      const { data } = await issue_API.updateOne(issueData);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteIssue = createAsyncThunk(
  "issue/deleteOne",
  async (issueId: string, thunkAPI) => {
    try {
      await issue_API.deleteOne(issueId);
      return thunkAPI.fulfillWithValue(issueId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

interface IssueState {
  issues: Issue[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: IssueState = {
  issues: [],
  loading: "idle",
};

export const issueSlice = createSlice({
  name: "issue",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createIssue.fulfilled, (state, action) => {
      const data = state.issues;
      data.push(action.payload);
      state.issues = data;
    });
    builder.addCase(getAllIssue.fulfilled, (state, action) => {
      state.issues = action.payload;
    });
    builder.addCase(updateIssue.fulfilled, (state, action) => {
      console.log(action.payload);
      const data = state.issues.map((value) => {
        if (value.id === action.payload.id) {
          return action.payload;
        }
        return value;
      });
      state.issues = data;
    });
    builder.addCase(deleteIssue.fulfilled, (state, action) => {
      const data = state.issues.filter((value) => value.id !== action.payload);
      state.issues = data;
    });
  },
});
