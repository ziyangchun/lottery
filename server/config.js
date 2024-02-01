/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [{
  type: 0,
  count: 1000,
  title: "",
  text: "特别奖"
},
{
  type: 1,
  count: 4,
  text: "安慰奖（第五轮）",
  title: "",
  img: "../img/mbp.jpg"
},
{
  type: 2,
  count: 1,
  text: "一等奖（第五轮）",
  title: "",
  img: "../img/mbp.jpg"
},
  {
    type: 3,
    count: 5,
    text: "二等奖（第五轮）",
    title: "",
    img: "../img/mbp.jpg"
  },
  {
    type: 4,
    count: 6,
    text: "安慰奖（第四轮）",
    title: "",
    img: "../img/huawei.png"
  },
  {
    type: 5,
    count: 4,
    text: "三等奖（第四轮）",
    title: "",
    img: "../img/spark.jpg"
  },
  {
    type: 6,
    count: 7,
    text: "四等奖（第四轮）",
    title: "",
    img: "../img/spark.jpg"
  },
  {
    type: 7,
    count: 5,
    text: "安慰奖（第三轮）",
    title: "",
    img: "../img/spark.jpg"
  },
  {
    type: 8,
    count: 5,
    text: "三等奖（第三轮）",
    title: "",
    img: "../img/ipad.jpg"
  },
  {
    type: 9,
    count: 3,
    text: "安慰奖（第二轮）",
    title: "",
    img: "../img/spark.jpg"
  },
  {
    type: 10,
    count: 5,
    text: "四等奖（第二轮）",
    title: "",
    img: "../img/kindle.jpg"
  },
  {
    type: 11,
    count: 5,
    text: "五等奖（第二轮）",
    title: "",
    img: "../img/kindle.jpg"
  },
  {
    type: 12,
    count: 3,
    text: "安慰奖（第一轮）",
    title: "",
    img: "../img/kindle.jpg"
  },
  {
    type: 13,
    count: 5,
    text: "四等奖（第一轮）",
    title: "",
    img: "../img/kindle.jpg"
  },
  {
    type: 14,
    count: 5,
    text: "五等奖（第一轮）",
    title: "",
    img: "../img/kindle.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [0, 4, 1, 5, 6, 4, 7, 5, 5, 3, 5, 5, 3, 5, 5];

/**
 * 卡片公司名称标识
 */
const COMPANY = "BaiHui";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
