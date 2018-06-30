# CKEditor5 七牛上传

[![npm version](https://badge.fury.io/js/%40liasica%2Fckeditor5-qiniu-uploader.svg)](https://badge.fury.io/js/%40liasica%2Fckeditor5-qiniu-uploader)

## TODO LIST

|     计划     | 状态 |
| :----------: | :--: |
| 时间戳防盗链 |      |

## Documentation

Check ckeditor apis (https://docs.ckeditor.com/ckeditor5/latest/api/) page in [CKEditor 5 documentation](https://docs.ckeditor.com/ckeditor5/latest/).

## How to use this?

### Install

See official documentation how to [Installing plugins](https://docs.ckeditor.com/ckeditor5/latest/builds/guides/development/installing-plugins.html).

1. install plugin

```bash
npm i -D @liasica/ckeditor5-qiniu-uploader
```

2. add plugin to build-config.js

```js
module.exports = {
	// The editor creator to use.
	editor: '@ckeditor/ckeditor5-editor-classic/src/classiceditor',

	// The name under which the editor will be exported.
	moduleName: 'ClassicEditor',

	// Plugins to include in the build.
	plugins: [
		'@ckeditor/ckeditor5-essentials/src/essentials',

		'@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter',
		'@ckeditor/ckeditor5-autoformat/src/autoformat',
		'@ckeditor/ckeditor5-basic-styles/src/bold',
		'@ckeditor/ckeditor5-basic-styles/src/italic',
		'@ckeditor/ckeditor5-block-quote/src/blockquote',
		'@ckeditor/ckeditor5-easy-image/src/easyimage',
		'@ckeditor/ckeditor5-heading/src/heading',
		'@ckeditor/ckeditor5-image/src/image',
		'@ckeditor/ckeditor5-image/src/imagecaption',
		'@ckeditor/ckeditor5-image/src/imagestyle',
		'@ckeditor/ckeditor5-image/src/imagetoolbar',
		'@ckeditor/ckeditor5-image/src/imageupload',
		'@ckeditor/ckeditor5-link/src/link',
		'@ckeditor/ckeditor5-list/src/list',
		'@ckeditor/ckeditor5-paragraph/src/paragraph',
        // ...
		'@liasica/ckeditor5-qiniu-uploader/src/qiniuuploader', // <<-- ADD
	],

	// Editor config.
	config: {
		// ...
	},
}
```

3. build

```bash
npm run build
```



### Configure

```
{
    qiniuUploader: {
        url: 'your qiniu upload url here',
        fileUrl: 'your qiniu view url here',
        token: 'your qiniu token here'
    }
}
```

