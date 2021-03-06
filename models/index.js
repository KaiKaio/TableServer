/**
 * @file somthing
 * @lastModifiedTime 2019-11-25 20:47:46
 * @author KaiKaio <https://github.com/KaiKaio>
*/

const mongoose = require('mongoose')

// ES6原生的Promise库
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Table', { useNewUrlParser: true, useUnifiedTopology: true })

// 如果连接失败会执行error回调
mongoose.connection.on("error", (error) => {
  console.log("DB数据库连接失败：" + error);
});
// 如果连接成功会执行open回调
mongoose.connection.on("open",  () => {
  console.log("DB数据库连接成功");
});

// 文档（对象）约束

// 主表每个字符
const TableSchema = new mongoose.Schema({
  font: { type: String, require: true },
  relation: { type: Array, required: true },
  index: {type: Number, required: false },
  self: {type: Array, required: false},
  style: { type: String, required: false},
  link: { type: String, required: false}
})

// 手机表
const MTableSchema = new mongoose.Schema({
  font: { type: String, require: true },
  relation: { type: Array, required: true },
  index: {type: Number, required: false },
  self: {type: Array, required: false},
  style: { type: String, required: false},
  link: { type: String, required: false},
  change: { type: Array, required: false }
})

// 组合表的每个组合
const CombinSchema = new mongoose.Schema({
  index: { type: Array, require: true },
  relation: { type: Array, required: false },
  change: { type: Array, required: false }
})

const MCombinSchema = new mongoose.Schema({
  index: { type: Array, require: true },
  relation: { type: Array, required: false },
  change: { type: Array, required: false },
  img: {type: String, required: false}
})


const TableModel = mongoose.model('tables', TableSchema)
const CombinModel = mongoose.model('combinations', CombinSchema)
const MTableModel = mongoose.model('mtables', MTableSchema)
const MCombinModel = mongoose.model('mcombinations', MCombinSchema)

exports.TableModel = TableModel
exports.CombinModel = CombinModel
exports.MTableModel = MTableModel
exports.MCombinModel = MCombinModel

