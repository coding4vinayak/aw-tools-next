/**
 * Abetworks Client-Side Calculators
 * Zero API cost, instant calculations
 * Add this to tools/shared/calculators.js
 */

// ============================================================================
// CPL CALCULATOR (Cost Per Lead)
// ============================================================================

function calculateCPL(adSpend, leads) {
    adSpend = parseFloat(adSpend) || 0;
    leads = parseFloat(leads) || 0;
    
    if (leads === 0) {
        return {
            success: false,
            error: "Number of leads must be greater than 0"
        };
    }
    
    const cpl = adSpend / leads;
    
    return {
        success: true,
        data: {
            cpl: cpl.toFixed(2),
            cpl_formatted: `₹${cpl.toFixed(2)}`,
            ad_spend: adSpend,
            leads: leads
        }
    };
}

// ============================================================================
// ROAS CALCULATOR (Return on Ad Spend)
// ============================================================================

function calculateROAS(revenue, adSpend) {
    revenue = parseFloat(revenue) || 0;
    adSpend = parseFloat(adSpend) || 0;
    
    if (adSpend === 0) {
        return {
            success: false,
            error: "Ad spend must be greater than 0"
        };
    }
    
    const roas = revenue / adSpend;
    const roi = ((revenue - adSpend) / adSpend) * 100;
    
    return {
        success: true,
        data: {
            roas: roas.toFixed(2),
            roas_ratio: `${roas.toFixed(1)}:1`,
            roi: roi.toFixed(1) + '%',
            profit: `₹${(revenue - adSpend).toFixed(2)}`,
            revenue: revenue,
            ad_spend: adSpend
        }
    };
}

// ============================================================================
// FAKE LEAD PROBABILITY CHECKER
// ============================================================================

function checkFakeLeadProbability(email, phone, timeTaken, ipAddress) {
    let riskScore = 10; // Base score
    const factors = [];
    
    // Email analysis (40 points)
    if (email && email.includes('@')) {
        const domain = email.split('@')[1].toLowerCase();
        const tempDomains = ['10minutemail.com', 'tempmail.com', 'guerrillamail.com', 'mailinator.com'];
        const freeDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
        
        if (tempDomains.includes(domain)) {
            riskScore += 40;
            factors.push({
                factor: "Temporary Email Provider",
                impact: "+40",
                color: "#ef4444"
            });
        } else if (freeDomains.includes(domain)) {
            riskScore += 15;
            factors.push({
                factor: "Free Email Provider",
                impact: "+15",
                color: "#f59e0b"
            });
        } else {
            factors.push({
                factor: "Corporate Email",
                impact: "+0",
                color: "#22c55e"
            });
        }
    }
    
    // Phone analysis (20 points)
    if (phone) {
        const cleanPhone = phone.replace(/[^0-9]/g, '');
        if (cleanPhone.length < 10) {
            riskScore += 20;
            factors.push({
                factor: "Invalid Phone Number",
                impact: "+20",
                color: "#ef4444"
            });
        } else if (cleanPhone.length === 10) {
            riskScore += 5;
            factors.push({
                factor: "Basic Phone Format",
                impact: "+5",
                color: "#f59e0b"
            });
        } else {
            factors.push({
                factor: "Valid Phone Format",
                impact: "+0",
                color: "#22c55e"
            });
        }
    }
    
    // Time-based analysis (30 points)
    if (timeTaken && timeTaken > 0) {
        if (timeTaken < 5) {
            riskScore += 30;
            factors.push({
                factor: `Unnaturally Fast (${timeTaken}s)`,
                impact: "+30",
                color: "#ef4444"
            });
        } else if (timeTaken < 15) {
            riskScore += 10;
            factors.push({
                factor: `Fast Completion (${timeTaken}s)`,
                impact: "+10",
                color: "#f59e0b"
            });
        } else {
            factors.push({
                factor: `Normal Speed (${timeTaken}s)`,
                impact: "+0",
                color: "#22c55e"
            });
        }
    }
    
    // IP analysis (10 points)
    if (ipAddress) {
        if (ipAddress.startsWith('127.') || ipAddress.startsWith('192.168.') || ipAddress.startsWith('10.')) {
            riskScore += 10;
            factors.push({
                factor: "Internal/Private IP",
                impact: "+10",
                color: "#f59e0b"
            });
        }
    }
    
    // Cap score at 100
    riskScore = Math.min(100, Math.max(0, riskScore));
    
    // Determine verdict
    let verdict, color;
    if (riskScore > 60) {
        verdict = "High Risk - Likely Fake";
        color = "#ef4444";
    } else if (riskScore > 30) {
        verdict = "Moderate Risk - Verify";
        color = "#f59e0b";
    } else {
        verdict = "Low Risk - Genuine";
        color = "#22c55e";
    }
    
    return {
        success: true,
        data: {
            risk_score: riskScore,
            verdict: verdict,
            color: color,
            factors: factors
        }
    };
}

