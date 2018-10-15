var ProjectAPI = {};
ProjectAPI.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.prototype.$projectApi = {
    getInitStatus:function(){
      return initStatus
    },
    setInitStatus:function(initStatus){
       initStatus = this.initStatus
    },
    init: function () {
      console.log('initializing')
      this.getProjectInfoForInit()
      this.getConfigForInit()
    },
    getProjectInfoForInit: function () {
      fetch('/static/config/project.json').then(res => {
        return res.text()
      }).then(data => {
        localStorage.setItem('project', data)
      })
    },
    getConfigForInit: function () {
      fetch('/static/config/config.json').then(res => {
        return res.text()
      }).then(data => {
        localStorage.setItem('config', data)
        console.log('initialize completed!')
      })
    },
    getArticle: function (id, callBack) {
      fetch('/static/articles/' + id + '.text').then(res => {
        return res.text()
      }).then(data => {
        callBack(data)
      })
    }
  }

}
module.exports = ProjectAPI
