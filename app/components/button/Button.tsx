interface ButtonProps {
  text: string;
  additionalClasses?: string; 
  onClick?: (event?: React.FormEvent) => void; // Make onClick prop accept an optional event argument
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className='bg-primary text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-persianGreen transition-colors'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
