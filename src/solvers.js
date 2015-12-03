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

window.findNRooksSolution = function(n) {
  var solution = new Board({n: n}); //fixme

  for (var i = 0; i < n; i++) {
    solution.togglePiece(i, i);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // if (n === 0 || n === 1) {
  //   return 1;
  // }
  // return n * countNRooksSolutions(n - 1);

  var solutionCount = 0;
  var board = new Board({n: n});
  var solutions = function(board, row) {

    if (row === n) {
      return solutionCount++;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRooksConflicts()) {
        solutions(board, row + 1);
      }
      board.togglePiece(row, i);
    }
  }

  solutions(board, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;

};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution;
  var board = new Board({n: n});

  if (n === 2 || n === 3) {
    return board.rows();
  }

  var solutions = function(board, row) {

    if (row === n) {
      return solution = board.rows();
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueenConflictsOn(row, i)) {
        solutions(board, row + 1);
      }
      if (solution) {
        return;
      }
      board.togglePiece(row, i);
    }
  };

  solutions(board, 0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

  var solutions = function(board, row) {

    if (row === n) {
      return solutionCount++;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueenConflictsOn(row, i)) {
        solutions(board, row + 1);
      }
      board.togglePiece(row, i);
    }
  };

  solutions(board, 0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
