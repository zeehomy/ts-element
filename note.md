<!--
 * @Description: 踩坑笔记
 * @FilePath: \ts-element\note.md
-->
### package.json
1. exports要正确配置引入方式的路径；
2. exports中"."的types选项可解决，用户项目中库引用时，提示类型的问题；
3. exports的key为用户引入使用，不需要真实存在。正确指向value即可；
4. 添加到peerDependencies的包，如果开发时需要，可以同时添加到devDependencies;
5. sideEffects配置需要保留副作用的文件，否则tree-shaking会移除掉文件中的副作用函数和变量；
6. 

### vite config
1. rollupOptions的external中需要添加vue，否则用户项目中会出现Cannot read properties of null (reading 'isCE')；
2. 
