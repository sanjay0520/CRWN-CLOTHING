import { createSelector } from "reselect";

const SelectDirectory = (state) => state.directory;

export const SelectDirectorySection = createSelector(
  [SelectDirectory],
  (directory) => directory.sections
);
