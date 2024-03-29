/*
계획 : 
1. 미세먼지를 확산시켜야 한다. 이것을 위해서 이중 배열을 순회하면서, 미세먼지가 있는 곳을 찾고, 그곳을 기준으로 상하좌우를 순회한다. 
2. 상하좌우를 순회하면서, 미세먼지가 없는 곳을 찾는다. 미세먼지가 없는 위치에 값을 계산해 넣어준다. 넣어주는 곳은 after 배열이다. 
3. after 배열에서 공기청정기를 한번 돌린다. 공기청정기가 돌아가면, -1이 있던 위치를 기준으로 값들을 하나씩 움직인다. 

-1이 만약 [0,2]에 있다면 [1,2]의 값을 [2,2]로 옮기고, [2,2]의 값을 [3,2]로 옮긴다. 이 과정을 반복하다가, [arr.lenght-1, 2]에 도달하면, 
[arr.length-1,2]의 값을 [arr.length-1, 1]로 옮긴다. 그리고 [arr.length-1, 1]의 값을 [arr.length-1, 0]으로 옮긴다. [arr.length-1,0]의 값은 다시 
[arr.length-2,0]으로 움직인다. 이 과정을 반복한다. 
*/

function solution() {}
