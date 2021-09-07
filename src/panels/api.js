import bridge from '@vkontakte/vk-bridge';

export const API = async function (method, params) {
	const allparams = btoa(window.location.search)
		const response = await fetch('https://h154851.srv11.test-hf.su/plague/api.php?key=' + allparams + "&action=" + method + "&" + params)
		const json = await response.json()
		return await json
}

export const GETTOP = async function (SetTopPlayers) {
	  const allparams = btoa(window.location.search)
		const response = await fetch('https://h154851.srv11.test-hf.su/plague/api.php?key=' + allparams + "&action=gettop")
		const json = await response.json()
		SetTopPlayers(json.response)
		return true
}

export const REGISTER = async function (virusname) {
	const allparams = btoa(window.location.search)
	async function fetchData() {
		const user = await bridge.send('VKWebAppGetUserInfo');
		return await register(user)
	}
	return await fetchData();
	async function register(info){
		const response = await fetch('https://h154851.srv11.test-hf.su/plague/api.php?key=' + allparams + "&action=register&name=" + encodeURIComponent(virusname), {
						method: 'POST',
						body: JSON.stringify(info)
		});
		const json = await response.json()
		return await json
	}
}
