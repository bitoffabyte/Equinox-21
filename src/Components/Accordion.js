import { useRef, useState } from 'react';
import './Accordian.css';
const Accordion = ({ title, body, state, updateState, updateHandler, s }) => {
	const [openHeight, setOpenHeight] = useState(0);
	const [ssd, sssd] = useState(false);
	const ref = useRef();
	const onButtonClick = () => {
		setOpenHeight(ref.current.offsetHeight);
		// setIsOpen((prev) => !prev);
		updateHandler(updateState, !state);
		sssd((prev) => !prev);
	};

	const style = {
		height: state ? openHeight : '0px',
		borderTopLeftRadius: state ? '0px' : '28px',
		borderTopRightRadius: state ? '0px' : '28px',
	};
	const style2 = {
		borderBottomLeftRadius: state ? '0px' : '28px',
		borderBottomRightRadius: state ? '0px' : '28px',
	};
	return (
		<div className='accordion'>
			<div
				className='accordion__button'
				type='button'
				style={style2}
				onClick={onButtonClick}>
				{title}
			</div>
			<div className='accordion__drawer' style={style}>
				<p className='accordion__paragraph' ref={ref}>
					{body}{' '}
					{s ? (
						<a
							href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
							target='_blank'>
							MLH Code of Conduct.
						</a>
					) : null}
				</p>
			</div>
		</div>
	);
};

export default Accordion;
