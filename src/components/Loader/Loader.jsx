import { Circles } from 'react-loader-spinner';
import { Load } from './LoaderStyled';

export default function Loader() {
  return (
    <Load>
      <Circles color="#00BFFF" height={80} width={80} ariaLabel="loading" />
    </Load>
  );
}
