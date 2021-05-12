import Loader from 'react-loader-spinner';

const ReactLoader = () => {
	return (
		<Loader
			type='TailSpin'
			color='#000000'
			heiht={70}
			width={70}
			className='flex justify-center mt-12'
		/>
	);
};
export default ReactLoader;
