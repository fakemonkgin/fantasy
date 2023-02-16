import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FantasyDetails, CreateFantasy, Home, Profile, ShowFantasy } from './pages';

export default function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showfantasy" element={<ShowFantasy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/createfantasy" element={<CreateFantasy />} />
          <Route path="/fantasydetails/:id" element={<FantasyDetails />} />
      </Routes>
    </>
  );
}
