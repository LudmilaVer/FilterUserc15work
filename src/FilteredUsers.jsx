import React, { useState, useMemo, useCallback } from 'react';
import UserList from './UserList';

const FilteredUsers = () => {
  const userList = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' },
    { id: 4, name: 'Alice' },
    { id: 5, name: 'Bob' },
  ];

  const [filter, setFilter] = useState('');

  const filterUsers = useCallback((filterText) => {
    return userList.filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [userList]);

  const filteredUsers = useMemo(() => filterUsers(filter), [filter, filterUsers]);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default FilteredUsers;
