var ProjectAPI = {};
ProjectAPI.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.prototype.$projectApi = {
    getArticle: function (id, callBack) {
      fetch('/static/articles/' + id + '.html').then(res => {
        return res.text()
      }).then(data => {
        callBack(data)
      })
    },

  }
  Vue.projectAPIInit = function (callBack) {
    var flg = {
      configInitFlg: false,
      projectInfoInitFlg: false,
      recommendArticleInitFlg: false,
      articlesInitFlg: false,
      aboutMeInitFlg: false,
      hotRecommendArticleInitFlg: false
    }
    init(callBack)

    function init(callBack) {
      console.log('initializing')
      getProjectInfoForInit()
      //初始化设置
      getConfigForInit()
      //初始化数据
      getRecommendArticle()
      getHotRecommendArticle()
      getArticles()
      getAboutMe()
      var isInitialized = setInterval(function () {
        if (flg.configInitFlg && flg.projectInfoInitFlg && flg.recommendArticleInitFlg && flg.articlesInitFlg && flg.aboutMeInitFlg && flg.hotRecommendArticleInitFlg) {
          callBack()
          clearInterval(isInitialized)
        }
      }, 500)
    }

    function getProjectInfoForInit() {
      commonFetch('/static/config/project.json', 'project', function () {
        console.log('Project Info initialized')
        flg.projectInfoInitFlg = true
      })
    }

    function getConfigForInit() {
      commonFetch('/static/config/config.json', 'config', function () {
        console.log('settings initialized')
        flg.configInitFlg = true
      })
    }

    function getRecommendArticle() {
      commonFetch('/static/DB/recommend_article.json', 'recommend_article', function () {
        console.log('Recommend Articles data initialized')
        flg.recommendArticleInitFlg = true
      })
    }

    function getHotRecommendArticle() {
      commonFetch('/static/DB/hot_recommend_article.json', 'hot_recommend_article', function () {
        console.log('Hot Recommend Articles data initialized')
        flg.hotRecommendArticleInitFlg = true
      })
    }

    function getArticles() {
      commonFetch('/static/DB/articles.json', 'articles', function () {
        console.log('Articles data initialized')
        flg.articlesInitFlg = true
      })
    }

    function getAboutMe() {
      commonFetch('/static/DB/about_me.json', 'about_me', function () {
        console.log('about me data initialized')
        flg.aboutMeInitFlg = true
      })
    }

    function commonFetch(url, localStorageKey, callBack) {
      fetch(url).then(res => {
        return res.text()
      }).then(data => {
        localStorage.setItem(localStorageKey, data)
        callBack()
      })
    }
  }

}
module.exports = ProjectAPI
