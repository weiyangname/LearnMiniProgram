// pages/home/home.js
Page({
  data: {
    name: 'gongwei',
    age: 18,
    students: [
      { id: 101, name: 'kobe', age: 30 },
      { id: 102, name: 'james', age: 28 },
      { id: 103, name: 'curry', age: 32 },
      { id: 104, name: 'why', age: 18 }
    ],
    counter: 0
  },
  handerBtnClick() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handerSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})