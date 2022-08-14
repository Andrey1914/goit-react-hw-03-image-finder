import { Oval } from 'react-loader-spinner';
import { Load } from './LoaderStyled';

export default function Loader() {
  return (
    <Load>
      <Oval color="#00BFFF" height={80} width={80} ariaLabel="loading" />
    </Load>
  );
}
