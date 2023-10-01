import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './styles/Sidebar.module.css';
import SidebarOption from './SidebarOption/SidebarOption';
import { Button } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/Add';
import InboxRoundedIcon from '@material-ui/icons/Inbox';
import StarRoundedIcon from '@material-ui/icons/Star';
import SendRoundedIcon from '@material-ui/icons/Send';
import NoteRoundedIcon from '@material-ui/icons/Note';
import DeleteRoundedIcon from '@material-ui/icons/Delete';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

export default function Sidebar({
  toggleIsCompose,
  inboxLength,
  sentLength,
  starredLength,
  draftsLength,
  trashLength,
}) {
  const history = useHistory();
  const location = useLocation();

  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className={styles.container}>
      <Button
        className={styles.compose}
        onClick={() => toggleIsCompose()}
        startIcon={<AddRoundedIcon fontSize='large' />}>
        Compose
      </Button>

      <SidebarOption
        Icon={InboxRoundedIcon}
        title='Inbox'
        number={inboxLength}
        onClick={() => history.push('/email/inbox')}
        selected={location.pathname === '/email/inbox'}
      />
      <SidebarOption
        Icon={StarRoundedIcon}
        title='Starred'
        number={starredLength}
        onClick={() => history.push('/email/starred')}
        selected={location.pathname === '/email/starred'}
      />
      <SidebarOption
        Icon={NoteRoundedIcon}
        title='Drafts'
        number={draftsLength}
        onClick={() => history.push('/email/drafts')}
        selected={location.pathname === '/email/drafts'}
      />
      <SidebarOption
        Icon={SendRoundedIcon}
        title='Sent'
        number={sentLength}
        onClick={() => history.push('/email/sent')}
        selected={location.pathname === '/email/sent'}
      />
      <SidebarOption
        Icon={ExpandMoreRoundedIcon}
        title='More'
        number={''}
        onClick={toggleShowMore}
        className={showMore ? styles.showMore__on : styles.showMore__off}
      />
      {showMore && (
        <>
          <SidebarOption
            Icon={DeleteRoundedIcon}
            title='Trash'
            number={trashLength}
            onClick={() => history.push('/email/trash')}
            selected={location.pathname === '/email/trash'}
          />

     <div className='SidebarOption_item__khTmt false undefined'>
     <i className="fas fa-video" style={{margin:"0 5px 0 11px"}}></i>
     <h3>New Meeting</h3>
     <p></p>
     </div>
     <div className='SidebarOption_item__khTmt false undefined'>
     <i className="fas fa-keyboard" style={{margin:"0 5px 0 11px"}}></i>
     <h3>Join a Meeting</h3>
     <p></p>
     </div>
      <ul className="side-bar-btn-group1 another" style={{margin:"10px 0 0 10px"}}>
          
          <li style={{ padding: "10px 13px 13px 10px",background:"#eaeaea" }}>
            <div className="hangout">
              <div></div>
              <img
                src="https://i1.sndcdn.com/avatars-000658362800-46u3c7-t500x500.jpg"
                alt="" style={{borderRadius:"20px",width: "30px" }}
              />
              <span style={{display:"block",margin:"-32px 0 0 42px"}}>Krishnaveni</span>
            </div>
          </li>
        </ul>

        </>
      )}
    </div>
  );
}
