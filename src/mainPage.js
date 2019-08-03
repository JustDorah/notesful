import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.css";
import NoteList from "./noteList";
import FolderList from "./folderList";
import NotefulContext from "./NotefulContext";

export default class MainPage extends Component {
  //reason for this again?
  static defaultProps = {
    ApiFolder: [],
    ApiNotes: [],
    selectedFolder: "eachFolder",
    setSelectedFolder: () => {}
  };

  //reason for this?
  static contextType = NotefulContext;

  // onClickColorHighlight = id => {
  //   console.log(id);

  //   let clickedFolder = id;
  //   this.setState({
  //     selectedFolder: clickedFolder
  //   });
  // };

  //console.log('onClickColorHighlight: ', onClickColorHighlight);
  render() {
    // console.log("selectedFolder: ", this.state.selectedFolder);

    const { ApiFolder, ApiNotes, selectedFolder } = this.context;
    //console.log("mainPage ApiNotes: ", ApiNotes);
    //console.log("mainPage ApiFolder: ", ApiFolder);

    //map out the notes
    const mainNotes = ApiNotes.map(note => {
      //format the date
      const modified = note.modified;
      const moment = require("moment");
      let d1 = moment(modified);
      let date = d1.format("Do MMM YYYY");
      //console.log(date, 'the formatted date');

      return (
        <div className="eachNote" key={note.id}>
          <h2>
            <Link to={`/note/${note.id}`}>{note.name}</Link>
          </h2>
          <p>Date modified on {date}</p>
          <p />
          <div className="removeNoteButton" key={note.id}>
            Delete Note
          </div>
        </div>
      );
    });

    /*
    //map out the folders
    const mainFolders = ApiFolder.map(folder => {
      //class
      let className =
        folder.id === this.context.selectedFolder
          ? "eachFolder selected"
          : "eachFolder";

      console.log("selectedFolder: ", selectedFolder);

      return (
        <div
          className={className}
          key={folder.id}
          data-div_id={folder.id}
          //maybe I need to call something else?
          //onClick={this.onClickColorHighlight}

          onClick={e => this.onClickColorHighlight(folder.id)}
        >
          <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
        </div>
      );
    });
*/
    //console.log("mainPage mainFolders", mainFolders);

    //console.log("mainPage mainNotes", mainNotes);

    return (
      <NotefulContext.Consumer>
        {context => (
          <div>
            <header className="mainHeader">
              <h1>
                <Link to="/">Noteful</Link>
              </h1>
            </header>

            <nav className="sidebar">
              {ApiFolder.map(folder => {
                //class
                let className =
                  folder.id === this.context.selectedFolder
                    ? "eachFolder selected"
                    : "eachFolder";

                console.log("selectedFolder: ", selectedFolder);

                return (
                  <div
                    className={className}
                    key={folder.id}
                    data-div_id={folder.id}
                    //maybe I need to call something else?
                    //onClick={this.onClickColorHighlight}

                    onClick={e => context.setSelectedFolder(folder.id)}
                  >
                    <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
                  </div>
                );
              })}

              {/* <FolderList
                mainFolders={mainFolders}
                //folderNotes={this.props.folder}
              /> */}
            </nav>

            <main className="main">
              <NoteList mainNotes={mainNotes} />
            </main>
          </div>
        )}
      </NotefulContext.Consumer>
    );
  }
}
