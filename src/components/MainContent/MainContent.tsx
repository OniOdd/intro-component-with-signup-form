import style from './MainContent.module.css';
import Subscription from "../Subscription/Subscription.tsx";

function MainContent() {
  return (
    <main className={style.main}>
      <Subscription />
    </main>
  );
}

export default MainContent;
