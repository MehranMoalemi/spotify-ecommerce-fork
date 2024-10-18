import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/widgets/shadcn/accordion";



export const AccessLinksAccordion: React.FC<AccessLinksProps> = ({ title,children, type = "single" }) => {
  return (
    <Accordion type={type} collapsible className="w-full md:w-[45%]   mt-10 relative z-[5]">
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 items-start justify-center">
        <AccordionItem key={title} value={title} className="border border-cream rounded-lg w-full">
          <AccordionTrigger className="py-4 px-4 rounded-lg text-cream">
            {title}
          </AccordionTrigger>
          <AccordionContent className="p-4">
            {children}
          </AccordionContent>
        </AccordionItem>
      </div>
    </Accordion>
  );
};
