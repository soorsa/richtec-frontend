"use client";

import { cn } from "cn";
import { ErrorMessage, useField } from "formik";
import { GripVertical, Trash2 } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

interface ListInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  maxItems?: number;
  className?: string;
  listClassName?: string;
}

export default function ListInput({
  name,
  label,
  placeholder = "Type and press Enter...",
  maxItems = 10,
  className = "",
  listClassName = "",
}: ListInputProps) {
  const [field, meta, helpers] = useField<string[]>(name);
  const { value = [] } = field;
  const { setValue } = helpers;

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addTag = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    if (value.includes(trimmed)) return;
    if (value.length >= maxItems) return;

    setValue([...value, trimmed]);
    setInputValue("");
  };

  const removeTag = (tagToRemove: string) => {
    setValue(value.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && !inputValue && value.length > 0) {
      // Remove last tag when backspace on empty input
      setValue(value.slice(0, -1));
    }
  };

  // Focus input when clicking anywhere on the container
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current?.contains(e.target as Node)) {
        inputRef.current?.focus();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const hasError = meta.touched && meta.error;

  return (
    <div className={`w-full`} ref={containerRef}>
      {label && <div className="text-gray-500 text-sm">{label}</div>}
      <div
        className={`w-full bg-transparent transition space-y-1.5
`}
      >
        {/* Existing tags */}
        {value.map((item) => (
          <div
            key={item}
            className={cn(
              "bg-primary/5 p-3 rounded-lg text-sm flex items-center gap-5 group justify-between",
              listClassName
            )}
          >
            <div className="flex flex-1 items-start gap-2">
              <GripVertical className="text-gray-500 size-4" />
              <div className="flex-1">{item}</div>
            </div>
            <div
              onClick={() => removeTag(item)}
              className="text-zinc-400 hover:text-red-400 transition"
            >
              <Trash2 className="size-4" />
            </div>
          </div>
        ))}
      </div>
      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder || ""}
        className={cn(
          "flex-1 w-full min-w-30 mt-4 bg-transparent border border-gray-200 rounded-md p-3 outline-none text-black placeholder-zinc-500 text-sm",
          className
        )}
        disabled={value.length >= maxItems}
      />
      <ErrorMessage
        name={name}
        component="p"
        className="text-red-500 text-xs mt-1 text-left"
      />

      {hasError && <p className="text-red-500 text-xs mt-1.5">{meta.error}</p>}
    </div>
  );
}
