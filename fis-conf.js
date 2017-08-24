//将所有的js文件压缩
fis.match('*.js', {
	// fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});
//将所有的css文件压缩
fis.match('*.css', {
	// 对css进行图片合并，在要合并的图片后加 _sprite
    useSprite: true,
	// fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});
// 加 md5
fis.match('*.{js,css,png,jpg,jpeg}', {
	useHash: true
});
// 插件除外
fis.match('jquery-3.2.1.min.js', {
	useHash: false
});