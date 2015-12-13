/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findSolution = function(board, row, col, n, method, callback) {
  if (row === n) {
    return callback();
  }

  for(var i = 0; i < n; i++) {
    if(!col[i]) {
      board.togglePiece(row, i);
      col[i] = true;
      if (!board[method]()){
        var solution = findSolution(board, row + 1, col, n, method, callback);
        if (solution) {
          return solution;
        }
      }
      board.togglePiece(row, i);
      col[i] = false;
    }
  }
}

window.findNRooksSolution = function(n) {
  var solution;
  var board = new Board({n: n});

  findSolution(board, 0, {}, n, 'hasAnyRooksConflicts', function() {
    return solution = board.rows();
  });

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

  findSolution(board, 0, {}, n, 'hasAnyRooksConflicts', function() {
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;

};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var solution = board.rows();

  findSolution(board, 0, {}, n, 'hasAnyQueensConflicts', function() {
    return solution = board.rows();
  });

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

  findSolution(board, 0, {}, n, 'hasAnyQueensConflicts', function() {
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


// window.count = function(board, row, col, n, isQueen) {
//     var solutionCount = 0;

//     if (row === n) {
//       return 1;
//     }

//     for (var i = 0; i < n; i++) {
//       if (!col[i]) {
//         board.togglePiece(row, i);
//         col[i] = true;
//         if (isQueen) {
//           if (!board.hasAnyQueenConflictsOn(row, i)) {
//             solutionCount += count(board, row + 1, col, n, isQueen);
//           }
//         } else {
//           solutionCount += count(board, row + 1, col, n);
//         }
//         board.togglePiece(row, i);
//         col[i] = false;
//       }
//     }
//     return solutionCount;
// };


// window.findS = function(board, row, col, n, isQueen) {
//   var solution;

//   if (row === n) {
//      solution = board.rows();
//      return solution;
//   }

//   for (var i = 0; i < n; i++) {
//     if (!col[i]) {
//       board.togglePiece(row, i);
//       col[i] = true;
//       if (isQueen) {
//         if (!board.hasAnyQueenConflictsOn(row, i)) {
//           solution = findS(board, row + 1, col, n, isQueen);
//         }
//       } else {
//         solution = findS(board, row + 1, col, n);
//       }
//       if (Array.isArray(solution)) {
//          return solution;
//       }
//       board.togglePiece(row, i);
//       col[i] = false;
//     }
//   }

//   return solution;
// };
