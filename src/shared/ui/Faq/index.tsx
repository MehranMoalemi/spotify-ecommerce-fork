import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/src/widgets/shadcn/accordion";



export const Faq: React.FC<FaqProps> = ({ items, type = "single" }) => {
    return (
        <Accordion type={type} collapsible className="w-full p-4  mt-10 relative z-[5] ">
            <div className="flex flex-col w-full md:flex-row md:flex-wrap gap-4 items-start justify-center">
                {items.map((item) => (
                    <AccordionItem key={item.value} value={item.value} className="border border-[#FFCDB6] rounded-lg w-full md:w-[45%]">
                        <AccordionTrigger className="py-4 px-4 rounded-lg text-[#FFCDB6]">
                            {item.title}
                        </AccordionTrigger>
                        <AccordionContent className="p-4">
                            {item.description} {/* Render string or elements here */}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </div>
        </Accordion>
    );
};
