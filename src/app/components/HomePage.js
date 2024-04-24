'use client';

import React, { useEffect, useState, useCallback } from 'react';
import "./HomePage.css";

const HomePage = () => {
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([]);

  const makeFetch = useCallback(() => {
    const url = 'http://localhost:5000/repos';
    callGet(url);
  }, []);

  const callGet = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setItems(data);
      setFilteredItems(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChangeName = (e) => {
    const repoName = e.target.value;
    if (repoName) {
      const list = items.filter((item, i) => {
      });
      setFilteredItems(list);
    } else {
      setFilteredItems(items);
    }
  }

  useEffect(() => {
    makeFetch();
  }, []);


  return (
    <div className="main-container homepage"> 
    Repo List
    <section>
      <input className=""
          type = 'text'
          onChange={handleChangeName}
          placeholder="Repo Name"/>
     </section>

     <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Full Name</th>
            <th>Language</th>
            <th>Visibility</th>
            <th>Open PRs</th>
            <th>Data PRs</th>
            <th>Pushe At</th>
        </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={`row-${index}`}>
                <td> {item.name} </td>
                <td> {item.full_name} </td>
                <td> {item.language} </td>
                <td> {item.visibility} </td>
                <td> {item.countOpenPullRequests} </td>
                <td>
                {/* Mapear y mostrar los pull requests */}
                <ul>
                  {item.dataOpenPullRequests.map(pr => (
                    <li key={pr.id}>
                      <a href={pr.url} target="_blank" rel="noopener noreferrer">
                        {pr.creator} - {pr.url}
                      </a>
                    </li>
                  ))}
                </ul>
                </td>
                <td> {item.pushed_at} </td>
            </tr>
          )
          )}
        </tbody>
    </table>
    </div>
  );
}

export default HomePage;