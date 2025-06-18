import { Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
      }}
    >
      <Spinner width={10} height={10} />
    </div>
  );
};

export default Loading;
