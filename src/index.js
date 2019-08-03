import React from "react";
import ReactDOM from "react-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import html2canvas from "html2canvas";
import pdfmake from "pdfmake";

import "./styles.css";

function exporter() {
  console.log(document.getElementsByTagName("table")[0]);
  html2canvas(document.getElementsByTagName("table")[0]).then(function(canvas) {
    var data = canvas.toDataURL();
    var docDefinition = {
      content: [
        {
          image: data,
          width: 500
        }
      ]
    };
    pdfmake.createPdf(docDefinition).download();
  });
}

function App() {
  return (
    <div className="App">
      <input type="button" id="btnExport" value="Export" onClick={exporter} />
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={[
          { title: "event 1", date: "2019-08-01" },
          { title: "event 2", date: "2019-08-06" }
        ]}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
