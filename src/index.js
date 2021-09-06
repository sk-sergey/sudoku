 module.exports =
 function solveSudoku(matrix) {
  const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let assistMatrix = [Array(9)].map(e => Array(9));
  




  function solve() {
    


  }

  
  // Passing all unresolved field
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++){
      if (matrix[i][j] === 0) {
        assistMatrix[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        //debugger
        solveSingle(i, j)

    }
    }
  }

  function solveSingle(row, col) {
    //debugger
    assistMatrix[row][col].forEach(element = (item, index)  => {
      //debugger
      if (matrix[row].indexOf(item) != -1) {
        //debugger
        assistMatrix[row][col].splice(index, 1, null)
      }
    });

    colContent = new Array
    for (let i = 0; i < 9; i++ ){
      colContent.push(matrix[i][col])
    }
    //debugger
    assistMatrix[row][col].forEach(element = (item, index)  => {
     //debugger
      if (colContent.indexOf(item) != -1) {

        assistMatrix[row][col].splice(index, 1, null)

      }       
    });

    if(assistMatrix[row][col].filter(x => x==null).length === 8) {
      let index = assistMatrix[row][col].findIndex(x => x != null)
      matrix[row][col] = assistMatrix[row][col][index]
    }
    
    // console.log(assistMatrix[row][col])
  }

  function getRow(i, j) {
    rowContent = []
    return rowContent

  }
  
  function getCol(i, j) {
    rowContent = []
    return rowContent
  }
  
  function getBlock(i, j) {
    blockContent = []
    return blockContent
  }


  // function showMatrix(matrix) {
  //   console.log('\nShow matrix:');
  
  //   for (let i = 0; i < matrix.length; i++) {
  //     console.log( matrix[i].join(' ') );
  //   }
  // }


  //showMatrix(matrix)
  return matrix;


 }

// const initial = [
//   [5, 3, 4, 6, 7, 8, 9, 0, 0],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ];

// solveSudoku(initial)
