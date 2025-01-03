import { Link } from 'react-router-dom';

const ChatList = ({
  chats,
  chatText,
  showChat = true,
  showName = true,
}) => {
  if (!chats.length) {
    return <h3>No chats Yet</h3>;
  }

  return (
    <div>
      {showChat && <h3>{chatText}</h3>}
      {chats &&
        chats.map((chat) => (
          <div key={chats._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showName ? (
                <Link
                  className="text-light"
                  to={`/profiles/${chat.chatAuthor}`}
                >
                  {chat.chatAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    started this chat on {chat.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You started this chat {chat.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{chat.chatText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/chats/${chat._id}`}
            >
              Join this chat!
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ChatList;
