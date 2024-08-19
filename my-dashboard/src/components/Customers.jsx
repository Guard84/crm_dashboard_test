import { useState } from "react";
import members from "../members.json";
import "../styles/customers.scss";
import { CiSearch } from "react-icons/ci";
import { MdOutlineChevronLeft, MdChevronRight } from "react-icons/md";

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Пошук
  const filteredMembers = members.filter(
    (member) =>
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
    <div className="customers">
      <div className="customers-header">
        <div>
          <h1 className="customers-header-title">All Customers</h1>
          <p className="customers-header-title-members">Active Members</p>
        </div>
        <div className="customers-search">
          <div className="customers-search-input-wrapper">
            <CiSearch className="customers-search-icon" />
            <input
              type="text"
              placeholder="Search"
              className="customers-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
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
              <th style={{ textAlign: "center" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.company}</td>
                <td>{member.phoneNumber}</td>
                <td>{member.email}</td>
                <td>{member.country}</td>
                <td>
                  <button className={member.status.toLowerCase()}>
                    {member.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <p>Showing data 1 to 8 of {filteredMembers.length} entries</p>
        <div className="pagination-buttons">
          <button>
            <MdOutlineChevronLeft />
          </button>
          <button
            className={currentPage === 1 ? "selected" : ""}
            onClick={() => handlePageClick(1)}
          >
            1
          </button>
          <button
            className={currentPage === 2 ? "selected" : ""}
            onClick={() => handlePageClick(2)}
          >
            2
          </button>
          <button
            className={currentPage === 3 ? "selected" : ""}
            onClick={() => handlePageClick(3)}
          >
            3
          </button>
          <button
            className={currentPage === 4 ? "selected" : ""}
            onClick={() => handlePageClick(4)}
          >
            4
          </button>
          <span>...</span>
          <button
            className={currentPage === 40 ? "selected" : ""}
            onClick={() => handlePageClick(40)}
          >
            40
          </button>
          <button>
            <MdChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customers;
