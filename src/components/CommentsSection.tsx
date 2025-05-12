import '../styles/CommentsSection.css';

const CommentsSection = () => {
  return (
    <div className="comments">
      <textarea defaultValue="Ваш комментарий..."></textarea>
      <button className="send-button">Отправить</button>
    </div>
  );
};

export default CommentsSection;