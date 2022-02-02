/*지도 정보가 N*N 격자판에 주어집니다. 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다. 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
격자의 가장자리는 0으로 초기화 되었다고 가정한다.
만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.
*/


function solution(arr){  
    let answer=0;
    let n=arr.length;
    let dx=[-1, 0, 1, 0];
    let dy=[0, 1, 0, -1];
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            let flag=1;
            for(let k=0; k<4; k++){
                let nx=i+dx[k];
                let ny=j+dy[k];
                if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny]>=arr[i][j]){
                    flag=0;
                    break;
                }
            }
            if(flag) answer++;
        }
    }  
      
    return answer;
}