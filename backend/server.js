/**
 * LiMeiHua Taproot Airdrop in WorldApp - Backend Server
 * 
 * ชุดซอฟต์แวร์ชุดนี้ มีไว้เพื่อเป็นโครงสร้างพื้นฐานทางการเงินยุคใหม่
 * เพื่อรองรับการไหลของเงินจำนวนมหาศาลของท่านผู้เฒ่าหลี่เหมยฮัว หรือ LiMeiHua Grand Mother
 * และ source code นี้สร้างโดย Mr.Kanutsanan Pongpanna (นายคณัสนันท์ พงษ์พันนา)
 * URL: https://chatgpt.com/g/g-68d289535dec81919445deb9830f2d8e-kanutsanan-pongpanna
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mock Database
const campaigns = new Map();
const airdropRecipients = new Map();
const userVerifications = new Map();
const claimedAirdrops = new Map();

/**
 * World ID Verification Endpoint
 * ตรวจสอบและบันทึกการยืนยันตัวตนของผู้ใช้ผ่าน World ID
 */
app.post('/api/world-id/verify', (req, res) => {
  try {
    const { worldIdToken, userId } = req.body;

    if (!worldIdToken || !userId) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: worldIdToken, userId'
      });
    }

    // Simulate World ID verification (in production, verify with World ID API)
    const verificationId = `verify_${Date.now()}`;
    userVerifications.set(userId, {
      verificationId,
      worldIdToken,
      verifiedAt: new Date(),
      isVerified: true
    });

    res.json({
      success: true,
      message: 'World ID verification successful',
      userId,
      verificationId,
      verifiedAt: new Date()
    });
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Verification failed',
      error: error.message
    });
  }
});

/**
 * Check World ID Verification Status
 * ตรวจสอบสถานะการยืนยันตัวตนของผู้ใช้
 */
app.get('/api/world-id/status/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    const verification = userVerifications.get(userId);

    if (!verification) {
      return res.json({
        success: true,
        isVerified: false,
        message: 'User not verified'
      });
    }

    res.json({
      success: true,
      isVerified: verification.isVerified,
      verificationId: verification.verificationId,
      verifiedAt: verification.verifiedAt
    });
  } catch (error) {
    console.error('Status check error:', error);
    res.status(500).json({
      success: false,
      message: 'Status check failed',
      error: error.message
    });
  }
});

/**
 * Create Airdrop Campaign
 * สร้างแคมเปญแจกจ่าย Airdrop ใหม่
 */
app.post('/api/campaigns/create', (req, res) => {
  try {
    const { adminId, campaignName, tokenSymbol, totalAmount, description } = req.body;

    if (!adminId || !campaignName || !tokenSymbol || !totalAmount) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    const campaignId = `campaign_${Date.now()}`;
    const campaign = {
      campaignId,
      adminId,
      campaignName,
      tokenSymbol,
      totalAmount,
      description: description || '',
      createdAt: new Date(),
      status: 'active',
      recipientCount: 0,
      claimedCount: 0,
      claimedAmount: 0
    };

    campaigns.set(campaignId, campaign);

    res.json({
      success: true,
      message: 'Campaign created successfully',
      campaign
    });
  } catch (error) {
    console.error('Campaign creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Campaign creation failed',
      error: error.message
    });
  }
});

/**
 * Upload Batch Recipients
 * อัปโหลดรายชื่อผู้รับ Airdrop เป็น batch
 */
app.post('/api/campaigns/:campaignId/batch-upload', (req, res) => {
  try {
    const { campaignId } = req.params;
    const { recipients } = req.body;

    const campaign = campaigns.get(campaignId);
    if (!campaign) {
      return res.status(404).json({
        success: false,
        message: 'Campaign not found'
      });
    }

    if (!Array.isArray(recipients) || recipients.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid recipients data'
      });
    }

    // Process recipients
    const processedRecipients = recipients.map((recipient, index) => {
      const recipientId = `recipient_${campaignId}_${index}`;
      const recipientData = {
        recipientId,
        campaignId,
        userId: recipient.userId,
        amount: recipient.amount,
        email: recipient.email || '',
        status: 'pending',
        createdAt: new Date(),
        claimedAt: null
      };

      airdropRecipients.set(recipientId, recipientData);
      return recipientData;
    });

    // Update campaign stats
    campaign.recipientCount += recipients.length;

    res.json({
      success: true,
      message: `${recipients.length} recipients added to campaign`,
      campaignId,
      recipientCount: campaign.recipientCount,
      processedRecipients: processedRecipients.length
    });
  } catch (error) {
    console.error('Batch upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Batch upload failed',
      error: error.message
    });
  }
});

/**
 * Get Campaign Details
 * ดึงข้อมูลแคมเปญ
 */
app.get('/api/campaigns/:campaignId', (req, res) => {
  try {
    const { campaignId } = req.params;
    const campaign = campaigns.get(campaignId);

    if (!campaign) {
      return res.status(404).json({
        success: false,
        message: 'Campaign not found'
      });
    }

    res.json({
      success: true,
      campaign
    });
  } catch (error) {
    console.error('Campaign fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Campaign fetch failed',
      error: error.message
    });
  }
});

/**
 * List All Campaigns
 * แสดงรายการแคมเปญทั้งหมด
 */
app.get('/api/campaigns', (req, res) => {
  try {
    const campaignList = Array.from(campaigns.values());

    res.json({
      success: true,
      campaigns: campaignList,
      totalCampaigns: campaignList.length
    });
  } catch (error) {
    console.error('Campaign list error:', error);
    res.status(500).json({
      success: false,
      message: 'Campaign list failed',
      error: error.message
    });
  }
});

