const base = {
    get() {
        return {
            url : "http://localhost:8080/djangojo447qt5/",
            name: "djangojo447qt5",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于协同过滤的音乐推荐系统的设计与实现"
        } 
    }
}
export default base
