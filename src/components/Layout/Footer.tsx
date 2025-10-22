export const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-3 md:py-4 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm gap-2 md:gap-0">
      <div className="text-center md:text-left">
        Copyright © PM-eBus Sewa Payment Security Mechanism
      </div>
      <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
        <a href="#" className="hover:underline">Contact Us</a>
        <span className="hidden md:inline">|</span>
        <a href="#" className="hover:underline">Feedback</a>
        <span className="hidden md:inline">|</span>
        <a href="#" className="hover:underline">Tutorial</a>
        <span className="hidden md:inline">|</span>
        <a href="#" className="hover:underline">Terms of Use</a>
      </div>
    </footer>
  );
};
