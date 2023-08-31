import "./Chatbot.css";
const Chatbot = ({ onClose }) => {
  return (
    <div className="chatbot">
      <div className="chatbot-child" />
      <div className="chatbot-item" />
      <img className="image-20-icon" alt="" src="/image-20@2x.png" />
      <div className="chatbot-inner" />
      <b className="type-your-symptom">Type your symptom here</b>
      <div className="api-chat">
        <div className="api-chat-child" />
        <div className="api-chat-item" />
        <img className="image-26-icon" alt="" src="/image-26@2x.png" />
        <b className="check-for-your">
          Check for your doctor it might be covid
        </b>
      </div>
      <div className="rectangle-div" />
      <img className="image-21-icon" alt="" src="/image-20@2x.png" />
      <b className="i-have-coldfeverheadache">
        I have cold,fever,headache for past 1 week
      </b>
      <b className="healthconnect-chatbot">{`Healthconnect chatbot `}</b>
    </div>
  );
};

export default Chatbot;
