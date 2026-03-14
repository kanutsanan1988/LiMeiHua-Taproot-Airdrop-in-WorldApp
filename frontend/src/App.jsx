/**
 * LiMeiHua Taproot Airdrop in WorldApp - Frontend App Component
 * 
 * ชุดซอฟต์แวร์ชุดนี้ มีไว้เพื่อเป็นโครงสร้างพื้นฐานทางการเงินยุคใหม่
 * เพื่อรองรับการไหลของเงินจำนวนมหาศาลของท่านผู้เฒ่าหลี่เหมยฮัว หรือ LiMeiHua Grand Mother
 * และ source code นี้สร้างโดย Mr.Kanutsanan Pongpanna (นายคณัสนันท์ พงษ์พันนา)
 * URL: https://chatgpt.com/g/g-68d289535dec81919445deb9830f2d8e-kanutsanan-pongpanna
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

// World ID Verification Component
const WorldIDVerification = ({ onVerified }) => {
  const [verifying, setVerifying] = useState(false);
  const [userId, setUserId] = useState('');

  const handleVerify = async () => {
    if (!userId.trim()) {
      alert('Please enter your User ID');
      return;
    }

    setVerifying(true);
    try {
      const mockToken = `world_id_token_${Date.now()}`;
      const response = await axios.post(`${API_URL}/api/world-id/verify`, {
        worldIdToken: mockToken,
        userId
      });

      if (response.data.success) {
        onVerified(userId);
      }
    } catch (error) {
      console.error('Verification error:', error);
      alert('Verification failed');
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="verification-container">
      <div className="verification-card">
        <div className="verification-header">
          <h1>🌍 World ID Verification</h1>
          <p className="verification-subtitle">Verify your identity to claim airdrops</p>
        </div>

        <div className="verification-content">
          <div className="world-id-badge">
            <span className="badge-icon">✓</span>
            <span className="badge-text">World ID Verified</span>
          </div>

          <input
            type="text"
            placeholder="Enter your User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="user-id-input"
            disabled={verifying}
          />

          <button
            className="verify-button"
            onClick={handleVerify}
            disabled={verifying}
          >
            {verifying ? 'Verifying...' : 'Verify with World ID'}
          </button>

          <p className="verification-note">
            Your identity will be verified through World ID to prevent bot attacks and ensure fair distribution.
          </p>
        </div>
      </div>
    </div>
  );
};

// Admin Dashboard Component
const AdminDashboard = ({ userId }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    campaignName: '',
    tokenSymbol: '',
    totalAmount: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCampaigns();
  }, []);

  const loadCampaigns = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/campaigns`);
      setCampaigns(response.data.campaigns);
    } catch (error) {
      console.error('Error loading campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCampaign = async () => {
    if (!formData.campaignName || !formData.tokenSymbol || !formData.totalAmount) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/api/campaigns/create`, {
        adminId: userId,
        ...formData,
        totalAmount: parseFloat(formData.totalAmount)
      });

      if (response.data.success) {
        setCampaigns([...campaigns, response.data.campaign]);
        setFormData({ campaignName: '', tokenSymbol: '', totalAmount: '', description: '' });
        setShowCreateForm(false);
        alert('Campaign created successfully!');
      }
    } catch (error) {
      console.error('Error creating campaign:', error);
      alert('Failed to create campaign');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>👨‍💼 Admin Dashboard</h1>
        <p className="dashboard-subtitle">Manage Taproot Assets Airdrop Campaigns</p>
      </div>

      <div className="admin-content">
        <div className="campaigns-section">
          <div className="section-header">
            <h2>Active Campaigns</h2>
            <button
              className="create-campaign-btn"
              onClick={() => setShowCreateForm(!showCreateForm)}
            >
              + New Campaign
            </button>
          </div>

          {showCreateForm && (
            <div className="create-form">
              <input
                type="text"
                placeholder="Campaign Name"
                value={formData.campaignName}
                onChange={(e) => setFormData({ ...formData, campaignName: e.target.value })}
                className="form-input"
              />
              <input
                type="text"
                placeholder="Token Symbol (e.g., TAP)"
                value={formData.tokenSymbol}
                onChange={(e) => setFormData({ ...formData, tokenSymbol: e.target.value })}
                className="form-input"
              />
              <input
                type="number"
                placeholder="Total Amount"
                value={formData.totalAmount}
                onChange={(e) => setFormData({ ...formData, totalAmount: e.target.value })}
                className="form-input"
              />
              <textarea
                placeholder="Description (optional)"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="form-textarea"
              />
              <div className="form-actions">
                <button
                  className="btn-primary"
                  onClick={handleCreateCampaign}
                  disabled={loading}
                >
                  {loading ? 'Creating...' : 'Create Campaign'}
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => setShowCreateForm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="campaigns-grid">
            {campaigns.length === 0 ? (
              <p className="empty-state">No campaigns yet. Create your first campaign!</p>
            ) : (
              campaigns.map((campaign) => (
                <div key={campaign.campaignId} className="campaign-card">
                  <div className="campaign-header">
                    <h3>{campaign.campaignName}</h3>
                    <span className="campaign-status">{campaign.status}</span>
                  </div>
                  <div className="campaign-details">
                    <p><strong>Token:</strong> {campaign.tokenSymbol}</p>
                    <p><strong>Total:</strong> {campaign.totalAmount}</p>
                    <p><strong>Recipients:</strong> {campaign.recipientCount}</p>
                    <p><strong>Claimed:</strong> {campaign.claimedCount}</p>
                  </div>
                  <button className="view-btn">View Details</button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// User Airdrop Claim Component
const UserAirdropClaim = ({ userId }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [eligibility, setEligibility] = useState(null);
  const [loading, setLoading] = useState(false);
  const [claimHistory, setClaimHistory] = useState([]);

  useEffect(() => {
    loadCampaigns();
    loadClaimHistory();
  }, [userId]);

  const loadCampaigns = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/campaigns`);
      setCampaigns(response.data.campaigns);
    } catch (error) {
      console.error('Error loading campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadClaimHistory = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/airdrop/history/${userId}`);
      setClaimHistory(response.data.claims);
    } catch (error) {
      console.error('Error loading history:', error);
    }
  };

  const checkEligibility = async (campaignId) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/api/airdrop/check-eligibility`, {
        campaignId,
        userId
      });

      setEligibility(response.data);
      setSelectedCampaign(campaignId);
    } catch (error) {
      console.error('Error checking eligibility:', error);
      alert('Failed to check eligibility');
    } finally {
      setLoading(false);
    }
  };

  const handleClaimAirdrop = async () => {
    if (!eligibility || !eligibility.eligible) {
      alert('You are not eligible to claim this airdrop');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/api/airdrop/claim`, {
        campaignId: selectedCampaign,
        userId,
        recipientId: eligibility.recipientId
      });

      if (response.data.success) {
        alert('Airdrop claimed successfully!');
        setEligibility(null);
        setSelectedCampaign(null);
        loadClaimHistory();
      }
    } catch (error) {
      console.error('Error claiming airdrop:', error);
      alert('Failed to claim airdrop');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-airdrop-claim">
      <div className="dashboard-header">
        <h1>🎁 Claim Airdrop</h1>
        <p className="dashboard-subtitle">World ID Verified Airdrop Distribution</p>
      </div>

      <div className="claim-content">
        {/* Available Campaigns */}
        <div className="campaigns-section">
          <h2>Available Campaigns</h2>
          <div className="campaigns-list">
            {campaigns.length === 0 ? (
              <p className="empty-state">No campaigns available</p>
            ) : (
              campaigns.map((campaign) => (
                <div key={campaign.campaignId} className="campaign-item">
                  <div className="campaign-info">
                    <h3>{campaign.campaignName}</h3>
                    <p className="campaign-desc">{campaign.description}</p>
                    <div className="campaign-stats">
                      <span>{campaign.tokenSymbol}</span>
                      <span>Total: {campaign.totalAmount}</span>
                      <span>Claimed: {campaign.claimedCount}/{campaign.recipientCount}</span>
                    </div>
                  </div>
                  <button
                    className="check-btn"
                    onClick={() => checkEligibility(campaign.campaignId)}
                    disabled={loading}
                  >
                    Check Eligibility
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Eligibility Status */}
        {eligibility && (
          <div className="eligibility-section">
            <h2>Eligibility Status</h2>
            <div className={`eligibility-card ${eligibility.eligible ? 'eligible' : 'ineligible'}`}>
              <p className="status-icon">{eligibility.eligible ? '✓' : '✗'}</p>
              <p className="status-message">{eligibility.reason || eligibility.message}</p>

              {eligibility.eligible && (
                <div className="claim-details">
                  <p><strong>Amount:</strong> {eligibility.amount} {selectedCampaign}</p>
                  <button
                    className="claim-btn"
                    onClick={handleClaimAirdrop}
                    disabled={loading}
                  >
                    {loading ? 'Claiming...' : 'Claim Now'}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Claim History */}
        <div className="history-section">
          <h2>Your Claim History</h2>
          <div className="history-list">
            {claimHistory.length === 0 ? (
              <p className="empty-state">No claims yet</p>
            ) : (
              claimHistory.map((claim) => (
                <div key={claim.claimId} className="history-item">
                  <div className="history-info">
                    <p className="claim-id">{claim.claimId}</p>
                    <p className="claim-date">{new Date(claim.claimedAt).toLocaleDateString()}</p>
                  </div>
                  <div className="claim-amount">
                    <span className="amount">{claim.amount}</span>
                    <span className={`status ${claim.status}`}>{claim.status}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [userId, setUserId] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [userRole, setUserRole] = useState('user'); // 'user' or 'admin'

  const handleWorldIDVerified = (id) => {
    setUserId(id);
    setIsVerified(true);
    // In production, determine role from backend
    setUserRole(id.startsWith('admin_') ? 'admin' : 'user');
  };

  return (
    <div className="app-container">
      <div className="app-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="glow glow-3"></div>
      </div>

      <div className="app-content">
        {!isVerified ? (
          <WorldIDVerification onVerified={handleWorldIDVerified} />
        ) : userRole === 'admin' ? (
          <AdminDashboard userId={userId} />
        ) : (
          <UserAirdropClaim userId={userId} />
        )}
      </div>

      <footer className="app-footer">
        <p>🚀 LiMeiHua Taproot Airdrop in WorldApp | World ID Verified Distribution</p>
        <p className="dedication">Dedicated to LiMeiHua Grand Mother</p>
      </footer>
    </div>
  );
}
