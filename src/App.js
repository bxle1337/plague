import React, { useState, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, Tabbar, TabbarItem,ActionSheet,Banner,Button,ActionSheetItem, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import TopUsers from './panels/TopUsers';
import Persik from './panels/Persik';
import StartPage from './panels/StartPage';
import CreateVirus from './panels/CreateVirus';
import Loading from './panels/Loading';

import {API} from './panels/api';

import { Icon28AllCategoriesOutline,Icon28PollSquareOutline,Icon28SettingsOutline } from '@vkontakte/icons';

const App = () => {
	const [activePanel, setActivePanel] = useState('loading');
	const [fetchedUser, setUser] = useState(null);
	const [ActiveContent, setActiveContent] = useState('virus');
	const [popout, setPopout] = useState(null);
	const [Info, setInfo] = useState([]);
	const [TopContent, setTopContent] = useState(['check']);
	const [TopPlayers, setTopPlayers] = useState([]);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
			const check = await API('checkuser', 'id=' + user.id)
			if(check.status === false){
				setActivePanel('startpage')
			}else{
				const info = await API('getmyinfo')
				setInfo(info.response)
				setActivePanel('home')
			}
		}
		fetchData();

		function AnimTabs(id){
			anime({
             targets: [document.getElementById("btntop"), document.getElementById("btnhome"), document.getElementById("btnsettings")],
						 scale: 0.8,
						 color: '#7f8285',
						 translateY: 3
           })

		   anime({
             targets: id,
             scale: [1, 1.6],
						 color: '#ad8ef5',
						 translateY: -5
           });
	    }

		var btnhome = document.getElementById("btnhome")
		btnhome.addEventListener('click', () => {AnimTabs(btnhome)});

		var btntop = document.getElementById("btntop")
		btntop.addEventListener('click', () => {AnimTabs(btntop)});

		var btnsettings = document.getElementById("btnsettings")
		btnsettings.addEventListener('click', () => {AnimTabs(btnsettings)});
		AnimTabs(btnhome)

	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const BuyVirus = () => {
		setPopout(
			<ActionSheet
			 onClose={() => setPopout(null)}
		 >
			 <Banner
        mode="image"
        header="Заразность"
        subheader="Прокачать заразность на 1%"
        background={
          <div
            style={{
              backgroundColor: '#ad8ef5',
              backgroundImage: 'url(https://i.imgur.com/PxORaDd.png)',
              backgroundPosition: 'right bottom',
              backgroundSize: 100,
              backgroundRepeat: 'no-repeat',
            }}
          />
        }
        actions={<Button mode="overlay_primary">Прокачать за 0.010 ДНК</Button>}
      />
			<Banner
			 mode="image"
			 header="Цена излечения"
			 subheader="Прокачать цену излечения до 0.100 ДНК"
			 background={
				 <div
					 style={{
						 backgroundColor: '#ad8ef5',
						 backgroundImage: 'url(https://i.imgur.com/d8XC6pE.png)',
						 backgroundPosition: 'right bottom',
						 backgroundSize: 100,
						 backgroundRepeat: 'no-repeat',
					 }}
				 />
			 }
			 actions={<Button mode="overlay_primary">Прокачать за 0.010 ДНК</Button>}
		 />
			 </ActionSheet>
		)
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id='home' Info={Info} BuyVirus={BuyVirus} ActiveContent={ActiveContent} setActiveContent={setActiveContent} fetchedUser={fetchedUser} go={go} />
					<TopUsers id='top' Info={Info} setPopout={setPopout} TopPlayers={TopPlayers} setTopPlayers={setTopPlayers} TopContent={TopContent} setTopContent={setTopContent} fetchedUser={fetchedUser} go={go} />
					<Persik id='persik' go={go} />
					<StartPage id='startpage' go={go} />
					<CreateVirus id='createvirus' go={go} setActivePanel={setActivePanel} setInfo={setInfo}/>
					<Loading id='loading' go={go} />
				</View>
				<Tabbar shadow={false} style={{height: '60px',display: activePanel === 'startpage' || activePanel === 'loading' || activePanel === 'createvirus' ? 'none' : '' }}>
				<TabbarItem
					onClick={go}
					selected={activePanel === 'top'}
					data-to="top"
					id="btntop"
				><Icon28PollSquareOutline/></TabbarItem>
				<TabbarItem
              onClick={go}
              selected={activePanel === 'home'}
              data-to="home"
							id="btnhome"
            ><Icon28AllCategoriesOutline/></TabbarItem>
						<TabbarItem
							onClick={go}
							selected={activePanel === 'settings'}
							data-to="home"
							id="btnsettings"
						><Icon28SettingsOutline/></TabbarItem>
				  </Tabbar>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
