// 필요한 상수 생성하기

const spreadSheetContainer = document.querySelector('#spreadsheet-container');
const ROWS = 10;
const COLS = 10;
const spreadSheet = [];
const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

/* 
만약 실제 엑셀처럼 열과 행이 스크롤하는 만큼 
자동생성되면 어떨까? 그럼 initSpreadsheet 함수도 다시 짜긴 해야 할 듯
*/


// for문을 돌면서 각 칸의 값에 객체 값 행-열 값을 넣어주는 함수

function initSpreadsheet(){
    for(let i =0; i<ROWS; i++){
        let spreadSheetRow = [];
        for (let j = 0; j<COLS; j++){
            let cellData = "";
            let isHeader = false;
            let disabled = false;
            // 모든 row 첫 번째 col에 숫자 넣기
            if (j==0){
                cellData = i;
                isHeader = true;
                disabled = true;
            }
            if(i==0){
                cellData=alphabets[j-1];
                isHeader = true;
                disabled = true;
            }
            if (!cellData){
                cellData="";
            }

            const rowName = i;
            const columnName = alphabets[j-1];

            const cell = new Cell(isHeader, disabled, cellData, i, rowName , j, columnName, false);
            spreadSheetRow.push(cell);
        }
        spreadSheet.push(spreadSheetRow);
    }
    drawSheet();
    console.log(spreadSheet);
}

// 문자열이 아닌 객체 데이터 생성하기(각 셀 마다 데이터를 가지고 있어야 하는데, 그러려면 문자열이 아니라 객체여야 함)
class Cell {
    constructor(isHeader, disabled, data, row, rowName, column, columnName, active = false){
        this.isHeader = isHeader;
        this.disabled = disabled;
        this.data = data;
        this.row = row;
        this.rowName = rowName;
        this.column = column;
        this.columnName = columnName;
        this.active = active;
    }
}

// cell 생성하기 - input 요소 사용

function createCellEl(cell){
    const cellEl = document.createElement("input");
    cellEl.className = "cell";
    cellEl.id = "cell_" + cell.row + cell.column;
    cellEl.value = cell.data;
    cellEl.disabled = cell.disabled;
    if(cell.isHeader){
        cellEl.classList.add("header");
    }
    return cellEl;
}

// cell 렌더링하기

function drawSheet() {
    for (let i = 0; i<spreadSheet.length; i++){
        const rowContainerEl = document.createElement("div");
        rowContainerEl.className = "cell-row";

        for (let j = 0; j<spreadSheet[i].length;j++){
            const cell = spreadSheet[i][j];
            rowContainerEl.append(createCellEl(cell))
        }
        spreadSheetContainer.append(rowContainerEl);
    }
}

initSpreadsheet();