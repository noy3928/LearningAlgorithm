/*
 * `codeOwnersMap`과 `directory`를 입력받아
 * `directory`의 코드 주인 목록을 반환하는 함수를 작성하세요.
 */
function solution(codeOwnersMap, directory) {
  let answer = []
  const targetDir = directory.split("/").pop()
  if (codeOwnersMap instanceof Array) {
    return (answer = codeOwnersMap)
  }
  function DFS(object, directory) {
    for (const [key, value] of Object.entries(object)) {
      if (key == directory) {
        answer = value
        return
      } else {
        if (value instanceof Object) DFS(value, directory)
      }
    }
  }
  DFS(codeOwnersMap, targetDir)
  return answer
}
