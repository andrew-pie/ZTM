const ztmMonsters = [
	{id: 1, monster: 'Mr. Mouse', level: 1},
	{id: 2, monster: 'Mac', level: 30},
	{id: 3, monster: 'Denodude', level: 17},
	{id: 4, monster: 'Pye', level: 5},
];

//old
const advancedMonsters = ztmMonsters.filter(item => item.level > 15);
console.log(advancedMonsters);
console.log(advancedMonsters[advancedMonsters.length-1]); // Denodude

//new
const lastMonster = ztmMonsters.findLast(item => item.level > 15); // Denodude
const lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15); // 2
const lastMonsterIndex2 = ztmMonsters.findLastIndex(item => item.level > 0); // 3

const ztmMonstersList = ['Mr. Mouse', 'Mac', 'Denodude', 'Pye'];
// old
ztmMonstersList.reverse(); 
// new
ztmMonstersList.toReversed(); // keeps original list
ztmMonstersList.toSorted(); 
const spliced = ztmMonstersList.toSpliced(2, 1); // remove 1 item started from index 2

// old
ztmMonstersList[1] = 'Gost';
// new
ztmMonstersList.with(1, "Gost"); // modify 1 index with "Gost"