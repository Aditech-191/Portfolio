import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChatMessage } from '../types';
import { generateAiResponse } from '../utils/aiAssistantBrain';
import {
  Bot,
  X,
  Send,
  Sparkles,
  Maximize2,
  Minimize2,
  Trash2,
  ArrowRight,
  ExternalLink,
  MessageSquare
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

    // Simulate AI thinking and realistic generation speed
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

      setIsTyping(false);
      setMessages((prev) => [...prev, assistantMessage]);
    }, 600);
  };

  const handleClearHistory = () => {
    setMessages([
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
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Floating Toggle Button (When Closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-primary-600 to-cyan-600 hover:from-primary-500 hover:to-cyan-500 text-white shadow-glow-primary transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-400"
          aria-label="Open Aditech AI Assistant"
        >
          <div className="relative">
            <Bot className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>

          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold leading-tight flex items-center gap-1">
              <span>Aditech AI</span>
              <Sparkles className="w-3 h-3 text-cyan-200" />
            </div>
            <div className="text-[10px] text-cyan-100 font-light">Ask Jjuuko Adinan</div>
          </div>
        </button>
      )}

      {/* Interactive Chat Window */}
      {isOpen && (
        <div
          className={`relative rounded-3xl glass-panel-glow border border-slate-700 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in zoom-in-95 ${
            isExpanded
              ? 'w-[92vw] sm:w-[540px] h-[82vh]'
              : 'w-[92vw] sm:w-[390px] h-[540px]'
          }`}
          role="dialog"
          aria-label="Aditech AI Assistant Chat Window"
        >
          {/* Chat Window Header */}
          <div className="px-4 py-3.5 bg-dark-950/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-cyan-500 p-0.5">
                <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-dark-950"></span>
              </div>

              <div>
                <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{t.aiAssistant.widgetTitle}</span>
                  <span className="text-[10px] font-mono px-1 rounded bg-primary-500/20 text-cyan-300 border border-primary-500/30">
                    Live
                  </span>
                </div>
                <div className="text-[10px] text-emerald-400 font-mono">
                  ● {t.aiAssistant.statusOnline}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-400">
              <button
                onClick={handleClearHistory}
                className="p-1.5 rounded-lg hover:text-slate-200 hover:bg-white/10 transition-colors"
                title="Clear Chat History"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg hover:text-slate-200 hover:bg-white/10 transition-colors hidden sm:block"
                title={isExpanded ? 'Collapse' : 'Expand'}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                title="Close Assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-dark-950/40 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 space-y-2 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-primary-600 to-cyan-600 text-white rounded-br-none shadow-glow-primary'
                      : 'bg-dark-900/90 text-slate-200 rounded-bl-none border border-slate-800'
                  }`}
                >
                  {/* Markdown formatted content */}
                  <div className="whitespace-pre-line font-light">
                    {msg.text.split('\n').map((line, i) => {
                      if (line.startsWith('• ')) {
                        return (
                          <div key={i} className="pl-2 border-l border-cyan-500/50 my-1 text-slate-300">
                            {line.slice(2)}
                          </div>
                        );
                      }
                      return <p key={i}>{line}</p>;
                    })}
                  </div>

                  {/* Optional Action Link in message */}
                  {msg.actionLink && (
                    <div className="pt-2 border-t border-slate-700/60 mt-2">
                      <a
                        href={msg.actionLink.href}
                        target={msg.actionLink.isExternal ? '_blank' : undefined}
                        rel={msg.actionLink.isExternal ? 'noopener noreferrer' : undefined}
                        onClick={() => {
                          if (!msg.actionLink?.isExternal) {
                            setIsOpen(false);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white hover:underline"
                      >
                        <span>{msg.actionLink.text}</span>
                        {msg.actionLink.isExternal ? (
                          <ExternalLink className="w-3.5 h-3.5" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5" />
                        )}
                      </a>
                    </div>
                  )}

                  <div
                    className={`text-[10px] font-mono mt-1 ${
                      msg.sender === 'user' ? 'text-cyan-100 text-right' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {/* Quick Reply Badges if Assistant message has them */}
                {msg.sender === 'assistant' && msg.quickReplies && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                    {msg.quickReplies.map((reply, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendMessage(reply)}
                        className="text-[11px] font-medium py-1 px-2.5 rounded-full bg-slate-800/90 hover:bg-primary-600/30 text-cyan-300 hover:text-white border border-slate-700 hover:border-cyan-500/50 transition-all text-left"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono bg-dark-900/80 px-3 py-2 rounded-2xl w-fit border border-slate-800">
                <Bot className="w-3.5 h-3.5 text-cyan-400" />
                <span>Aditech AI is preparing response</span>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"></span>
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Sticky Bar */}
          <div className="px-3 py-2 bg-dark-950/90 border-t border-slate-800 flex items-center gap-1.5 overflow-x-auto text-[11px]">
            <span className="text-slate-400 shrink-0 font-mono text-[10px]">
              <MessageSquare className="w-3 h-3 inline mr-1 text-primary-400" />
              Prompts:
            </span>
            <button
              onClick={() => handleSendMessage(t.aiAssistant.quickQ1)}
              className="shrink-0 px-2.5 py-1 rounded-lg bg-dark-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800"
            >
              Services
            </button>
            <button
              onClick={() => handleSendMessage(t.aiAssistant.quickQ2)}
              className="shrink-0 px-2.5 py-1 rounded-lg bg-dark-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800"
            >
              Start Project
            </button>
            <button
              onClick={() => handleSendMessage(t.aiAssistant.quickQ3)}
              className="shrink-0 px-2.5 py-1 rounded-lg bg-dark-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800"
            >
              Core Skills
            </button>
            <button
              onClick={() => handleSendMessage(t.aiAssistant.quickQ4)}
              className="shrink-0 px-2.5 py-1 rounded-lg bg-dark-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800"
            >
              Kobo/ODK
            </button>
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-dark-950 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={t.aiAssistant.placeholder}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-dark-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-cyan-600 hover:from-primary-500 hover:to-cyan-500 text-white shadow-glow-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Disclaimer Footer */}
          <div className="px-3 py-1 bg-dark-950 text-[9px] font-mono text-slate-400 text-center border-t border-slate-900">
            {t.aiAssistant.disclaimer}
          </div>

        </div>
      )}

    </div>
  );
};
