const base = {
    get() {
        return {
            url : "http://localhost:8080/jiajiaoyuyueguanli/",
            name: "jiajiaoyuyueguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiajiaoyuyueguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "家教管理系统"
        } 
    }
}
export default base
