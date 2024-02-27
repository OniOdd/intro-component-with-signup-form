import style from './MainContent.module.css';
import Subscription from '../Subscription/Subscription.tsx';
import Form from '../Form/Form.tsx';

function MainContent() {
  return (
    <main className={style.main}>
      <Subscription />
      <Form />
    </main>
  );
}

export default MainContent;
