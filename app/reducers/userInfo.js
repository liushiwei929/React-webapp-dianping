import * as Types from '../action-types/userInfo.js'
let initState={}
export function userInfo(state=initState,action){
	switch (action.type){
		// 将传入的state，更新为最新的状态
		case Types.UPDATE_CITY:
			return action.data
		default:
			return state;
	}
}