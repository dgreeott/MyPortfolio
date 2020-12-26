import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="somefile.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}


{/*
      <div className="Resume">
        <a href="javascript:;" onClick={(e) => this.modalOpen(e)}>
          <Button><a onClick={(e) => this.onResumeClick(e)}>Resume</a></Button>
        </a>
        <Modal show={this.state.modal} handleClose={(e) => this.modalClose(e)}>
        <div className="form-group">
            <embed type="application/pdf" src={Doc}></embed>
            
          </div>
          <div className="form-group">
            
            <button onClick={(e) => this.onResumeClick(e)} type="button">
              Resume
            </button>
          </div>
        </Modal>
      </div>
      */}