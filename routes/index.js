const { TableModel } = require('../models')

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

  router.get('/tableData', async function (ctx, next) {
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

  // router.post('/111', async function (ctx, next) {
  //   // let Font = ''
  //   // for(let i = 10000; i < 20000; i++) {
  //   //   Font = new TableModel({
  //   //     font: ctx.request.body.font,
  //   //     relation: [1, 2],
  //   //     self: true
  //   //   })
  //   //   Font.save()
  //   // }

  //   // 修改 `Index` 值基础实例，记得去修改模型
  //   // await TableModel.updateOne({_id: "5de1fd501d63737b7d472ba0"},{
  //   //   $set: {
  //   //     index: 0
  //   //   }
  //   // })

  //   // 牛批的方法（破音！）
  //   let result = await TableModel.find()
  //   for(let i = 0; i < result.length; i++) {
  //     await TableModel.update(
  //       {"_id": result[i]._id},
  //       {$set: {"index": i }}
  //     )
  //   }


  //   ctx.body = {
  //     code: 0,
  //     msg: '添加成功',
  //     // data: result
  //   }


  // })
}
