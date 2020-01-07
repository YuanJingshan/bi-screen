// JavaScript Document
//地图数据
var geoCoordMap = {
    '海门': [121.15, 31.89],
    '鄂尔多斯': [109.781327, 39.608266],
    '招远': [120.38, 37.35],
    '舟山': [122.207216, 29.985295],
    '齐齐哈尔': [123.97, 47.33],
    '盐城': [120.13, 33.38],
    '赤峰': [118.87, 42.28],
    '青岛': [120.33, 36.07],
    '乳山': [121.52, 36.89],
    '金昌': [102.188043, 38.520089],
    '泉州': [118.58, 24.93],
    '莱西': [120.53, 36.86],
    '日照': [119.46, 35.42],
    '胶南': [119.97, 35.88],
    '南通': [121.05, 32.08],
    '拉萨': [91.11, 29.97],
    '云浮': [112.02, 22.93],
    '梅州': [116.1, 24.55],
    '文登': [122.05, 37.2],
    '上海': [121.48, 31.22],
    '攀枝花': [101.718637, 26.582347],
    '威海': [122.1, 37.5],
    '承德': [117.93, 40.97],
    '厦门': [118.1, 24.46],
    '汕尾': [115.375279, 22.786211],
    '潮州': [116.63, 23.68],
    '丹东': [124.37, 40.13],
    '太仓': [121.1, 31.45],
    '曲靖': [103.79, 25.51],
    '烟台': [121.39, 37.52],
    '福州': [119.3, 26.08],
    '瓦房店': [121.979603, 39.627114],
    '即墨': [120.45, 36.38],
    '抚顺': [123.97, 41.97],
    '玉溪': [102.52, 24.35],
    '张家口': [114.87, 40.82],
    '阳泉': [113.57, 37.85],
    '莱州': [119.942327, 37.177017],
    '湖州': [120.1, 30.86],
    '汕头': [116.69, 23.39],
    '昆山': [120.95, 31.39],
    '宁波': [121.56, 29.86],
    '湛江': [110.359377, 21.270708],
    '揭阳': [116.35, 23.55],
    '荣成': [122.41, 37.16],
    '连云港': [119.16, 34.59],
    '葫芦岛': [120.836932, 40.711052],
    '常熟': [120.74, 31.64],
    '东莞': [113.75, 23.04],
    '河源': [114.68, 23.73],
    '淮安': [119.15, 33.5],
    '泰州': [119.9, 32.49],
    '南宁': [108.33, 22.84],
    '营口': [122.18, 40.65],
    '惠州': [114.4, 23.09],
    '江阴': [120.26, 31.91],
    '蓬莱': [120.75, 37.8],
    '韶关': [113.62, 24.84],
    '嘉峪关': [98.289152, 39.77313],
    '广州': [113.23, 23.16],
    '延安': [109.47, 36.6],
    '太原': [112.53, 37.87],
    '清远': [113.01, 23.7],
    '中山': [113.38, 22.52],
    '昆明': [102.73, 25.04],
    '寿光': [118.73, 36.86],
    '盘锦': [122.070714, 41.119997],
    '长治': [113.08, 36.18],
    '深圳': [114.07, 22.62],
    '珠海': [113.52, 22.3],
    '宿迁': [118.3, 33.96],
    '咸阳': [108.72, 34.36],
    '铜川': [109.11, 35.09],
    '平度': [119.97, 36.77],
    '佛山': [113.11, 23.05],
    '海口': [110.35, 20.02],
    '江门': [113.06, 22.61],
    '章丘': [117.53, 36.72],
    '肇庆': [112.44, 23.05],
    '大连': [121.62, 38.92],
    '临汾': [111.5, 36.08],
    '吴江': [120.63, 31.16],
    '石嘴山': [106.39, 39.04],
    '沈阳': [123.38, 41.8],
    '苏州': [120.62, 31.32],
    '茂名': [110.88, 21.68],
    '嘉兴': [120.76, 30.77],
    '长春': [125.35, 43.88],
    '胶州': [120.03336, 36.264622],
    '银川': [106.27, 38.47],
    '张家港': [120.555821, 31.875428],
    '三门峡': [111.19, 34.76],
    '锦州': [121.15, 41.13],
    '南昌': [115.89, 28.68],
    '柳州': [109.4, 24.33],
    '三亚': [109.511909, 18.252847],
    '自贡': [104.778442, 29.33903],
    '吉林': [126.57, 43.87],
    '阳江': [111.95, 21.85],
    '泸州': [105.39, 28.91],
    '西宁': [101.74, 36.56],
    '宜宾': [104.56, 29.77],
    '呼和浩特': [111.65, 40.82],
    '成都': [104.06, 30.67],
    '大同': [113.3, 40.12],
    '镇江': [119.44, 32.2],
    '桂林': [110.28, 25.29],
    '张家界': [110.479191, 29.117096],
    '宜兴': [119.82, 31.36],
    '北海': [109.12, 21.49],
    '西安': [108.95, 34.27],
    '金坛': [119.56, 31.74],
    '东营': [118.49, 37.46],
    '牡丹江': [129.58, 44.6],
    '遵义': [106.9, 27.7],
    '绍兴': [120.58, 30.01],
    '扬州': [119.42, 32.39],
    '常州': [119.95, 31.79],
    '潍坊': [119.1, 36.62],
    '重庆': [106.54, 29.59],
    '台州': [121.420757, 28.656386],
    '南京': [118.78, 32.04],
    '滨州': [118.03, 37.36],
    '贵阳': [106.71, 26.57],
    '无锡': [120.29, 31.59],
    '本溪': [123.73, 41.3],
    '克拉玛依': [84.77, 45.59],
    '渭南': [109.5, 34.52],
    '马鞍山': [118.48, 31.56],
    '宝鸡': [107.15, 34.38],
    '焦作': [113.21, 35.24],
    '句容': [119.16, 31.95],
    '北京': [116.46, 39.92],
    '徐州': [117.2, 34.26],
    '衡水': [115.72, 37.72],
    '包头': [110, 40.58],
    '绵阳': [104.73, 31.48],
    '乌鲁木齐': [87.68, 43.77],
    '枣庄': [117.57, 34.86],
    '杭州': [120.19, 30.26],
    '淄博': [118.05, 36.78],
    '鞍山': [122.85, 41.12],
    '溧阳': [119.48, 31.43],
    '库尔勒': [86.06, 41.68],
    '安阳': [114.35, 36.1],
    '开封': [114.35, 34.79],
    '济南': [117, 36.65],
    '德阳': [104.37, 31.13],
    '温州': [120.65, 28.01],
    '九江': [115.97, 29.71],
    '邯郸': [114.47, 36.6],
    '临安': [119.72, 30.23],
    '兰州': [103.73, 36.03],
    '沧州': [116.83, 38.33],
    '临沂': [118.35, 35.05],
    '南充': [106.110698, 30.837793],
    '天津': [117.2, 39.13],
    '富阳': [119.95, 30.07],
    '泰安': [117.13, 36.18],
    '诸暨': [120.23, 29.71],
    '郑州': [113.65, 34.76],
    '哈尔滨': [126.63, 45.75],
    '聊城': [115.97, 36.45],
    '芜湖': [118.38, 31.33],
    '唐山': [118.02, 39.63],
    '平顶山': [113.29, 33.75],
    '邢台': [114.48, 37.05],
    '德州': [116.29, 37.45],
    '济宁': [116.59, 35.38],
    '荆州': [112.239741, 30.335165],
    '宜昌': [111.3, 30.7],
    '义乌': [120.06, 29.32],
    '丽水': [119.92, 28.45],
    '洛阳': [112.44, 34.7],
    '秦皇岛': [119.57, 39.95],
    '株洲': [113.16, 27.83],
    '石家庄': [114.48, 38.03],
    '莱芜': [117.67, 36.19],
    '常德': [111.69, 29.05],
    '保定': [115.48, 38.85],
    '湘潭': [112.91, 27.87],
    '金华': [119.64, 29.12],
    '岳阳': [113.09, 29.37],
    '长沙': [113, 28.21],
    '衢州': [118.88, 28.97],
    '廊坊': [116.7, 39.53],
    '菏泽': [115.480656, 35.23375],
    '合肥': [117.27, 31.86],
    '武汉': [114.31, 30.52],
    '大庆': [125.03, 46.58]
};