/**
 * Check Airdrop Eligibility
 * ตรวจสอบความมีสิทธิ์ของผู้ใช้ในการรับ Airdrop
 */
app.post('/api/airdrop/check-eligibility', (req, res) => {
  try {
    const { campaignId, userId } = req.body;

    if (!campaignId || !userId) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Check World ID verification
    const verification = userVerifications.get(userId);
    if (!verification || !verification.isVerified) {
      return res.json({
        success: true,
        eligible: false,
        reason: 'User not verified with World ID'
      });
    }

    // Check if already claimed
    const claimedKey = `${campaignId}_${userId}`;
    if (claimedAirdrops.has(claimedKey)) {
      return res.json({
        success: true,
        eligible: false,
        reason: 'Airdrop already claimed'
      });
    }

    // Find recipient record
    let recipientRecord = null;
    for (const [, recipient] of airdropRecipients) {
      if (recipient.campaignId === campaignId && recipient.userId === userId) {
        recipientRecord = recipient;
        break;
      }
    }

    if (!recipientRecord) {
      return res.json({
        success: true,
        eligible: false,
        reason: 'User not in recipient list'
      });
    }

    res.json({
      success: true,
      eligible: true,
      recipientId: recipientRecord.recipientId,
      amount: recipientRecord.amount,
      message: 'User is eligible to claim airdrop'
    });
  } catch (error) {
    console.error('Eligibility check error:', error);
    res.status(500).json({
      success: false,
      message: 'Eligibility check failed',
      error: error.message
    });
  }
});

/**
 * Claim Airdrop
 * ผู้ใช้ทำการเรียกร้อง Airdrop
 */
app.post('/api/airdrop/claim', (req, res) => {
  try {
    const { campaignId, userId, recipientId } = req.body;

    if (!campaignId || !userId || !recipientId) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Verify World ID
    const verification = userVerifications.get(userId);
    if (!verification || !verification.isVerified) {
      return res.status(403).json({
        success: false,
        message: 'User not verified with World ID'
      });
    }

    // Get recipient record
    const recipient = airdropRecipients.get(recipientId);
    if (!recipient || recipient.campaignId !== campaignId) {
      return res.status(404).json({
        success: false,
        message: 'Recipient record not found'
      });
    }

    // Check if already claimed
    const claimedKey = `${campaignId}_${userId}`;
    if (claimedAirdrops.has(claimedKey)) {
      return res.status(400).json({
        success: false,
        message: 'Airdrop already claimed by this user'
      });
    }

    // Process claim
    const claimId = `claim_${Date.now()}`;
    const claim = {
      claimId,
      campaignId,
      userId,
      recipientId,
      amount: recipient.amount,
      claimedAt: new Date(),
      status: 'completed',
      transactionHash: `0x${Math.random().toString(16).substr(2, 64)}`
    };

    claimedAirdrops.set(claimedKey, claim);

    // Update recipient status
    recipient.status = 'claimed';
    recipient.claimedAt = new Date();

    // Update campaign stats
    const campaign = campaigns.get(campaignId);
    if (campaign) {
      campaign.claimedCount += 1;
      campaign.claimedAmount += recipient.amount;
    }

    res.json({
      success: true,
      message: 'Airdrop claimed successfully',
      claim
    });
  } catch (error) {
    console.error('Claim error:', error);
    res.status(500).json({
      success: false,
      message: 'Claim failed',
      error: error.message
    });
  }
});

/**
 * Get User Airdrop History
 * ดึงประวัติ Airdrop ของผู้ใช้
 */
app.get('/api/airdrop/history/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    const userClaims = [];

    for (const [, claim] of claimedAirdrops) {
      if (claim.userId === userId) {
        userClaims.push(claim);
      }
    }

    res.json({
      success: true,
      userId,
      claims: userClaims,
      totalClaimed: userClaims.length,
      totalAmount: userClaims.reduce((sum, claim) => sum + claim.amount, 0)
    });
  } catch (error) {
    console.error('History fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'History fetch failed',
      error: error.message
    });
  }
});

/**
 * Get Campaign Statistics
 * ดึงสถิติของแคมเปญ
 */
app.get('/api/campaigns/:campaignId/stats', (req, res) => {
  try {
    const { campaignId } = req.params;
    const campaign = campaigns.get(campaignId);

    if (!campaign) {
      return res.status(404).json({
        success: false,
        message: 'Campaign not found'
      });
    }

    const stats = {
      campaignId,
      campaignName: campaign.campaignName,
      tokenSymbol: campaign.tokenSymbol,
      totalAmount: campaign.totalAmount,
      claimedAmount: campaign.claimedAmount,
      remainingAmount: campaign.totalAmount - campaign.claimedAmount,
      recipientCount: campaign.recipientCount,
      claimedCount: campaign.claimedCount,
      pendingCount: campaign.recipientCount - campaign.claimedCount,
      claimPercentage: ((campaign.claimedCount / campaign.recipientCount) * 100).toFixed(2),
      createdAt: campaign.createdAt,
      status: campaign.status
    };

    res.json({
      success: true,
      stats
    });
  } catch (error) {
    console.error('Stats fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Stats fetch failed',
      error: error.message
    });
  }
});

/**
 * Health Check
 * ตรวจสอบสถานะของเซิร์ฟเวอร์
 */
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║  LiMeiHua Taproot Airdrop in WorldApp                      ║
║  Server running on http://localhost:${PORT}                      ║
║  World ID Verified Airdrop Distribution System             ║
╚════════════════════════════════════════════════════════════╝
  `);
});

module.exports = app;
