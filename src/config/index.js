/**
 * 
 * 环境配置封装
 * 
 */

const env = import.meta.env.MODE || 'prod';
const EnvConfig ={
    dev:{
        baseApi:'/',
        mockAPi:'https://apifoxmock.com/m2/5881653-5568287-default/262129450?apifoxToken=PzYhHBnZ39CDxOYwpaFbU'
    },
    test:{
        baseApi:'//test.futurefe.com/api',
        mockAPi:'https://apifoxmock.com/m2/5881653-5568287-default/262129450?apifoxToken=PzYhHBnZ39CDxOYwpaFbU'
    },
    prod:{
        baseApi:'//futurefe.com/api',
        mockAPi:'https://apifoxmock.com/m2/5881653-5568287-default/262129450?apifoxToken=PzYhHBnZ39CDxOYwpaFbU'
    }
    
}
export default {
    env: 'dev',
    mock: true, // 是否启用 接口 mock 数据
    // baseApi:'url', // test-www.baidu.com/api  // test-www.baidu.com/api  测试环境 // 不能直接去取了  
    // 是项目都可以导入进来
    ...EnvConfig[env]
     
}