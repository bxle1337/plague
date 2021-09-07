import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import './main.css';

import { Panel, PanelHeader, Spinner, Header,MiniInfoCell, Banner,FormItem,FormStatus, Input, Placeholder, List, Counter, SubnavigationBar, RichCell, SubnavigationButton, Title, PanelHeaderContent, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { Icon24CubeBoxOutline,Icon36Play,Icon20ArticlesOutline,Icon24SkullOutline } from '@vkontakte/icons';

const Loading = ({ id, go }) => (
	<Panel id={id} style={{background: "white"}}>
	<Particles style={{position: 'absolute'}}
	params={{
	"particles": {
			"number": {
					"value": 50,
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
	            style={{marginTop: '50%'}}
	            icon={<Spinner size="large" style={{ margin: '20px 0' }} />}
              header="Загрузка..."
            >
  </Placeholder>
	</Div>
	</Panel>
);

Loading.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Loading;
