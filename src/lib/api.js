// Simple API layer using fetch with mock fallbacks. Backend base URL should be set via VITE_BACKEND_URL
const BASE_URL = import.meta.env.VITE_BACKEND_URL || process.env.API_URL || '';

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function safeFetch(path, options = {}) {
  if (!BASE_URL) throw new Error('No backend URL configured');
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export const api = {
  // Auth
  async login({ email, password }) {
    try {
      return await safeFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
    } catch (e) {
      await sleep(600);
      if (email && password) {
        return { token: 'demo-token', user: { id: 'u1', email } };
      }
      throw e;
    }
  },
  async register({ email, password }) {
    try {
      return await safeFetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
    } catch (e) {
      await sleep(700);
      return { success: true, user: { id: 'u1', email } };
    }
  },
  // Assistant
  async assistant(prompt) {
    try {
      return await safeFetch('/api/assistant', {
        method: 'POST',
        body: JSON.stringify({ prompt }),
      });
    } catch {
      await sleep(900);
      return {
        reply:
          'Here are top stories with strong signals in the last 24h. I included categories, entities and quick links. (Mock response)\n1) Policy shift impacts markets.\n2) Major tech acquisition rumored.\n3) Regional elections update.',
      };
    }
  },
  // Articles & sources
  async articles() {
    try {
      return await safeFetch('/api/articles');
    } catch {
      await sleep(800);
      return [
        {
          id: 'a1',
          title: 'Breaking: Policy move shakes markets',
          source: 'Reuters',
          topic: 'Politics',
          importance: 0.86,
          time: '7m ago',
          url: 'https://reuters.com/example',
        },
        {
          id: 'a2',
          title: 'Mega acquisition rumored in tech sector',
          source: 'The Verge',
          topic: 'Tech',
          importance: 0.78,
          time: '18m ago',
          url: 'https://theverge.com/example',
        },
      ];
    }
  },
  async sources() {
    try {
      return await safeFetch('/api/sources');
    } catch {
      await sleep(500);
      return [
        { id: 's1', name: 'Reuters', url: 'https://reuters.com', tags: ['intl'], freq: '5m' },
        { id: 's2', name: 'AP News', url: 'https://apnews.com', tags: ['US'], freq: '10m' },
      ];
    }
  },
  async summarize(articleId) {
    try {
      return await safeFetch(`/api/ai/summarize?id=${articleId}`);
    } catch {
      await sleep(600);
      return {
        summary:
          'Preliminary AI summary: Markets reacted sharply following a policy statement. Analysts expect short-term volatility with sector-specific implications.',
        tags: ['Markets', 'Policy', 'Breaking'],
        importance: 0.84,
      };
    }
  },
  async createCheckoutSession(plan) {
    try {
      return await safeFetch('/api/payment/session', {
        method: 'POST',
        body: JSON.stringify({ plan }),
      });
    } catch {
      await sleep(700);
      return { url: '/dashboard?plan=active' };
    }
  },
};
