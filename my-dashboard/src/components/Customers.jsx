import {useState } from 'react';
import members from '../members.json';
import '../styles/customers.scss'
const Customers = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
  
    // Пошук
    const filteredMembers = members.filter(member =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.phoneNumber.includes(searchQuery) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.country.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const handlePageClick = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <div className='customers'>
        <div className='customers-header'>
          <h1 className='customers-header-title'>All Customers</h1>
          <p className='customers-header-title-members'>Active Members</p>
          <input
            type="text"
            placeholder="Search"
            className="customers-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
  
        <div className="members">
          <table className="members-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map(member => (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.company}</td>
                  <td>{member.phoneNumber}</td>
                  <td>{member.email}</td>
                  <td>{member.country}</td>
                  <td className={member.status.toLowerCase()}>{member.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <div className="pagination">
          <p>Showing data 1 to 8 of {filteredMembers.length} entries</p>
          <div className="pagination-buttons">
            <button className={currentPage === 1 ? 'active' : ''} onClick={() => handlePageClick(1)}>1</button>
            <button className={currentPage === 2 ? 'active' : ''} onClick={() => handlePageClick(2)}>2</button>
            <button className={currentPage === 3 ? 'active' : ''} onClick={() => handlePageClick(3)}>3</button>
            <button className={currentPage === 4 ? 'active' : ''} onClick={() => handlePageClick(4)}>4</button>
            <span>...</span>
            <button className={currentPage === 40 ? 'active' : ''} onClick={() => handlePageClick(40)}>40</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Customers;