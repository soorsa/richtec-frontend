"use client";

import { Button } from "@/components/ui/button";
import { cn } from "cn";
import {
  CheckCircle2,
  Headphones,
  MessageSquare,
  PhoneCall,
  Send,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FloatingMessageButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    if (hasUnread) setHasUnread(false); // Clear badge on first open
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsOpen(false);
    }, 2500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Popover Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-85 sm:w-95 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-amber-500">
                  <Headphones className="w-5 h-5" />
                </div>
                {/* Active Indicator */}
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-slate-900" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-white">
                  Richtec Equipment Support
                </h4>
                <p className="text-xs text-slate-400">
                  Typically replies in &lt; 5 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800"
              aria-label="Close message popover"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Actions Grid */}
          {/* <div className="p-4 bg-slate-50 border-b border-slate-100 grid grid-cols-2 gap-2">
            <a
              href="https://wa.me/18005550199"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 p-2.5 rounded-xl text-xs font-semibold transition-colors border border-emerald-200/60"
            >
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>WhatsApp Sales</span>
            </a>
            <a
              href="mailto:info@richtec.com"
              className="flex items-center space-x-2 bg-amber-50 hover:bg-amber-100 text-amber-900 p-2.5 rounded-xl text-xs font-semibold transition-colors border border-amber-200/60"
            >
              <Mail className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Email Support</span>
            </a>
          </div> */}

          {/* Content / Form Body */}
          <div className="p-4">
            {formSubmitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto animate-bounce" />
                <h5 className="font-bold text-slate-900 text-base">
                  Message Sent!
                </h5>
                <p className="text-xs text-slate-500 max-w-60 mx-auto">
                  A Richtec sales specialist will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <p className="text-xs text-slate-600 font-medium">
                  Send us a quick message or equipment inquiry:
                </p>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name / Business"
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone Number"
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help? (e.g., Stainless steel quote, repair request...)"
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all resize-none"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    type="submit"
                    className={cn(
                      "bg-slate-900 hover:bg-slate-800 flex-1 rounded-md"
                    )}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </Button>
                  <Button
                    className={cn("bg-blue-600 hover:bg-blue-800 rounded-md")}
                  >
                    <span>Call us</span>
                    <PhoneCall className="w-3.5 h-3.5" />
                  </Button>
                  {/* <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button> */}
                </div>
              </form>
            )}
          </div>

          {/* Footer Note */}
          <div className="bg-slate-50 px-4 py-2 text-center border-t border-slate-100">
            <p className="text-[10px] text-slate-400">
              Need immediate 24/7 emergency service?{" "}
              <Link
                href="tel:+18005550199"
                className="text-amber-600 underline font-semibold"
              >
                Call Direct
              </Link>
            </p>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={toggleOpen}
        aria-label="Open messaging"
        className="relative group bg-slate-900 hover:bg-slate-800 text-white p-3 sm:p-4 rounded-sm sm:rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform active:scale-95 flex items-center justify-center"
      >
        {/* Unread Alert Badge */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-white" />
          </span>
        )}

        {/* Dynamic Icon */}
        {isOpen ? (
          <X className="w-4 h-4 sm:w-6 sm:h-6 transition-transform rotate-0" />
        ) : (
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
            <div className="block sm:hidden text-sm">Send us a message</div>
          </div>
        )}
      </button>
    </div>
  );
}
