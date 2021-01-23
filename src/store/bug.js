import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import * as apiActions from './api';
import moment from 'moment';

let lastId = 0;

const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },
    bugsRequestFail: (bugs, action) => {
      bugs.loading = false;
    },
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },
    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list.splice(index, 1);
    },
    bugAssignedToUser: (bugs, action) => {
      const index = bugs.list.findIndex(
        (bug) => bug.id === action.payload.bugId
      );
      bugs.list[index].user = action.payload.userId;
    },
  },
});

export const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestFail,
} = slice.actions;

export default slice.reducer;
//-------------Action creators-----------
const url = '/bugs';
export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;

  const diffInMinutes = moment().diff(moment(lastFetch), 'minute');
  if (diffInMinutes < 10) return;

  dispatch(
    apiActions.apiCallBegan({
      url,
      onStart: bugsRequested.type,
      onSucess: bugsReceived.type,
      onError: bugsRequestFail.type,
    })
  );
};

//--------------Selector-------------

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);
export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.user === userId)
  );
