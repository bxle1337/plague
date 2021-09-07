import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import './main.css';

import {API, GETTOP} from './api';

import { Panel, PanelHeader,Search,PanelHeaderBack,Header,ActionSheet,PanelSpinner,MiniInfoCell,Subhead, Tabs, TabsItem, Banner, Placeholder, List, Counter, SubnavigationBar, RichCell, SubnavigationButton, Title, PanelHeaderContent, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { Icon24CubeBoxOutline,Icon24ReorderIos,Icon20ArticleOutline,Icon24HealthOutline,Icon20SmileOutline,Icon36Play,Icon24SkullOutline } from '@vkontakte/icons';

const TopUsers = ({ id, go, Info, fetchedUser,setPopout, TopContent, setTopContent, TopPlayers, setTopPlayers }) => (
	<Panel id={id} style={{background: "white"}}>
	<PanelHeader left={<PanelHeaderBack data-to="home" onClick={go} />} >
    Топ игроков
  </PanelHeader>
	<Group>
	<div style={{display: 'flex'}}>
    <Search id="search" placeholder="Введите id или имя игрока" onChange={() => {
    const searchstring = document.getElementById('search').value
		if(searchstring.length < 1 || searchstring == "" || searchstring == " "){
			setTopContent(['check'])
		}
		}}/>
	<Button stretched size="m" mode="overlay_primary" style={{color: '#ad8ef5'}} onClick={() => {
		const searchstring = document.getElementById('search').value
		if(searchstring.length < 1 || searchstring.length > 20){

		}else{
			async function search() {
				const array = await API('getusersbyid', 'text=' + encodeURIComponent(searchstring))
				setTopContent(array.response)
			}search()
		}
	}}>Поиск</Button>
	</div>
	  {TopContent.length === 0 && <center><Subhead weight="medium" style={{color: '#7f8285'}}>Ничего не найдено.</Subhead></center>}
		{TopContent[0] != 'check' && TopContent.length > 0 &&
              <React.Fragment>
                {TopContent.map((item) => {
                  return (
                    <Cell key={item.id} before={<Avatar src={item.infovk.photo_200} />} >{item.infovk.first_name} {item.infovk.last_name}</Cell>
                  )
              })}
        </React.Fragment>
      }
	</Group>
	<Group header={<Header mode="secondary"> Топ 50 игроков </Header>}>
	<React.Fragment>
	{
		TopPlayers.length === 0 ? console.log(GETTOP(setTopPlayers)) : () => GETTOP(setTopPlayers)()
	}
	</React.Fragment>
	{TopPlayers.length === 0 && <PanelSpinner />}
	{TopPlayers.length > 0 &&
						<React.Fragment>
							{TopPlayers.map((item) => {
								var i = 1;
								return (
									<RichCell
									  key={item.id}
                    before={<React.Fragment><Avatar size={56} src={item.infovk.photo_200} /><div className="counter"><a>{item.mesto}</a></div></React.Fragment>}
                    text="1.000.000 ДНК"
                    after={<Icon20ArticleOutline fill="#ad8ef5"/>}
										onClick={() => {
											setPopout(
											 <ActionSheet onClose={() => setPopout(null)}>
											   <div className="cent">
												   <Avatar size={96} src={item.infovk.photo_max_orig}/>
													 <Title level="1" weight="regular">{item.infovk.first_name} {item.infovk.last_name}</Title>
													 <MiniInfoCell before={<Icon20SmileOutline />}>
                             Не заражен
                           </MiniInfoCell>
													 <MiniInfoCell before={<Icon20SmileOutline />}>
                             1.500.400 ДНК
                           </MiniInfoCell>
											   </div>
											 </ActionSheet>
											)
										}}
                    >{item.infovk.first_name} {item.infovk.last_name}
                  </RichCell>
								)
								i++;
						})}
			</React.Fragment>
		}
	</Group>
	<div style={{marginTop: '100px'}}>
	</div>
	</Panel>
);

TopUsers.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default TopUsers;
