import { Box } from 'components/Box';
import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Oval color="#00BFFF" height={100} width={100} ariaLabel="loading" />
    </Box>
  );
}
