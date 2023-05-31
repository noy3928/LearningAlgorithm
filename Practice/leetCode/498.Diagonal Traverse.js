/**
 * @param {number[][]} mat
 * @return {number[]}
 */

function getDianoge(i, j, mat) {
  let m = mat.length
  let n = mat[0].length
  let result = []

  while (i < m && j < n && i >= 0 && j >= 0) {
    result.push(mat[i][j])
    i--
    j++
  }

  return result
}

var findDiagonalOrder = function (mat) {
  let m = mat.length
  let n = mat[0].length

  let i = 0
  let j = 0
  let result = []

  while (i < m || j < n - 1) {
    if (i < m && j == 0) {
      const tmp = getDianoge(i, j, mat)
      result.push(tmp)
      i++
    } else {
      j++
      const tmp = getDianoge(m - 1, j, mat)
      result.push(tmp)
    }
  }

  console.log(result)

  result = result.map((v, i) => {
    if (i % 2 == 1) return v.reverse()
    return v
  })

  return result.flat()
}

/** 
계획 : 
1. 대각선을 구하는 함수를 만든다. getDiagnoge 
2. while문을 돌면서 대각선을 구한다. 가장자리에있는 i,j를 순회하면서 대각선을 구한다. 
3. 대각선을 구할 때, 짝수번째 대각선은 reverse를 해준다.
4. result를 flat() 해준다.
*/