//实时交易流
var flowData = [
    [
        {
            name: '广州',
            oneSize: 3,
            twoSize: 7,
            company: ["广州吉信网络科技开发有限公司", "广东华兴银行股份有限公司", "广州智众联科技有限公司", "广发银行", "广州合摩计算机科技有限公司", "汇聚支付", "金华赚赚科技有限责任公司", "银盛支付服务股份有限公司", "裕福支付", "智众联农商城"],
            value: 200
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '上海',
            oneSize: 5,
            twoSize: 22,
            company: ["上海银联电子支付服务有限公司", "商业服务事业部", "云闪付事业部", "科技事业部", "天翼电子商务有限公司广东分公司", "富友支付", "点融网", "云闪付", "worldFirst", "上海凯岸", "上海创蓝文化传播有限公司", "上海永达信息技术集团有限公司", "中新金科股份有限公司", "兴业银行信用卡中心", "华瑞保险", "和融通", "和融通支付", "浦发银行信用卡中心", "环迅支付", "盛付通", "联通支付公司", "通联商务", "通联支付", "上海国际信托有限公司", "翼支付", "翼支付", "上海优刻得", "华瑞保险", "供应链银银合作"],
            value: 180
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '深圳',
            oneSize: 3,
            twoSize: 18,
            company: ["深圳市信联征信有限公司", "深圳前海微众银行股份有限公司", "深圳市华付征信有限公司", "华付信息技术有限公司", "深圳前海信美分期科技有限公司", "深圳前海斑码科技有限公司", "深圳瑞银信信息技术有限公司", "中信信用卡总中心", "中信银行信用卡中心", "平安银行", "平安银行信用卡中心", "易办事", "深圳前海百递网络有限公司", "深圳市梧桐林科技有限公司（D0）", "深圳萨摩耶互联网金融服务有限公司", "现代金控", "黑核科技", "中付支付", "嘉联支付", "易联支付", "瑞银信", "银盛支付", "微众银行"],
            value: 140
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '天津',
            oneSize: 1,
            twoSize: 5,
            company: ["天津中互金数据科技有限公司", "国美金控投资有限公司", "互金信披", "渤海人寿", "天津一卡通", "华夏人寿保险股份有限公司"],
            value: 120
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '北京',
            oneSize: 4,
            twoSize: 21,
            company: ["联通支付有限公司", "中融国际信托有限公司", "广州智众联科技有限公司", "中信百信银行股份有限公司", "中银通", "人人贷", "品钛", "度小满", "爱钱进", "通联支付", "中金支付", "乐刷支付", "光大银行信用卡中心", "北京字节跳动科技有限公司", "华夏银行信用卡中心", "数码视讯", "易宝支付", "智赋科技", "畅捷支付", "畅捷通支付", "随行付", "保互通（北京）有限公司", "百年人寿保险股份有限公司", "阳光人寿保险产品代付实名认证", "百信网络资金借贷平台", "百信银行"],
            value: 160
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '成都',
            oneSize: 1,
            twoSize: 1,
            company: ["四川远鉴科技有限公司", "四川新网银行股份有限公司"], value: 30
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '杭州',
            oneSize: 1,
            twoSize: 4,
            company: ["浙江网商银行股份有限公司", "浙江梦之付信息技术有限公司", "八维通-数据票务", "快捷通支付", "网易支付"],
            value: 50
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '吉林',
            oneSize: 1,
            twoSize: 4,
            company: ["吉林亿联银行股份有限公司"],
            value: 50
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '厦门',
            oneSize: 0,
            twoSize: 1,
            company: ["福建启富信息技术有限公司"],
            value: 50
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '青岛',
            oneSize: 0,
            twoSize: 1,
            company: ["青岛汇融通商业保理有限公司"],
            value: 50
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '武汉',
            oneSize: 0,
            twoSize: 2,
            company: ["武汉瓯越网视有限公司", "众邦银行"],
            value: 50
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '重庆',
            company: ["富民银行", "还呗"],
            value: 50
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '长沙',
            oneSize: 0,
            twoSize: 1,
            company: ["麓山云"],
            value: 50
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '西安',
            oneSize: 0,
            twoSize: 1,
            company: ["西安银行"],
            value: 50
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '南京',
            oneSize: 0,
            twoSize: 2,
            company: ["南京市开汇互联网科技小额贷款有限公司",
                "紫金信托有限责任公司"
            ],
            value: 50
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '济南',
            oneSize: 1,
            twoSize: 0,
            company: ["中信银行济南分行", "恒丰银行"],
            value: 50
        },
        {name: '贵阳'}
    ],
    [
        {
            name: '贵阳',
            oneSize: 1,
            twoSize: 0,
            company: ["多彩贵州航空有限公司"], value: 20
        },
        {name: '贵阳'}
    ]
];

