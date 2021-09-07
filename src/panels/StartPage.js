import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import './main.css';

import { Panel, PanelHeader, Header,MiniInfoCell, Banner, Placeholder, List, Counter, SubnavigationBar, RichCell, SubnavigationButton, Title, PanelHeaderContent, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { Icon24CubeBoxOutline,Icon36Play,Icon24SkullOutline } from '@vkontakte/icons';

const StartPage = ({ id, go }) => (
	<Panel id={id} style={{background: "white"}}>
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
	<Div>
	<Banner
			 header="Важно!"
			 subheader="Начиная игру ты даешь разрешение на добавление тебя в базу игроков, используя информацию с твоего профиля."
		 />
	<Placeholder
	            icon={<img src="https://i.imgur.com/UrDwB4o.png" width="90px" height="90px"/>}
              header="Начало игры!"
              action={<Button className="buttons" data-to="createvirus" onClick={go} size="m">Создать свой вирус</Button>}
            >
						Эта игра про вирус. Создавай свой вирус, заражай других игроков, попадай в топ.
            Чтобы начать игру и создать свой первый вирус, нажимай на кнопку.
  </Placeholder>
	</Div>
	</Panel>
);

StartPage.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default StartPage;
