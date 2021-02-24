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
import codex from '../../Assets/Sponsors/Codex_LOGO.png';

import test from '../../Assets/Sponsors/text-logo.svg';
import wic from '../../Assets/Sponsors/wic_long_white.png';
import gs from '../../Assets/Sponsors/GsLogo_White.png';
import sk from '../../Assets/Sponsors/sketch-logo-light.svg';
import ya from '../../Assets/Sponsors/YAY_Logo1.png';
import iba from '../../Assets/Sponsors/iba.webp';

import arrow from '../../Assets/Arrow.svg';

import { memo, useState } from 'react';
const Page7 = ({ fadeIn }) => {
	const [page, updatePage] = useState(1);
	return (
		<div className='page7bg'>
			<div className={`Page7Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>SPONSORS</h1>

				<div className='sponsors '>
					<div className={`page ${page == 1 ? 'show' : ''}`}>
						<div className='line1'>
							<img src={am} className='imgs' />
							<img src={cn} className='imgs' />
							<img src={doo} className='imgs' />
							<img src={fr} className='imgs' />
							<img src={wo} className='imgs' />
							<img src={bg} className='imgs' />
							<img src={jb} className='imgs jb' />
							<img src={voi} className='imgs' />
							<img src={tas} className='imgs' />
							<img src={sa} className='imgs' />
							<img src={bal} className='imgs' />
							<img src={gfg} className='imgs' />
							<img src={intb} className='imgs' />
							<img src={codex} className='imgs' />
						</div>
					</div>
					<div className={`page ${page == 2 ? 'show' : ''}`}>
						<div className='line1'>
							<img src={test} className='imgs' />
							<img src={wic} className='imgs jb' />
							<img src={gs} className='imgs' />
							<img src={sk} className='imgs' />
							<img src={ya} className='imgs' />
							<img src={iba} className='imgs' />
						</div>
					</div>
				</div>
				<div className='arrows'>
					<img
						src={arrow}
						className={`al arrow ${page == 1 ? 'dis' : ''}`}
						onClick={() => updatePage(1)}
					/>
					<img
						src={arrow}
						className={`arrow ${page == 2 ? 'dis' : ''}`}
						onClick={() => updatePage(2)}
					/>
				</div>
			</div>
		</div>
	);
};

export default memo(Page7);
