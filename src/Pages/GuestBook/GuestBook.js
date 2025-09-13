import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import "./GuestBook.css";

function Guestbook() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const PALETTE = ["#FFEB99", "#FFD1DC", "#B5EAD7", "#C7CEEA"];

  // Firestore에서 메시지 불러오기
  useEffect(() => {
    const fetchMessages = async () => {
      const qs = await getDocs(collection(db, "guestbook"));
      const data = qs.docs.map((doc) => {
        const d = doc.data();
        return {
          id: doc.id,
          ...d,
          // 불러올 때 한 번만 랜덤 색 지정
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        };
      });

      // 최신순 정렬
      data.sort((a, b) => (b.timestamp?.seconds ?? 0) - (a.timestamp?.seconds ?? 0));
      setMessages(data);
    };
    fetchMessages();
  }, []);

  // 새 메시지 추가
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    await addDoc(collection(db, "guestbook"), {
      text: newMessage,
      timestamp: serverTimestamp(),
    });
    setNewMessage("");
    window.location.reload();
  };

  return (
    <div className="guestbook-page">
      <div className="guestbook-container">
        <div className="guestbook-form-container">
          <h2>Guestbook</h2>
          <form onSubmit={handleSubmit} className="guestbook-form">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Leave message for Tae..."
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="guestbook-messages-container">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="guestbook-message"
              style={{ "--noteBg": msg.color }}
            >
              <p>{msg.text}</p>
              {msg.timestamp && (
                <span className="timestamp">
                  {new Date(msg.timestamp.seconds * 1000).toLocaleString()}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Guestbook;