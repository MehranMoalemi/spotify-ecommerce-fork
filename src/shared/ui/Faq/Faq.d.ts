interface FaqItemType {
  value: string;
  title: string;
  description: React.ReactNode; 
}

interface FaqProps {
  items: FaqItemType[];
  type?: "single" | "multiple"; 
}