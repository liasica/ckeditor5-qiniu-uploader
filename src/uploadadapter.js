export default class UploadAdapter {
	constructor(loader, config, t) {
		this.loader = loader
		this.config = config
		this.t = t
		this.fileUrl = this.config.fileUrl

		if (!this.fileUrl.indexOf('/', this.fileUrl.length - 1) === -1) {
			this.fileUrl += '/'
		}
	}

	upload() {
		return new Promise((resolve, reject) => {
			this._initRequest()
			this._initListeners(resolve, reject)
			this._sendRequest()
		})
	}

	abort() {
		if (this.xhr) {
			this.xhr.abort()
		}
	}

	_initRequest() {
		const xhr = (this.xhr = new XMLHttpRequest())

		const url = this.config.url
		const headers = this.config.headers

		xhr.withCredentials = false

		xhr.open('POST', url, true)
		if (headers !== null) {
			for (let key in headers) {
				if (typeof headers[key] === 'function') {
					xhr.setRequestHeader(key, headers[key]())
				} else {
					xhr.setRequestHeader(key, headers[key])
				}
			}
		}

		xhr.responseType = 'json'
	}

	_initListeners(resolve, reject) {
		const xhr = this.xhr
		const loader = this.loader
		const t = this.t
		const genericError = t('Cannot upload file:') + ` ${loader.file.name}.`

		xhr.addEventListener('error', () => reject(genericError))
		xhr.addEventListener('abort', () => reject())
		xhr.addEventListener('load', () => {
			const response = xhr.response

			if (!response || !response.hash || !response.key) {
				return reject(response && response.error ? response.error : genericError)
			}

			resolve({
				default: this.fileUrl + response.key
			})
		})

		if (xhr.upload) {
			xhr.upload.addEventListener('progress', (evt) => {
				if (evt.lengthComputable) {
					loader.uploadTotal = evt.total
					loader.uploaded = evt.loaded
				}
			})
		}
	}

	_sendRequest() {
		const token = this.config.token
		const extData = this.config.extData

		const data = new FormData()
		data.append('token', token)
		data.append('file', this.loader.file)

		if (extData != null && typeof extData == 'object') {
			for (let key in extData) {
				data.append(key, extData[key])
			}
		}
		this.xhr.send(data)
	}
}
