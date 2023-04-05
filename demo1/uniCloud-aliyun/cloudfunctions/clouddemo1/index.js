'use strict';
const db =uniCloud.database()//联通数据库
// exports.main = async (event, context) => {
// 	let res=await db.collection("users").get();读数据表
// 	return res;
//计数
// exports.main = async (event, context) => {
// 	let res=await db.collection("users").count();
// 	return res;
//添加

exports.main = async (event, context) => {
	let {name,zhiwei}=event;
	let res=await db.collection("users").add({name:name,zhiwei:zhiwei});
	return res;
};
