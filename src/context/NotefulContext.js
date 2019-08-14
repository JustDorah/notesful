import React from "react";

const NotefulContext = React.createContext({
  ApiData: [],
  ApiFolder: [],
  ApiNotes: [],
  selectedFolder: null,
  setSelectedFolder: () => {},
  deleteNoteRequest: () => {},
  deleteNote: () => {},
  onDelete: () => {},
  addFolder: () => {},
  addNote: () => {},
  onNewFolderCreation: () => {}
});

export default NotefulContext;
