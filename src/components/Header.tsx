import fidelifyLogo from "@/assets/logo-fidelify.png";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="flex items-center gap-3">
            <img 
              src={fidelifyLogo} 
              alt="Fidelify Logo" 
              className="w-10 h-10"
            />
            <span className="logo-fidelify text-white">
              Fidelify
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;