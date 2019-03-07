实现功能：用户可选择emoji去记录当日境况

1. 点击选择心情 -> 弹出emoji页面浮窗
我纠结的一个问题，就是emoji的data是放在js里面，还是新建一个data.js, 鉴于想先用少量的emoji做个实验，所以就先放在js的data里了。

```data:{
    isShow:false,
    emojiList: [
      { mood: ['😀', '😂', '🤣', '🤔', '🙄']},
      { weather: ['🌤', '🌦', '🌫', '❄️', '☀️']},
      { activity: ['🍱', '🏸', '🚗', '🖥', '🛁']}
    ]
  }
```

其实因为array混杂object中又是array，我特么还纠结了好久。太初级了。我还要多多练习啊。
然后我又卡在列表渲染了。啊，我的智商啊。多维数组该怎么办？借鉴了https://blog.csdn.net/yechaoa/article/details/81537489这篇文章。

多层渲染，你要首先保证数据结构符合JSON。key:value
所有后来又把data那块儿改成了：

```emoji: [
      { 
        name:'mood',
        pic:[
          {
            'name': '😀'
          },
          {
            'name': '😂'
          },
          {
            'name': '🤣'
          },
          {
            'name': '🙄'
          },]
      },
      {
        id: 2,
        name: 'weather',
        pic: [
          {
            'id': 21,
            'name': '🌤'
          },
          {
            'id': 22,
            'name': '🌦'
          },
          {
            'id': 23,
            'name': '🌫'
          },
          {
            'id': 24,
            'name': '❄️'
          },]
      },
```

2. 然后理清层次。第一层是emoji的分类：mood、weather、activity
```<view wx:for="{{emoji}}">
  <view>
    {{index+1}}、{{item.name}}
 </view>
</view>
```
列表是最外面的emoji
item.name就能找到他所指向的value

第二层是遍历各个表情包
```
<view wx:for="{{item.pic}}"wx:for-item="pic">
   {{pic.name}}
</view>

```
列表则是每个分类所代表的array，item.pic
最后强调一下：
**item默认是数组当前项的默认名，
index是下标变量，一般是从0开始。**
