DevTools failed to load source map: Could not load content for https://programmers.co.kr/assets/sourcemaps/maps/application-a1cb93d5b22a43f1c5da737bfe36b842de82424b012c73c151907ba60da8b28f.js.map: HTTP error: status code 404, net::ERR_HTTP_RESPONSE_CODE_FAILURE
DevTools failed to load source map: Could not load content for https://programmers.co.kr/assets/sourcemaps/maps/library-28781fa55745662c36e5361ca38e798bce9b7f4990e444b8dd05a8103c9c657f.js.map: HTTP error: status code 404, net::ERR_HTTP_RESPONSE_CODE_FAILURE
function solution(n) {
    let cnt = 0
    let nums = []
    
    for(let i = 1; i <= n; i++){
        nums.push(i)
    }
    
    for(let i  = 0; i < nums.length; i++){
        let copyArr = nums.slice(i)
        let sum = 0
        for(let j = 0; j < copyArr.length; j++){
            sum = sum + copyArr[j]
            if(sum === n) {cnt++}
            if(sum > n){break;  }        
        }
    }
    
    return cnt
}