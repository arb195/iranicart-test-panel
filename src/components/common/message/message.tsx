import { MessageProps } from "../../../types/messageType";

const Message: React.FC<MessageProps> = ({ text, isSent }) => {
  return (
    <div className={`flex items-start mb-4 ${isSent ? "justify-end" : ""}`}>
      <div
        className={`p-3 rounded-lg max-w-xs shadow ${
          isSent ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