//数据转换
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
}

//数据配置
var series = [
    {
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: '#F87704',
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(flowData)
    },
    {
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        symbol: ['none', 'none'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: 'none',
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: '#F87704',
                width: 2,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: convertData(flowData)
    },
    {
        type: 'effectScatter',
        name: '贵阳 Top10',
        zlevel: 1,
        coordinateSystem: 'geo',
        rippleEffect: {
            brushType: 'stroke'
        },
        symbolSize: function (val) {
            return val[2] / 6;
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                distance: 20,
                formatter: '{b}',
                textStyle: {
                    color: '#C9D8F5',
                    // fontStyle: 'normal',
                    // fontFamily: 'Microsoft YaHei',
                    fontSize: 25,
                }
            },
        },
        itemStyle: {
            normal: {
                color: '#3CA3CC',
            }
        },
        data: flowData.map(function (dataItem) {
            return {
                name: dataItem[0].name,
                company: dataItem[0].company,
                oneSize: dataItem[0].oneSize,
                twoSize: dataItem[0].twoSize,
                value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            };
        })
    }
];

var chart = echarts.init(document.getElementById('geo'));

//生产图像
var generateMap = function () {
    var geoOption = {
        title: {
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            confine: true,
            textStyle: {
                fontSize: 25
            },
            formatter: function (param) {

                var showContent = '';
                if (param.data.company == null || param.data.company == "undifined") {
                    return "";
                }
                var size = param.data.oneSize + param.data.twoSize;
                var activeSize = size - Math.ceil(Math.random() * 5);
                showContent = "<span style='color: #e5e528;'>该城市商户共" + size + "家<br />今日活跃" + activeSize + "家<br /><br /></span>";
                for (var i = 0; i < param.data.company.length; i++) {
                    showContent = showContent + '<span>' + param.data.company[i] + '</span><br>';
                }
                return showContent;
            }
        },
        geo: {
            map: 'china',
            zlevel: 0,
            itemStyle: {
                normal: {
                    areaColor: '#2D267B',
                    borderColor: '#2A57A2',
                    borderWidth: 2
                },
                emphasis: {
                    areaColor: '#2D43A2'
                }
            },
            regions: [
                {
                    name: '贵州',
                    itemStyle: {
                        normal: {
                            areaColor: '#2D43A2'
                        }
                    }
                }
            ]
        },
        series: series
    };
    chart.setOption(geoOption);
    chart.dispatchAction({
        type: 'showTip',
        //显示第几个series
        seriesIndex: 2,
        //显示第几个数据
        dataIndex: 4
    });
}

