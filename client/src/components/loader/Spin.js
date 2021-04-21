import Loader from 'react-loader-spinner';
import Div from './SpinStyled';

const Spin = () => {
  return (
    <Div>
      <Loader type="Circles" color="#FC842D" height={80} width={80} />
    </Div>
  );
};

export default Spin;
