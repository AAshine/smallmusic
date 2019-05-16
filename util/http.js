//require不是最佳导入方法 选择import 如果不想使用定义的变量  可以用 as 例如 config as config1 注意事项：class里面使用config1
import {config} from '../config.js'
const tips={
  1:'抱歉,出现了一个错误',
  1005:'key无效,请输入正确的key',
  3000:'期刊不存在'
}
class HTTP{
  request(params){
    if(!params.method){
      params.method="GET"
    }
    wx.request({
      url: config.api_base_url+params.url,
      method: params.method,
      data:params.data,
      header:{
        'content-type':'application/json',
        'appkey':config.appkey
      },
      success:(res)=>{
        let code = res.statusCode.toString();
        if(code.startsWith('2')){
          params.success && params.success(res.data)
        }
        else{
          //api 调用不成功 服务器异常
          let error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail:(err)=>{
        //api 调用失败
        this._show_error(1)
      }
    })
  }
  _show_error(error_code){
    if(!error_code){
      error_code = 1
    }
    wx.showToast({
      title: tips[error_code],
      icon:'none',
      duration:2000
    })
  }
}
export {HTTP}