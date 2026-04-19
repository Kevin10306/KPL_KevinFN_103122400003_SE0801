/**
 * JSDoc ini opsional mau dibuat cek ketat atau tidak.
 * Boleh dihapus, boleh dibuat ketat.
 * @param {string} text Teks yang diambil dari berkas
 * @returns {import('./structure').RobotsTxt} 
 */

function parseRobots(text) {
    const result = {
        agents: {},
        Sitemap: []
    };

    let currentAgents = [];
    let IsUserAgent = false;

    const lines = text.split('\n');

    for (const line of lines) {
        const trimmed = line.trim();

        if (!trimmed || trimmed.startsWith('#')) {
            continue;
        }

        const parts = trimmed.split(':');
        
        if (parts.length < 2) {
            continue;
        }

        const directive = parts[0].toLowerCase().trim();
        const value = parts.slice(1).join(':').trim();

        if (directive === 'user-agent') {
            const agent = value.toLowerCase();

            if (!IsUserAgent) {
                currentAgents = [];
            }

            currentAgents.push(agent);

            if (!result.agents[agent]) {
                result.agents[agent] = {
                    Allow: [],
                    Disallow: []
                };
            }

            IsUserAgent = true;
            continue;
        }

        IsUserAgent = false;

        if (directive === 'allow') {
            for (const agent of currentAgents) {
                if (value !== '') {
                    result.agents[agent].Allow.push(value);
                }
            }
        }

        if (directive === 'disallow') {
            for (const agent of currentAgents) {
                if (value !== '') {
                    result.agents[agent].Disallow.push(value);
                }
            }
        }

        if (directive === 'sitemap') {
            if (value !== '') {
                result.Sitemap.push(value);
            }
        }
    }

    return result;
}

module.exports = parseRobots;