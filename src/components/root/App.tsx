import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '~/components/contexts/UserContext';
import Main from '~/components/root/Main';
import { LiffProvider } from 'react-liff';

const liffId = '1657063523-vOMEeOMd';
const stubEnabled = import.meta.env.NODE_ENV !== 'production';

export const App = () => {
  return (
    <HelmetProvider>
      <LiffProvider liffId={liffId} stubEnabled={stubEnabled}>
        <Main />
      </LiffProvider>
    </HelmetProvider>
  );
};
