let numbers:number[]= [1, 2, 3, 4, 7];

console.log(numbers)
let products: string[] = ['Shirt', 'Trousers']

console.log(products)


let mixData: (string | number)[] = ['faska', 25, 'Hello']


console.log(mixData);

//nested typed array
let myNum: number[][] = [
    [1,2],[2,3]
]

console.log(myNum)

let mystring: string[][] = [
  ['hi', 'how'],
  ['are', 'you'],
];

console.log(mystring);

let myMixNumString: (string | number) [][] = [
  [1, 2],
  [2, 3],
  ['hi', 'how']
];

console.log(myMixNumString);