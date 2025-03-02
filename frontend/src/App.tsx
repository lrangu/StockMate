import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { DiscoverPage } from "./pages/DiscoverPage";
import { SavedPage } from "./pages/SavedPage";
import { InvestedPage } from "./pages/InvestedPage";
import { ProfilePage } from "./pages/ProfilePage";
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/invested" element={<InvestedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </Router>;
}