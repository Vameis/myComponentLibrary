/* eslint-disable no-undef */
const msg = require('fs')
  .readFileSync('.git/COMMIT_EDITMSG', 'utf-8')
  .trim()
/*
"build", // 发布版本
"chore", // 改变构建流程、或者增加依赖库、工具等
"ci", // 持续集成修改
"docs", // 文档修改
"feat", // 新增功能
"fix",  // 修复缺陷
"perf", // 优化相关，比如提升性能、体验
 "refactor", // 代码重构
 "revert", // 回退版本
 "style", // 样式修改
 "test", // 测试用例修改
*/
const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release): .{1,50}/
const mergeRe = /^(Merge pull request|Merge branch)/
if (!commitRE.test(msg)) {
  if(!mergeRe.test(msg)){
    console.log('git commit信息校验不通过')

    console.error(`git commit的信息格式不对, 需要使用 title: desc的格式
      比如 fix: xxbug
      feat(test): add new 
      具体校验逻辑看 scripts/verifyCommit.cjs
    `)
    process.exit(1)
  }

}else{
  console.log('git commit信息校验通过')
}
