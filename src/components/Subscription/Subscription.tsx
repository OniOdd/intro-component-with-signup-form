import style from './Subscription.module.css';

function Subscription() {
  return (
    <p className={style.subscription}>
      <span className={style.subscription__textBold}>
        Try it free 7 days
      </span> then $20/mo. thereafter
    </p>
  );
}

export default Subscription;
