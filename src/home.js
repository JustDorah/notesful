import React, { Component } from "react";
//import { Link } from "react-router-dom";
import NotefulContext from "./context/NotefulContext";

import Header from "./header/header";
import FolderList from "./onFolders/folders/folderList";
import NoteList from "./onNotes/notes/noteList";
import Note from "./onNotes/notes/note";

import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <NotefulContext.Consumer>
        {context => (
          <div className="Home">
            <header className="header">
              <Header />
            </header>
            <nav className="sidebar">
              <FolderList />
            </nav>
            <main className="main">
              <NoteList />
            </main>
          </div>
        )}
      </NotefulContext.Consumer>
    );
  }
}
