# Mutator Methods 

## push : O(1) 

배열의 끝에 새로운 원소를 추가한다.  

<pre>
<code>
const names = ['Luis','John','Jose'];
names.push("Aaron");
console.log(names); // (4) ["Luis", "John", "Jose", "Aaron"]
</code>
</pre>

<br>

## pop() : O(1)

배열 끝에 원소를 삭제한다.  

<pre>
<code>
const names = ['Luis','John','Jose','Aaron'];
console.log(names.pop()); //Aaron
console.log(names); // (3) ["Luis", "John", "Jose"]
</code>
</pre>

<br>

## shift() : O(n)

배열의 시작에 원소를 삭제한다.  

<pre>
<code>
const names = ['Luis','John','Jose','Aaron'];
console.log(names.shift()); // Luis
console.log(names); // (3) ["John", "Jose", "Aaron"]
</code>
</pre>

<br>

## unshift() : O(n)

배열의 시작에 원소를 추가한다.  

<pre>
<code>
const names = ['Luis','John','Jose','Aaron'];
console.log(names.shift()); // Luis
console.log(names); // (3) ["John", "Jose", "Aaron"]
</code>
</pre>

<br>

## splice() : O(n)

인덱스로 신규 원소를 추가, 삭제 대체한다.  

<pre>
<code>
const names = ['Luis','John','Jose','Aaron'];
console.log(names.splice(0,0,"Fernando")); // Add Michelle
console.log(names.splice(0,1,"Michelle")); // replace Fernando to Michelle
console.log(names.splice(0,1)); // remove Michelle
console.log(names);
</code>
</pre>

<br>

## sort() : O(nlog(n))

인자값으로 넘어온 함수에 따라 값을 정렬한다.  
function이 없을 경우, unicode 값으로 정렬한다.  

<pre>
<code>
const names = ['Luis','John','Jose','Aaron'];
console.log(names.splice(0,0,"Fernando")); // Add Michelle
console.log(names.splice(0,1,"Michelle")); // replace Fernando to Michelle
console.log(names.splice(0,1)); // remove Michelle
console.log(names);
</code>
</pre>

<br>

---

# Accessor Methods 

## concat() : O(n)

여러 배열을 합쳐서 새로운 배열을 만든다.  

<pre>
<code>
const names1 = ["Luis","Jose"];
const names2 = ["John","Aaron"];
const newArray = names1.concat(names2,["Michelle"]);
console.log(newArray); // (5) ["Luis", "Jose", "John", "Aaron", "Michelle"]
</code>
</pre>

<br>

## slice() : O(n)

배열의 시작과 끝 인덱스 사이의 배열을 복제하여 반환한다.  

<pre>
<code>
const users = [
  {name:'Luis', age:15},
  {name:'Jose', age:18},
  {name:'Aaron', age:40}
];

const  adults = users.slice(1, users.length);
console.log(adults); // (2) [{name: "Jose", age: 18}, {name: "Aaron", age: 40}]
</code>
</pre>

<br>

## indexOf() : O(n)

배열의 원소가 존재하는 첫번째 인덱스를 반환한다. 원소가 배열에 없을 경우 -1을 반환한다.  

<pre>
<code>
const names = ['Luis','Jose','John','Aaron'];
console.log(names.indexOf("John")); // 2
console.log(names.indexOf("Michelle")); // -1
</code>
</pre>

<br>

---

# Iteration Methods 

## forEach() : O(n)

배열의 각 원소를 실행시키는 함수이다.  

<pre>
<code>
const names = ['Luis','Jose','John','Aaron'];

names.forEach(item => {
    console.log(item);
}); 
/* Print all user names
  Luis Jose John  Aaron 
*/ 
</code>
</pre>

<br>

## map() : O(n)

콜백함수의 결괏값으로 새로운 배열을 반환한다.  

<pre>
<code>
const users = [
    {name:'Luis', age:15},
    {name:'Jose', age:18},
    {name:'Aaron', age:40}
];
const userDescriptions = users.map(item => {
   return `Hello my name is ${item.name} and I have ${item.age} years old.`
});
console.log(userDescriptions); 
/*["Hello my name is Luis and I have 15 years old.",
 "Hello my name is Jose and I have 18 years old.",
 "Hello my name is Aaron and I have 40 years old."] */
</code>
</pre>

<br>

## filter() : O(n)

주어진 filter 조건이 참이면 새로운 배열을 반환한다.  

<pre>
<code>
const users = [
  {name:'Luis', admin:true},
  {name:'Jose', admin:true},
  {name:'Aaron'}
];
const adminUsers =  users.filter(item => item.admin);
console.log(adminUsers); // [{name: "Luis", admin: true},{name: "Jose", admin: true}]
</code>
</pre>

<br>

## reduce() : O(n)

 각 원소마다 리듀서 함수를 실행하고, 하나의 결괏값을 반환한다. 

<pre>
<code>
const users = [
  {name:'Luis', age:15},
  {name:'Jose', age:18},
  {name:'Aaron', age:40}
];

const reducer= (accumulator, item)=> accumulator + item.age;
const totalAge =  users.reduce(reducer,0);
const ageAverage = totalAge / users.length;
console.log(`Total ${totalAge}, Average ${ageAverage}`); // Total 73, Average 24.333333333333332
</code>
</pre>

<br>

## some() : O(n)

주어진 조건에 맞는 원소가 1개 이상일 경우 참을 반환한다. 조건에 맞는 원소가 없거나 빈 배열일 경우 거짓을 반환한다.  

<pre>
<code>
const users = [
  {name:'Luis', admin:true},
  {name:'Jose'},
  {name:'Aaron'}
];
const adminExists = users.some(item => item.admin);
console.log(adminExists); // true
</code>
</pre>

<br>

## every() : O(n)

주어진 조건에 모든 원소가 참일 경우에만 참을 반환한다. 1개라도 조건에 맞지 않을 경우 거짓을 반환한다.  

<pre>
<code>
const users = [
  {name:'Luis', active:true},
  {name:'Jose', active:true},
  {name:'Aaron', active:false}
];
const isAllUsersActive = users.every(item => item.active);
console.log(isAllUsersActive); // false
</code>
</pre>

---

# 결론 :  

push()메서드와 pop()메서드는 O(1)
sort()메서드는 O(nlog(n))

<br>

이 두 메서드를 제외한 모든 메서드는 O(n)이다. 
