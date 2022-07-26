import "./styles.css";
import "./App.css";
import Chatbot from "react-chatbot-kit";
import config from "./chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import LeftContent from "./LeftContent";

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="nav-items">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="logo-name">ChatBot</div>
      </header>
      <div className="content-container">
        <LeftContent />
        <div className="app-chatbot-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
    </div>
  );
}
