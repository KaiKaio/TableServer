const { TableModel } = require('../models')
const { CombinModel } = require('../models')
const { MTableModel } = require('../models')
const { MCombinModel } = require('../models')

module.exports =  (router) => {
  router.get('/', async function (ctx, next) {
    let query = ctx.request.url.slice(7)
    // 传入：第几个表格
    let tableCount = parseInt(query)
    // 总数组
    let results = []
    // 用于For循环的数组
    let resultsFor = []
    // 18行
    let count = 18

    // let twFour = [0, 5, 10, 15, 2, 7, 12] // 24列数组

    for(let i = count * tableCount; i < count * (tableCount + 1); i++) {
      resultsFor = await TableModel.find().limit(27).skip(27 * i)
      results.push(resultsFor)
    }

    let code = 0;
    let msg = '查询成功啦~'
    ctx.body = {
      code: code,
      msg: msg,
      data: results
    }
  })

  router.get('/tableData', async function (ctx, next) { // PC路由
    // 总数组
    let results = []
    // 用于For循环的数组
    let resultsFor = []
    for(let i = 0; i < 72; i++) {
      resultsFor = await TableModel.find().limit(129).skip(129 * i)
      results.push(resultsFor)
    }

    let code = 0;
    let msg = '查询成功啦~'
    ctx.body = {
      code: code,
      msg: msg,
      data: results
    }
  })

  // 手机路由
  router.get('/tableDataMobile', async function (ctx, next) {
    // 总数组
    let results = []
    // 用于For循环的数组
    let resultsFor = []
    for(let i = 0; i < 24; i++) {
      resultsFor = await MTableModel.find().limit(45).skip(45 * i)
      results.push(resultsFor)
    }

    let code = 0;
    let msg = '查询成功啦~'
    ctx.body = {
      code: code,
      msg: msg,
      data: results
    }
  })

  // 请求组合键查询
  router.post('/combination', async function(ctx, next) {
    console.log(ctx.request.body.data, '传进来的数组')
    let results = await CombinModel.find({'index': ctx.request.body.data})

    ctx.body = {
        code: 0,
        msg: '查询组合键Success',
        data: results
      }
  })

  // 请求组合键查询（手机）
  router.post('/mcombination', async function(ctx, next) {
    console.log(ctx.request.body.data, '传进来的数组')
    let results = await MCombinModel.find({'index': ctx.request.body.data})

    ctx.body = {
        code: 0,
        msg: '查询组合键Success',
        data: results
      }
  })

  router.post('/111', async function (ctx, next) {
    // let Font = ''
    // for(let i = 0; i < 1215; i++) {
    //   Font = new MTableModel({
    //     font: ctx.request.body.font,
    //     relation: [
    //       { index: 5, to: 66 },
    //       { index: 233, to: 495 }
    //     ],
    //     self: [11, 222, 999],
    //     index: 0,
    //     style: '',
    //     link: ''
    //   })
    //   Font.save()
    // }

    // // 修改 `Index` 值基础实例，记得去修改模型
    // await TableModel.updateOne({_id: "5de1fd501d63737b7d472ba0"},{
    //   $set: {
    //     index: 0
    //   }
    // })

    // // 牛批的方法（破音！）
    // let result = await MTableModel.find()
    // for(let i = 0; i < result.length; i++) {
    //   await MTableModel.update(
    //     {"_id": result[i]._id},
    //     {$set: {"index": i }}
    //   )
    // }

    // // 增加字段
    // await TableModel.update(
    //   {},
    //   {$set: {"self": [22, 33, 6666] }},
    //   {
    //     "multi" : true,
    //   }
    // )

    // 增加样式字段
    // await TableModel.update(
    //   {},
    //   {$set: {"style": '' }},
    //   {
    //     "multi" : true,
    //   }
    // )

    // 增加链接字段
    // await TableModel.update(
    //   {},
    //   {$set: {"link": '' }},
    //   {
    //     "multi" : true,
    //   }
    // )

    ctx.body = {
      code: 0,
      msg: '添加链接字段成功'
    }

  })

}
