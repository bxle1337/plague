import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import './main.css';
import {REGISTER} from './api';

import { Panel, PanelHeader, Header,MiniInfoCell, Banner,FormItem,FormStatus, Input, Placeholder, List, Counter, SubnavigationBar, RichCell, SubnavigationButton, Title, PanelHeaderContent, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { Icon24CubeBoxOutline,Icon36Play,Icon20ArticlesOutline,Icon24SkullOutline } from '@vkontakte/icons';

const CreateVirus = ({ id, go, setActivePanel, setInfo }) => (
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
	<Placeholder
	            icon={<img src="https://i.imgur.com/UrDwB4o.png" width="90px" height="90px"/>}
              header="Создание своего вируса!"
            >
						Придумай название своему вирусу. Можно использовать только буквы и цифры, лишнее будет удалено.
  </Placeholder>
	<Div>
	<FormStatus id="error" header="Некорректное название" mode="error" style={{display: 'none'}}>
          Необходимо корректно ввести название. Только буквы и цифры, не меньше 4 символов и не больше 15
  </FormStatus>
	</Div>
	<FormItem top="Придумай название">
        <Input id="namevirus" type="text" placeholder="Название вируса" after={<Icon20ArticlesOutline aria-hidden="true" />} />
				<Button stretched style={{marginTop: 8}} className="buttons" data-to="home" onClick={() => {
					async function register(){
						if(document.getElementById('namevirus').value.length <= 3 || document.getElementById('namevirus').value.length >= 16){
							document.getElementById('error').style.display = "block"
						}else{
              document.getElementById('error').style.display = "none"
							const json = await REGISTER(document.getElementById('namevirus').value)
							json.status = 'good' ? setInfo(json.response) : setInfo(json.response.json())
							json.status = 'good' ? setActivePanel('home') : setActivePanel('startpage')
						}
					}register()
				}} size="m">Вперед, заражать!</Button>
  </FormItem>
	</Div>
	</Panel>
);

CreateVirus.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default CreateVirus;