//交易排行榜
//x轴公司名称
var xTdata = ['广州吉信网络科技开发有限公司', '广州智众联科技有限公司', '深圳市信联征信有限公司', '中信百信银行股份有限公司',
    '天津中互金数据科技有限公司', ' 深圳前海微众银行股份有限公司', ' 浙江网商银行股份有限公司', '联通支付有限公司', '吉林亿联银行股份有限公司', '深圳市华付征信有限公司'];
//y轴基础数据
var yTdata = [145118 * 6, 130875 * 6, 94277 * 6, 45830 * 6, 39991 * 6, 818 * 6, 5665 * 6, 1133 * 6, 954 * 6, 3832 * 6];
//交易量转换
var realTransData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        res.push(data[i] + Math.ceil(Math.random() * 10));
    }
    return res;
}

var bar = echarts.init(document.getElementById('bar'));

var barGreate = function () {
    //交易数据
    var transData = realTransData(yTdata);
    yTdata = transData;
    var barSeries = [
        {
            name: '月交易排行榜',
            type: 'bar',
            barWidth: 70,
            itemStyle: {
                normal: {
                    color: '#2E72BD'
                }
            },
            data: transData
        }
    ];
    var barOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
            textStyle: {
                fontSize: 25
            },
            // position: ['60%', '60%'],
            formatter: function (param) {
                return param[0].name + "<br />" + "交易量：" + param[0].value + "<br />";
            }
        },
        legend: {
            data: ['月交易排行榜'],
            textStyle: {
                color: '#C9D8F5',
                fontSize: 45
            }
        },
        grid: {
            show: false,
            left: '5%',
            right: '0.3%',
            bottom: '0.3%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            minInterval: 100000,
            splitLine: {
                //网格线
                show: false
            },
            position: 'top',
            axisLabel: {
                //标签
                show: false,
                textStyle: {
                    color: "#C9D8F5"
                }
            },
            axisTick: {
                //刻度线
                show: false
            },
            axisLine: {
                //轴线
                show: false
            }
        },
        yAxis: {
            type: 'category',
            data: xTdata,
            splitLine: {
                show: false
            },
            inverse: true,
            axisLabel: {
                textStyle: {
                    color: "#C9D8F5",
                    fontSize: 38
                }
            },
            axisTick: {
                //刻度线
                show: false
            },
            axisLine: {
                //轴线
                show: false
            }
        },
        series: barSeries
    };
    bar.clear();
    bar.setOption(barOption);
    bar.dispatchAction({
        type: 'showTip',
        //显示第几个series
        seriesIndex: 0,
        //显示第几个数据
        dataIndex: 0
    });
}

window.onresize = function () {
    chart.resize();
    bar.resize();
}