// ============================================================================
// LEAD FOLLOW-UP GAP FINDER
// ============================================================================

function findFollowUpGaps(leads) {
    /**
     * leads: Array of lead objects with:
     * - id: string
     * - lastContact: Date string (ISO format)
     * - followUpInterval: number (days)
     * - status: string (new, contacted, qualified, closed)
     */
    
    const now = new Date();
    const gaps = [];
    
    leads.forEach(lead => {
        if (lead.status === 'closed') return; // Skip closed deals
        
        const lastContact = new Date(lead.lastContact);
        const daysSinceContact = Math.floor((now - lastContact) / (1000 * 60 * 60 * 24));
        const daysOverdue = daysSinceContact - lead.followUpInterval;
        
        if (daysOverdue > 0) {
            gaps.push({
                lead_id: lead.id,
                days_overdue: daysOverdue,
                last_contact: lastContact.toLocaleDateString(),
                priority: daysOverdue > 7 ? 'high' : (daysOverdue > 3 ? 'medium' : 'low'),
                recommended_action: getRecommendedAction(daysOverdue, lead.status)
            });
        }
    });
    
    // Sort by priority
    gaps.sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    return {
        success: true,
        data: {
            total_gaps: gaps.length,
        high_priority: gaps.filter(g => g.priority === 'high').length,
        medium_priority: gaps.filter(g => g.priority === 'medium').length,
        low_priority: gaps.filter(g => g.priority === 'low').length,
            gaps: gaps
        }
    };
}

function getRecommendedAction(daysOverdue, status) {
    if (daysOverdue > 14) {
        return "Send re-engagement email immediately";
    } else if (daysOverdue > 7) {
        return "Schedule call within 24 hours";
    } else if (daysOverdue > 3) {
        return "Send follow-up email today";
    } else {
        return "Add to tomorrow's call list";
    }
}

// ============================================================================
// WHATSAPP RESPONSE TIME CALCULATOR
// ============================================================================

function calculateWhatsAppResponseTime(messages) {
    /**
     * messages: Array of message objects with:
     * - timestamp: Date string (ISO format)
     * - from: 'business' or 'customer'
     * - type: 'message' or 'query'
     */
    
    // Sort by timestamp
    messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    
    let totalResponseTime = 0;
    let responseCount = 0;
    let lastCustomerMessage = null;
    const responseTimes = [];
    
    messages.forEach(msg => {
        if (msg.from === 'customer') {
            lastCustomerMessage = new Date(msg.timestamp);
        } else if (msg.from === 'business' && lastCustomerMessage) {
            const responseTime = (new Date(msg.timestamp) - lastCustomerMessage) / (1000 * 60); // minutes
            responseTimes.push(responseTime);
            totalResponseTime += responseTime;
            responseCount++;
            lastCustomerMessage = null;
        }
    });
    
    const avgResponseTime = responseCount > 0 ? totalResponseTime / responseCount : 0;
    
    // Determine rating
    let rating, ratingColor;
    if (avgResponseTime < 5) {
        rating = "Excellent";
        ratingColor = "#22c55e";
    } else if (avgResponseTime < 15) {
        rating = "Good";
        ratingColor = "#3b82f6";
    } else if (avgResponseTime < 60) {
        rating = "Average";
        ratingColor = "#f59e0b";
    } else {
        rating = "Slow";
        ratingColor = "#ef4444";
    }
    
    return {
        success: true,
        data: {
            average_response_time: `${avgResponseTime.toFixed(1)} minutes`,
            average_response_time_numeric: avgResponseTime,
            total_responses: responseCount,
            rating: rating,
            rating_color: ratingColor,
            response_times: responseTimes
        }
    };
}

// ============================================================================
// CHAT ENGAGEMENT SCORER
// ============================================================================

