"use client"

//@ts-ignore
import CalHeatmap from "cal-heatmap";
import "cal-heatmap/cal-heatmap.css";
import { useEffect } from "react";
import Cell from "./cell";

export default function DsMatrix(props: any) {


  let matrix = props.matrix
  let r = matrix.row
  let c = matrix.col
  let cells = matrix.verifiedCells

  let row = new Array(r).fill(1)
  let col = new Array(c).fill(1)

  const checkForSampleCell = (row: any, col: any) => {
    return cells.some((cell: { row: any; col: any; }) => {
      return cell.row == row && cell.col == col
    })
  }

  const colorCheck = (r: any, c: any) => {
    //console.log("Checking....")
    let row = r
    let col = c
    if (checkForSampleCell(row, col)) {
      return "#3bff00"
    }
    return "#ff0000"
  }

  // useEffect(() => {
  //   const cal: CalHeatmap = new CalHeatmap();
  //   const dsMatrixDiv = document.getElementById('ds-matrix');
  //   if (dsMatrixDiv) {
  //     dsMatrixDiv.innerHTML = ''; // Clear the div
  //   }
  //   cal.paint(
  //     {
  //       theme: 'dark',
  //       data: {
  //         source: '/static/matrix.csv',
  //         type: 'csv',
  //         x: 'date',
  //         y: (d: { [x: string]: string | number; }) => +d['temp_max'],
  //         groupY: 'max',
  //       },
  //       date: { start: new Date('2012-01-01') },
  //       range: 10,
  //       scale: {
  //         color: {
  //           type: 'threshold',
  //           range: ['#14432a', '#166b34', '#37a446', '#4dd05a'],
  //           domain: [10, 20, 30],
  //         },
  //       },
  //       domain: {
  //         type: 'month',
  //         gutter: 4,
  //         label: { text: 'MMM', textAlign: 'start', position: 'top' },
  //       },
  //       subDomain: { type: 'ghDay', radius: 2, width: 11, height: 11, gutter: 4 },
  //       itemSelector: '#ds-matrix',
  //     })
  // }, []);



  return (
    <div className="flex flex-col overflow-scroll p-10 space-y-4 ">
      <h1 className="heading !text-left">Data Sampling Matrix</h1>
      <div className="matrix">

        {
          row.map((ele, i) => (
            <div className="flex flex-row" key={i}>
              {col.map((ele, j) => (
                <Cell color={colorCheck(i, j)} key={j} />
              ))}
            </div>
          ))

        }
      </div>
      <div className="rounded-xl p-4 overflow-hidden text-[#292E3A]">
        <div id="ds-matrix" className=""></div>

      </div>
    </div>
  );
}