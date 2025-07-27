import { TokenService, token } from '@/lib/token-service'
import { makeAutoObservable } from 'mobx'

class AuthStore {
	isLoggedIn = !!TokenService.get(token.accessToken)

	constructor() {
		makeAutoObservable(this)
	}

	login() {
		TokenService.set(token.accessToken, 'sampleAccessToken')
		this.isLoggedIn = true
	}

	logout() {
		TokenService.remove(token.accessToken)
		this.isLoggedIn = false
	}
}

export const authStore = new AuthStore()
