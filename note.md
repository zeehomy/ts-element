<!--
 * @Description: 踩坑笔记
 * @FilePath: \ts-element\note.md
-->
### package.json
1. exports要正确配置引入方式的路径；
2. exports中"."的types选项可解决，用户项目中库引用时，提示类型的问题；
3. exports的key为用户引入使用，不需要真实存在。正确指向value即可；

