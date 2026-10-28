import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChatMessage } from '../types';
import { generateAiResponse } from '../utils/aiAssistantBrain';
import {
  X,
  Send,
  Maximize2,
  Minimize2,
  Trash2,
  ExternalLink,
  Bot
} from 'lucide-react';

export const AiAssistantWidget: React.FC = () => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialWelcome = t.aiAssistant.welcomeMessage;

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'msg-welcome',
      sender: 'assistant',
      text: initialWelcome,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      quickReplies: [
        t.aiAssistant.quickQ1,
        t.aiAssistant.quickQ2,
        t.aiAssistant.quickQ3,
        t.aiAssistant.quickQ4,
      ]
    }
  ]);

  // Update welcome message if language changes and only welcome is present
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'msg-welcome') {
        return [
          {
            id: 'msg-welcome',
            sender: 'assistant',
            text: t.aiAssistant.welcomeMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            quickReplies: [
              t.aiAssistant.quickQ1,
              t.aiAssistant.quickQ2,
              t.aiAssistant.quickQ3,
              t.aiAssistant.quickQ4,
            ]
          }
        ];
      }
      return prev;
    });
  }, [language, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const responseData = generateAiResponse(text, language);
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: responseData.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickReplies: responseData.quickReplies,
        actionLink: responseData.actionLink,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 400);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'msg-welcome-reset',
        sender: 'assistant',
        text: t.aiAssistant.welcomeMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickReplies: [
          t.aiAssistant.quickQ1,
          t.aiAssistant.quickQ2,
          t.aiAssistant.quickQ3,
          t.aiAssistant.quickQ4,
        ]
      }
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-brand-blue text-white shadow-card-hover hover:bg-brand-blue-hover transition-all duration-200 hover:scale-105 focus-ring"
          aria-label="Open portfolio guide assistant"
        >
          <Bot className="w-5 h-5" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            Portfolio Guide
          </span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
        </button>
      )}

      {/* Interactive Chat Window */}
      {isOpen && (
        <div
          className={`rounded-2xl bg-white border border-brand-border shadow-card-hover flex flex-col overflow-hidden transition-all duration-200 animate-in fade-in zoom-in-95 ${
            isExpanded
              ? 'w-[92vw] sm:w-[540px] h-[82vh]'
              : 'w-[90vw] sm:w-[380px] h-[520px]'
          }`}
          role="dialog"
          aria-label="Portfolio Guide Chat Window"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-brand-blue text-white shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold tracking-tight">
                  {t.aiAssistant.widgetTitle}
                </h3>
                <span className="text-[10px] text-blue-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {t.aiAssistant.statusOnline}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-white/80">
              <button
                onClick={handleClearHistory}
                className="p-1.5 rounded-lg hover:bg-white/15 hover:text-white transition-colors focus-ring"
                title="Clear Chat History"
                aria-label="Clear chat messages"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg hover:bg-white/15 hover:text-white transition-colors hidden sm:block focus-ring"
                title={isExpanded ? 'Restore Size' : 'Expand Window'}
                aria-label={isExpanded ? 'Restore size' : 'Expand window'}
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/15 hover:text-white transition-colors focus-ring"
                title="Close Window"
                aria-label="Close assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-brand-blue text-white rounded-br-none shadow-subtle'
                      : 'bg-white text-brand-text border border-brand-border rounded-bl-none shadow-subtle'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>

                  {/* Optional Action Link */}
                  {msg.actionLink && (
                    <div className="mt-2.5 pt-2 border-t border-slate-200">
                      <a
                        href={msg.actionLink.href}
                        onClick={() => {
                          if (!msg.actionLink?.isExternal) setIsOpen(false);
                        }}
                        target={msg.actionLink.isExternal ? '_blank' : '_self'}
                        rel={msg.actionLink.isExternal ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:underline"
                      >
                        <span>{msg.actionLink.text}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.timestamp}
                </span>

                {/* Quick Reply Pills */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {msg.quickReplies.map((reply, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendMessage(reply)}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-white text-brand-blue border border-blue-200 hover:bg-blue-50 transition-colors shadow-subtle focus-ring"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white border border-brand-border w-16 shadow-subtle">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-brand-border flex items-center gap-2"
          >
            <label htmlFor="ai-input" className="sr-only">
              Ask a question about the portfolio
            </label>
            <input
              id="ai-input"
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={t.aiAssistant.placeholder}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-brand-border text-xs sm:text-sm text-brand-text placeholder-slate-400 focus-ring"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 rounded-xl bg-brand-blue text-white disabled:opacity-40 hover:bg-brand-blue-hover transition-colors focus-ring"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
