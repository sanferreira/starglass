import { useState } from "react";

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const domains = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com'];

  const base = email.split('@')[0];

  const handleSelect = (domain) => {
    setEmail(`${base}@${domain}`);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setShowSuggestions(e.target.value.includes('@') && !e.target.value.includes('.'));
        }}
        placeholder="Email"
        className="w-full border p-2 rounded-md"
      />
      {showSuggestions && (
        <div className="absolute z-10 bg-white border w-full rounded-md shadow mt-1">
          {domains.map((domain) => (
            <div
              key={domain}
              onClick={() => handleSelect(domain)}
              className="px-3 py-2 hover:bg-[#f4f4f4] cursor-pointer text-sm"
            >
              {base}@{domain}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmailInput;