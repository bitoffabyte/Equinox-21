import './Page7.css';
import am from '../../Assets/Sponsors/Amulya.svg';
import dev from '../../Assets/Sponsors/dev.svg';
import cn from '../../Assets/Sponsors/cn.svg';
import po from '../../Assets/Sponsors/po.svg';
import ma from '../../Assets/Sponsors/ma.svg';
import te from '../../Assets/Sponsors/te.svg';
import doo from '../../Assets/Sponsors/do.svg';
import fr from '../../Assets/Sponsors/fr.svg';
import wo from '../../Assets/Sponsors/wo.svg';
import bg from '../../Assets/Sponsors/bg.svg';
import tas from '../../Assets/Sponsors/task.svg';
import sa from '../../Assets/Sponsors/sashi.svg';
import bal from '../../Assets/Sponsors/bal.svg';
import voi from '../../Assets/Sponsors/voice.svg';
import jb from '../../Assets/Sponsors/jetbrains.svg';
import gfg from '../../Assets/Sponsors/GFG LOGO-1.png';
import intb from '../../Assets/Sponsors/logo1.png';
import codex from '../../Assets/Sponsors/codex.svg';
import cos from '../../Assets/Sponsors/cos.svg';
import vb from '../../Assets/Sponsors/vb.png';

import test from '../../Assets/Sponsors/text-logo.svg';
import wic from '../../Assets/Sponsors/wic_long_white.png';
import gs from '../../Assets/Sponsors/GsLogo_White.png';
import sk from '../../Assets/Sponsors/sketch-logo-light.svg';
import ya from '../../Assets/Sponsors/YAY_Logo1.png';
import iba from '../../Assets/Sponsors/iba.webp';
import vibe from '../../Assets/Sponsors/vibe.jpg';
import absr from '../../Assets/Sponsors/absr.jpg';
import k from '../../Assets/Sponsors/kryp.png';
import tk from '../../Assets/Sponsors/tk.png';
import arrow from '../../Assets/Arrow.svg';

import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
const Page7 = ({ fadeIn, reff }) => {
	const [page, updatePage] = useState(0);
	const links = [
		'',
		'https://www.codingninjas.com/',
		'https://www.digitalocean.com/',
		'https://www.framer.com/',
		'https://www.wolframalpha.com/',
		'https://www.bugsee.com/',
		'https://www.jetbrains.com/',
		'https://www.voiceflow.com/',
		'https://www.taskade.com/',
		'https://www.sashido.io/en/',
		'https://balsamiq.com/',
		'https://www.geeksforgeeks.org/',
		'https://interviewbuddy.in/',
		'https://thecodex.me/',
		'https://testmail.app/',
		'', // not sure
		'https://www.girlscript.tech/home',
		'https://www.sketch.com/',
		'', // not sure
		'https://indiablockchainalliance.org/',
		'https://vibestore.in',
		'http://absr.in/web20/default.html',
		'https://cosmosindia.network/',
		'https://www.virtualbadge.io/',
		'https://www.letskrypto.com/',
		'https://trikon.tech/',
	];
	return (
		<div className='page7bg' ref={reff}>
			<div className={`Page7Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>SPONSORS</h1>

				<div className='sponsors '>
					<Carousel
						autoPlay={false}
						showThumbs={false}
						emulateTouch={true}
						showIndicators={false}
						showArrows={false}
						showStatus={false}
						transitionTime={200}
						selectedItem={page}
						emulateTouch={false}
						swipeable={false}
						className='carou'>
						<div className='line1' style={{ zIndex: 1000 }}>
							<a href={links[0]} className='imgs' target='_blank'>
								<img src={am} className='imgs' />
							</a>
							<a href={links[1]} className='imgs' target='_blank'>
								<img src={cn} className='imgs' />
							</a>

							<a href={links[2]} className='imgs' target='_blank'>
								<img src={doo} className='imgs' />
							</a>

							<a href={links[3]} className='imgs' target='_blank'>
								<img src={fr} className='imgs' />
							</a>

							<a href={links[4]} className='imgs' target='_blank'>
								<img src={wo} className='imgs' />
							</a>

							<a href={links[5]} className='imgs' target='_blank'>
								<img src={bg} className='imgs' />
							</a>

							<a href={links[6]} className='imgs' target='_blank'>
								<img src={jb} className='imgs jb' />
							</a>
							<a
								href={links[25]}
								className='imgs lklk'
								style={{ margin: '2%' }}
								target='_blank'>
								<img src={tk} className='imgs' />
							</a>

							<a href={links[8]} className='imgs' target='_blank'>
								<img src={tas} className='imgs' />
							</a>

							<a
								href={links[24]}
								className='imgs lklk'
								target='_blank'>
								<img src={k} className='imgs' />
							</a>
							<a
								href={links[9]}
								className='imgs krp'
								target='_blank'>
								<img src={sa} className='imgs' />
							</a>
							<a href={links[7]} className='imgs' target='_blank'>
								<img src={voi} className='imgs' />
							</a>
						</div>

						<div className='line1'>
							<a
								href={links[22]}
								className='imgs'
								target='_blank'>
								<img src={cos} className='imgs' />
							</a>

							<a
								href={links[11]}
								className='imgs'
								target='_blank'>
								<img src={gfg} className='imgs' />
							</a>

							<a
								href={links[12]}
								className='imgs'
								target='_blank'>
								<img src={intb} className='imgs' />
							</a>

							<a
								href={links[13]}
								className='imgs'
								target='_blank'>
								<img src={codex} className='imgs' />
							</a>
							<a
								href={links[14]}
								className='imgs'
								target='_blank'>
								<img src={test} className='imgs' />
							</a>

							<a
								href={links[15]}
								className='imgs'
								target='_blank'>
								<img src={wic} className='imgs jb' />
							</a>

							<a
								href={links[16]}
								className='imgs'
								target='_blank'>
								<img src={gs} className='imgs' />
							</a>

							<a
								href={links[17]}
								className='imgs'
								target='_blank'>
								<img src={sk} className='imgs' />
							</a>

							<a
								href={links[18]}
								className='imgs'
								target='_blank'>
								<img src={ya} className='imgs' />
							</a>

							<a
								href={links[19]}
								className='imgs'
								target='_blank'>
								<img src={iba} className='imgs' />
							</a>
							<a
								href={links[20]}
								className='imgs'
								target='_blank'>
								<img src={vibe} className='imgs' />
							</a>

							<a
								href={links[10]}
								className='imgs'
								target='_blank'>
								<img src={bal} className='imgs' />
							</a>
							<a
								href={links[21]}
								className='imgs qwsd lklk'
								target='_blank'>
								<img src={absr} className='imgs' />
							</a>
							<a
								href={links[23]}
								className='imgs lklk'
								target='_blank'>
								<img src={vb} className='imgs' />
							</a>
						</div>
					</Carousel>
				</div>
				<div className='arrows'>
					<img
						src={arrow}
						className={`al arrow ${page == 0 ? 'dis' : ''}`}
						onClick={() => updatePage(0)}
					/>
					<img
						src={arrow}
						className={`arrow ${page == 1 ? 'dis' : ''}`}
						onClick={() => updatePage(1)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Page7;
