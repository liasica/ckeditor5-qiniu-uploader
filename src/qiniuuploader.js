import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository'

import UploadAdapter from './uploadadapter'

export default class QiniuUploader extends Plugin {
	static get requires() {
		return [FileRepository]
	}

	static get pluginName() {
		return 'QiniuUploader'
	}

	init() {
		const config = this.editor.config.get('qiniuUploader')

		if (!config) {
			console.error('Please check your qiniuUploader config')
			return
		}

		if (!config.url) {
			console.error('Please configure your uploaderUrl: qiniuUploader.url. Qiniu area document: https://developer.qiniu.com/kodo/manual/1671/region-endpoint')
			return
		}

		if (!config.token) {
			console.error('Please configure your token: qiniuUploader.token.')
			return
		}

		if (!config.fileUrl) {
			console.error('Please configure your fileUrl: qiniuUploader.fileUrl.')
			return
		}

		this.editor.plugins.get('FileRepository').createUploadAdapter = (loader) => new UploadAdapter(loader, config, this.editor.t)
	}
}
