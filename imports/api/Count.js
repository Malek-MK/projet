import { useCountUp } from 'react-countup';

const SimpleHook = () => {
    const { countUp } = useCountUp({ end: 1234567 });
    return <div>{countUp}</div>;
  };

  export default SimpleHook;