function scoreChatEngagement(messages) {
    /**
     * messages: Array of message objects with:
     * - from: 'user' or 'bot'
     * - length: number (character count)
     * - hasQuestion: boolean
     * - hasPositiveWord: boolean
     * - timestamp: Date string
     */
    
    if (!messages || messages.length === 0) {
        return {
            success: false,
            error: "No messages to analyze"
        };
    }
    
    let score = 50; // Base score
    const factors = [];
    
    // Message count (20 points)
    const messageCount = messages.length;
    if (messageCount > 20) {
        score += 20;
        factors.push({ factor: "High Engagement", impact: "+20", color: "#22c55e" });
    } else if (messageCount > 10) {
        score += 15;
        factors.push({ factor: "Good Engagement", impact: "+15", color: "#3b82f6" });
    } else if (messageCount > 5) {
        score += 10;
        factors.push({ factor: "Moderate Engagement", impact: "+10", color: "#f59e0b" });
    } else {
        factors.push({ factor: "Low Engagement", impact: "+0", color: "#ef4444" });
    }
    
    // User message length (20 points)
    const userMessages = messages.filter(m => m.from === 'user');
    const avgLength = userMessages.reduce((sum, m) => sum + (m.length || 0), 0) / userMessages.length;
    
    if (avgLength > 50) {
        score += 20;
        factors.push({ factor: "Detailed Responses", impact: "+20", color: "#22c55e" });
    } else if (avgLength > 20) {
        score += 15;
        factors.push({ factor: "Good Response Length", impact: "+15", color: "#3b82f6" });
    } else {
        factors.push({ factor: "Short Responses", impact: "+0", color: "#ef4444" });
    }
    
    // Questions asked (15 points)
    const questions = userMessages.filter(m => m.hasQuestion);
    const questionRate = questions.length / userMessages.length;
    
    if (questionRate > 0.3) {
        score += 15;
        factors.push({ factor: "Many Questions Asked", impact: "+15", color: "#22c55e" });
    } else if (questionRate > 0.1) {
        score += 10;
        factors.push({ factor: "Some Questions", impact: "+10", color: "#3b82f6" });
    } else {
        factors.push({ factor: "Few Questions", impact: "+0", color: "#f59e0b" });
    }
    
    // Positive sentiment (15 points)
    const positiveMessages = userMessages.filter(m => m.hasPositiveWord);
    const positiveRate = positiveMessages.length / userMessages.length;
    
    if (positiveRate > 0.5) {
        score += 15;
        factors.push({ factor: "Positive Sentiment", impact: "+15", color: "#22c55e" });
    } else if (positiveRate > 0.2) {
        score += 10;
        factors.push({ factor: "Neutral Sentiment", impact: "+10", color: "#3b82f6" });
    } else {
        factors.push({ factor: "Negative Sentiment", impact: "+0", color: "#ef4444" });
    }
    
    // Response time (15 points)
    if (messages.length > 1) {
        const firstMsg = new Date(messages[0].timestamp);
        const lastMsg = new Date(messages[messages.length - 1].timestamp);
        const duration = (lastMsg - firstMsg) / (1000 * 60); // minutes
        
        if (duration < 30) {
            score += 15;
            factors.push({ factor: "Quick Conversation", impact: "+15", color: "#22c55e" });
        } else if (duration < 120) {
            score += 10;
            factors.push({ factor: "Normal Pace", impact: "+10", color: "#3b82f6" });
        } else {
            factors.push({ factor: "Slow Conversation", impact: "+0", color: "#f59e0b" });
        }
    }
    
    // Cap score at 100
    score = Math.min(100, Math.max(0, score));
    
    // Determine engagement level
    let level, levelColor;
    if (score >= 80) {
        level = "Highly Engaged";
        levelColor = "#22c55e";
    } else if (score >= 60) {
        level = "Engaged";
        levelColor = "#3b82f6";
    } else if (score >= 40) {
        level = "Moderately Engaged";
        levelColor = "#f59e0b";
    } else {
        level = "Not Engaged";
        levelColor = "#ef4444";
    }
    
    return {
        success: true,
        data: {
            engagement_score: score,
            engagement_level: level,
            level_color: levelColor,
            factors: factors,
            message_count: messageCount,
            avg_message_length: avgLength.toFixed(0)
        }
    };
}

// Export functions globally
window.AbetworksCalculators = {
    calculateCPL,
    calculateROAS,
    checkFakeLeadProbability,
    findFollowUpGaps,
    calculateWhatsAppResponseTime,
    scoreChatEngagement
};
