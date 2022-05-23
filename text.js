// word = "baby Blue";
// a = word.split("i");
// // console.log(a);
// // console.log(!a.includes("a"));

// b = word.replace(/blue/g, "1");
// c = word.replace(/[blue]/gi, "1");

// console.log(b);
// console.log(c);

const a = [1, 3, 7, 4];
const b = [1, 5, 3, 7, 0];
// const c = new Set([...a, ...b, ...k]);
const c = [...new Set([...a, ...b])];
console.log(typeof c);

c.forEach((val) => {
  console.log(val);
});

// var obj1 = { foo: "bar", x: 42, ayam: "ayam goreng" };
// var obj2 = { foo: "baz", y: 13 };
// var obj3 = { foo: "ke", j: 13, ayam: "ayam rebus" };
// var obj4 = { foo: "ku", k: 13 };
// var obj5 = { foo: "ka", y: 19 };

// // var clonedObj = { ...obj1 };
// // Object { foo: "bar", x: 42 }

// var mergedObj = { ...obj1, ...obj2, obj3, ...obj4, ...obj5 };
// console.log(mergedObj);
