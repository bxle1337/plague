import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import './main.css';

import {API} from './api';

import { Panel, PanelHeader, Header,CardGrid,Card,Subhead,MiniInfoCell, Tabs, TabsItem, Banner, Placeholder, List, Counter, SubnavigationBar, RichCell, SubnavigationButton, Title, PanelHeaderContent, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { Icon24CubeBoxOutline,Icon24Users,Icon20ChevronUpOutline,Icon24HealthOutline,Icon36Play,Icon24SkullOutline } from '@vkontakte/icons';

const Home = ({ id, go, Info, fetchedUser,ActiveContent,setActiveContent,BuyVirus }) => (
	<Panel id={id} style={{background: "white"}}>
		{Info &&
		<Group>
		 <div className="maindiv">
		 <Particles style={{position: 'absolute'}}
		 params={{
		 "particles": {
				 "number": {
						 "value": 25,
						 "density": {
								 "enable": true,
								 "value_area": 800
						 }
				 },
				 "line_linked": {
						 "enable": false
				 },
				 "move": {
						 "speed": 1,
						 "out_mode": "out"
				 },
				 "shape": {
						 "type": [
								 "image"
						 ],
						 "image": [
								 {
										 "src": "https://i.imgur.com/UHSDIej.png",
										 "height": 20,
										 "width": 23
								 },
								 {
										 "src": "https://i.imgur.com/AsBOyEb.png",
										 "height": 10,
										 "width": 10
								 },
								 {
										 "src": "https://i.imgur.com/I1zX3Wy.png",
										 "height": 15,
										 "width": 15
								 }
						 ]
				 },
				 "size": {
						 "value": 30,
						 "random": false,
						 "anim": {
								 "enable": true,
								 "speed": 2,
								 "size_min": 5,
								 "sync": true
						 }
				 }
		 },
		 "retina_detect": true
 }}
		 />
			<CardGrid size="s" style={{margin: '20px'}}>
						<Card mode="shadow" style={{marginTop: '20px', borderRadius: '25px'}}>
							<div className="cardstop">
							 <Button size="s" stretched before={<Icon24Users/>} className="secondbuttons" onClick={() => BuyVirus()}>Онлайн: 5</Button>
							</div>
						</Card>
						<Card mode="shadow" style={{marginTop: '20px', borderRadius: '25px'}}>
					 <div className="cardstop">
						 <Button size="s" stretched before={<Icon20ChevronUpOutline/>} className="secondbuttons" onClick={() => BuyVirus()}>270/час</Button>
					 </div>
						</Card>
						<Card mode="shadow" style={{marginTop: '20px', borderRadius: '25px'}}>
					 <div className="cardstop">
					   <Button size="s" stretched before={<Icon20ChevronUpOutline/>} className="secondbuttons" onClick={() => BuyVirus()}>270/час</Button>
					 </div>
						</Card>
			</CardGrid>
			<center>
			 <Title level="1" weight="regular" style={{color: "white", margin: 5}}>1</Title>
		  </center>
		 </div>
		 <center>
			 <div className="score">
			   <h1>0.001 ДНК</h1>
			 </div>
		 </center>
		 <Div style={{marginTop: -28}}>
		 <SubnavigationBar mode="fixed">
					<SubnavigationButton
						before={<Icon24CubeBoxOutline fill="#ad8ef5"/>}
						size="l"
						textLevel={1}
						onClick={() => BuyVirus()}
					>
						Прокачать вирус
					</SubnavigationButton>

					<SubnavigationButton
						before={<Icon24SkullOutline fill="#ad8ef5"/>}
						size="l"
						textLevel={1}
						onClick={() => setActivePanel('add_friend')}
					>
						Заразить друга
					</SubnavigationButton>
				</SubnavigationBar>
		 </Div>
		</Group>}
		{Info &&
		<Group>
		<Banner
				 header="Вы болеете!"
				 subheader="Вы болеете вирусом 'Коронавирус', излечитесь чтобы перестать отдавать 0.010 ДНК в час. "
				 actions={<Button size="s" after={<Icon24HealthOutline/>} className="secondbuttons" onClick={() => {API('virus')}}>Излечиться за 0.100 ДНК</Button>}
			 />
			 <Tabs>
	      <TabsItem
	       onClick={() => setActiveContent('virus')}
	       selected={ActiveContent === 'virus'}>
				 Мой вирус
				 </TabsItem>

				<TabsItem
				 after={<Counter size="s">6</Counter>}
	       onClick={() => setActiveContent('refs')}
	       selected={ActiveContent === 'refs'}>
				 Зараженные
				 </TabsItem>
	     </Tabs>
		{ActiveContent == 'refs' &&
		<React.Fragment>
		<Header mode="secondary">Зараженные</Header>
		<RichCell
        before={<Avatar size={48} />}
        caption="Вчера в 20:30"
      >
        Тимофей Чаптыков
      </RichCell>
			</React.Fragment>
		}
		{ActiveContent == 'virus' &&
		<React.Fragment>
		<Header mode="secondary">Вирус {Info.virus.name}</Header>
		<CardGrid size="s">
          <Card mode="shadow">
            <div className="cards">
						  <img src='https://i.imgur.com/B4cqIvK.png' />
							<Subhead weight="medium" style={{marginTop: '8px'}}>Заразность: {Info.virus.zaraza}%</Subhead>
							<Button size="s" before={<Icon20ChevronUpOutline/>} style={{marginTop: '8px'}} className="secondbuttons" onClick={() => BuyVirus()}>Прокачать</Button>
            </div>
          </Card>
          <Card mode="shadow">
					<div className="cards">
						<img src='https://i.imgur.com/kVf3diA.png' />
						<Subhead weight="medium" style={{marginTop: '8px'}}>Лечение: {Info.virus.out} ДНК</Subhead>
						<Button size="s" before={<Icon20ChevronUpOutline/>} style={{marginTop: '8px'}} className="secondbuttons" onClick={() => BuyVirus()}>Прокачать</Button>
					</div>
          </Card>
          <Card mode="shadow">
					<div className="cards">
					<img src='https://i.imgur.com/kVf3diA.png' />
					<Subhead weight="medium" style={{marginTop: '8px'}}>Лечение: {Info.virus.out} ДНК</Subhead>
					<Button size="s" before={<Icon20ChevronUpOutline/>} style={{marginTop: '8px'}} className="secondbuttons" onClick={() => BuyVirus()}>Прокачать</Button>
					</div>
          </Card>
    </CardGrid>
		</React.Fragment>
		}
		</Group>}
	</Panel>
);

Home.propTypes = {
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

export default Home;
