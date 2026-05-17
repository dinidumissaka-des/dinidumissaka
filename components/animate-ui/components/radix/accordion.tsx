"use client";

import * as React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Accordion = RadixAccordion.Root;

// Context so AccordionContent knows if its parent item is open
const AccordionItemContext = React.createContext<boolean>(false);

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>
>(({ style, ...props }, forwardedRef) => {
  const innerRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    setIsOpen(el.getAttribute("data-state") === "open");
    const observer = new MutationObserver(() => {
      setIsOpen(el.getAttribute("data-state") === "open");
    });
    observer.observe(el, { attributes: true, attributeFilter: ["data-state"] });
    return () => observer.disconnect();
  }, []);

  const combinedRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      (innerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef]
  );

  return (
    <AccordionItemContext.Provider value={isOpen}>
      <RadixAccordion.Item
        ref={combinedRef}
        style={{
          borderBottom: "1px solid var(--border-item)",
          ...style,
        }}
        {...props}
      />
    </AccordionItemContext.Provider>
  );
});
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger> {
  showArrow?: boolean;
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Trigger>,
  AccordionTriggerProps
>(({ children, showArrow = true, style, ...props }, ref) => {
  const isOpen = React.useContext(AccordionItemContext);

  return (
    <RadixAccordion.Header style={{ margin: 0 }}>
      <RadixAccordion.Trigger
        ref={ref}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
          ...style,
        }}
        {...props}
      >
        <span
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "var(--color-muted)",
            lineHeight: 1.5,
          }}
        >
          {children}
        </span>
        {showArrow && (
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{
              display: "flex",
              flexShrink: 0,
              color: "var(--fg-40)",
            }}
          >
            <ChevronDown size={16} />
          </motion.span>
        )}
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof RadixAccordion.Content> {
  keepRendered?: boolean;
}

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Content>,
  AccordionContentProps
>(({ children, keepRendered = false, style, ...props }, ref) => {
  const isOpen = React.useContext(AccordionItemContext);

  return (
    <RadixAccordion.Content
      ref={ref}
      forceMount
      style={{ overflow: "hidden", ...style }}
      {...props}
    >
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                paddingBottom: "20px",
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "14px",
                lineHeight: 1.75,
                color: "var(--fg-50)",
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </RadixAccordion.Content>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
