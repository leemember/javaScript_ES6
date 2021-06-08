const level = 5;

// i를 1로 초기화하고, i는 level 보다 커지면 안된다. 5단 트리니까!
// 그리고 i는 1 씩 증가한다 (i++)
for (let i = 1; i <= level; i++) {
  // 별을 반복 시키려면 for문을 한번 더 안에서 만들어주면된다.
  //j라는 변수를 만들어 1로 초기화한다.
  //j는 i보다 작거나 같고 j도 점점 커지게 (j++)
  let tree = ""; // 별을 저장해줄 저장소 (트리)
  for (let k = 1; k <= level - i; k++) {
    //공백 증가 for문
    tree = tree + " ";
  }
  //별 증가 for문
  for (let j = 1; j <= i * 2 - 1; j++) {
    //tree를 안쪽구문이 돌 때마다 *을 더해준다.
    tree = tree + "*";
  }
  console.log(tree);
}
