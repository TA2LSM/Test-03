const testArray = [
  {
    //idx: 0,
    age: 22,
    name: "semih",
  },
  {
    //idx: 1,
    address: "ööö",
  },
  {
    //idx: 0,
    age: 22,
    name: "metin",
  },
  {
    //idx: 1,
    address: "deneme",
  },
];

//const testArray = [1, 2, 3, 4];
//const arr2 = testArray;
//const arr2 = [...testArray];
const arr2 = JSON.parse(JSON.stringify(testArray)); //hard copy
//-----------------------------------------------------

testArray.forEach((item, idx) => {
  item.idx = idx;
});

let userNum = 200;

const delayMs = (ms) => {
  return new Promise((resolve, reject) => {
    if (ms >= 0)
      setTimeout(() => {
        //resolve("delay result");
        resolve(ms);
        console.log("Timeout!");
      }, ms);
    else reject(new Error("Input parameter Error"));
  });
};

const writeDB = async () => {
  const res1 = await delayMs(3000);
  console.log("Res1: ", res1);
  const res2 = await delayMs(1000);
  console.log("Res2: ", res2);
  return;
};

const userLogin = async (name) => {
  userNum++;
  await writeDB();

  console.log(userNum, name);
};

userLogin("metin");
// userLogin("semih");
// userLogin("muhammet");

// testArray.forEach((val, idx) => {
//   testArray[idx] = val + 5;
// });

//--- HATA ALINACAK KOD --------------
//testArray = [];
// testArray referans değeri üstteki gibi objeleri gösteren yerin başlangıcı idi.
// Bunu değiştirmeye çalışınca hata alırız. Ama içeriği değiştirebilir.

const metin = {};
metin.car = {};
metin.car.brand = "BMW";

//console.log(metin);
// console.log(arr2);
// console.log(testArray);

// setTimeout(() => {
//   console.log("Timeout!!");
// }, 5000);

// const testDelay = async () => {
//   const res = await delayMs(3000);
//   console.log("test ", res);
// };

// testDelay();
