import React, { useState } from 'react';

function Header() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Xử lý tìm kiếm ở đây
  };

  const handleClick = () => {
    alert('Nút đã được bấm!');
  };

  return (
    <header>
      <nav className="bg-cyan-300">
        <div className="container mx-auto flex items-center justify-between p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="270" height="30" viewBox="0 0 512 55">
            {/* ... Mã SVG logo ... */}
          </svg>
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchValue}
              onChange={handleSearchChange}
              className="p-2 border border-gray-300 rounded-l w-64"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
              Tìm
            </button>
          </form>
          <div className="flex space-x-2"> {/* Sử dụng space-x-2 để tạo khoảng cách giữa các nút */}
            <button onClick={handleClick} className="bg-green-500 text-white p-2 rounded">
              Click
            </button>
            <button onClick={handleClick} className="bg-green-500 text-white p-2 rounded">
              Click
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
