import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles/AuthPage.module.css';
import FormLogin from './Form/FormLogin';
import FormRegister from './Form/FormRegister';
import GmailIcon from './images/gmail.svg';

export default function AuthPage() {
  const { user, isLoading, error } = useSelector((state) => state.userReducer);

  
  const [isCreateNew, setIsCreateNew] = useState(false);
  const toggleIsCreateNew = () => setIsCreateNew(!isCreateNew);

    useEffect(() => {
    if (user.email) {
      toggleIsCreateNew();
      alert('Account successfully created!');
    }
    
  }, [user.email]);

  return (
    <div className={styles.page}>
      <div style={{border:"solid 1px #ccc",borderRadius:"5px",margin:"50px auto",maxWidth:"370px",padding:"20px",textAlign:"center"}}>
      <img src="https://1000logos.net/wp-content/uploads/2016/11/google_logo.png" style={{width:"150px",margin:"0"}} alt='Gmail' />

      {isCreateNew ? (
        <Fragment>
          <FormRegister isLoading={isLoading} error={error} />
          <button className={styles.link} onClick={toggleIsCreateNew}>
            Login an existing account
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <FormLogin isLoading={isLoading} error={error} user={user} />
          <button className={styles.link} onClick={toggleIsCreateNew}>
            Create a new account
          </button>
        </Fragment>
      )}
     
    </div>
    </div>
  );
}
