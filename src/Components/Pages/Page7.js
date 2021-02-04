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
import useDimensions from '../../useDimensions';
const Page7 = ({ fadeIn }) => {
	const { width, height } = useDimensions();

	return (
		<div className='page7bg'>
			<div className={`Page7Content ${fadeIn ? 'fadeIn' : ''} `}>
				<h1>Sponsors</h1>
				<div className='sponsors'>
					<div className='line1'>
						<img src={am} className='imgs' />
						<img src={dev} className='imgs' />
						<img src={cn} className='imgs' />
					</div>
					<br />
					<div className='line2'>
						<img src={po} className='imgs' />
						<img src={ma} className='imgs' />
						<img src={te} className='imgs' />
					</div>
					<br />

					<div className='line3'>
						{width > 720 ? (
							<>
								<img src={doo} className='imgs' />
								<img src={fr} className='imgs' />
								<img src={wo} className='imgs' />
								<img src={bg} className='imgs' />
							</>
						) : (
							<>
								<img src={doo} className='imgs' />
								<img src={fr} className='imgs' />
								<img src={wo} className='imgs' />
							</>
						)}
					</div>
					<br />

					<div className='line4'>
						{width > 720 ? (
							<>
								<img src={tas} className='imgs' />
								<img src={sa} className='imgs' />
								<img src={bal} className='imgs' />
								<img src={voi} className='imgs' />
							</>
						) : (
							<>
								<img src={bg} className='imgs' />
								<img src={tas} className='imgs' />
								<img src={sa} className='imgs' />
							</>
						)}
					</div>
					<br />
					<br />
					{width > 720 ? null : (
						<div className='line5'>
							<img src={bal} className='imgs' />
							<img src={voi} className='imgs' />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Page7;
