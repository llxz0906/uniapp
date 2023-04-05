'use strict';
const db=uniCloud.database();
const dbCmd=db.command;
exports.main = async (event, context) => {
	//event为客户端上传的参数
	let res=await db.collection("users").where({
		age:dbCmd.in([30,41])
	}).get();
	
	//返回数据给客户端
	return res
};
